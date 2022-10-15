import WsResponseModel from '../SchemaBuilderServer/Models/WsResponseModel';
import { Events } from "./events";

export default class EventToAsyncDecorator {
    private static _instance: EventToAsyncDecorator;
    private constructor() {}
    public static getInstance(): EventToAsyncDecorator
    {
        return this._instance || (this._instance = new this());
    }
  /**
   * Обернуть event и обработчик создав асинхронную функцию.
   * Внимание! Данный обработчик гарантирует валидную работу только в случае если на 
   * сервере выполняются следующие условия (так должно быть по крайней мере):
   * 1. Ответы на одинаковые запросы выполняются в той же последовательности как и вызывались.
   * 2. На запрос, даже не удачный, обязательно прийдет ответ.
   * @param requestFunc 
   * @param eventResponse 
   */
  bind<TReq, TRes>(requestFunc: (req: TReq) => void, eventResponse: Events<WsResponseModel<TRes>>): (req?: TReq) => Promise<TRes> {
    return async (req?: TReq) => new Promise((resolve, reject) => {
      // обработчик ответа сервера
      const resolver = (res: WsResponseModel<TRes>) => {
        if (res.IsSuccess) {
          resolve(res.Value);
        } else {
          reject(res.ErrorMessage + '');
        }
      };
      // ищем существующие в очереди
      const find = this.callOrderItems.find(i => i.event === eventResponse);
      if (find) {
        // добавляем в очередь. Предыдущий обработчик подпишет текущий.
        find.push(resolver);
      } else {
        // если очередь для этого события пуста - подписываемся
        this.callOrderItems.push(new EventSubscriber(eventResponse, resolver));
        this.subscribe(eventResponse, resolver);
      }
      // выполним запрос
      requestFunc(req);
    })
  }
  // subscribers: ((res: WsResponseModel<any>) => void)[] = [];
  // очередь на выполнения для конкретных event-ов
  private callOrderItems: EventSubscriber<Object>[] = [];
  /**
   * Попытка подписать следующее в очереди событие, после того как первое отработало
   * Из-за того что обработчики подписаны на одно и то же событие то они оба отработают на первый же ответ.
   * Т.е. обработчик 1 и 2 отработают на ответ на запрос 1, при это ответ 2 будет проигнорирован.
   * Тут же мы подписываем только первый обработчик в очереди. Точнее его оберку, которая зарезолвит обработчик и подпишет следующий в очереди
   * @param eventResponse 
   * @param resolver 
   */
  private trySubscribeNext(eventResponse: Events<WsResponseModel<any>>, 
    resolver: (res: WsResponseModel<any>) => void) {      
      const findEvent = this.callOrderItems.find(x=>x.event == eventResponse);
      if (!findEvent) {        
        return;
      }
      findEvent.remove(resolver);
      if (findEvent.subscribers.length > 0) {        
          this.subscribe(findEvent.event, findEvent.subscribers[0]);
      } else {
        this.removeSubscriber(findEvent);
      }
  }
  /**
   * Удалить подписчик из очереди
   * @param subs 
   */
  private removeSubscriber(subs: EventSubscriber<Object>) {
    const idx = this.callOrderItems.indexOf(subs);
    if (idx === -1) {
      console.warn('В очереди выполнения нет такого элемента!')
      return;
    }
    this.callOrderItems.splice(idx, 1);
  }
  /**
   * Подписываемся на событие, если оно отработает - подпишем следующее событие
   * @param eventResponse 
   * @param resolver 
   */
  private subscribe(eventResponse: Events<WsResponseModel<any>>, resolver: (res: WsResponseModel<any>) => void) {    
    eventResponse.once((res: WsResponseModel<any>) => {
      this.trySubscribeNext(eventResponse, resolver);
      resolver(res);
    });
  }
}

/**
 * Класс для хранения события и его обработчиков
 */
class EventSubscriber<TRes> {
  // обработчики событий
  subscribers: ((res: WsResponseModel<any>) => void)[] = [];
  // событие
  constructor(public event: Events<WsResponseModel<TRes>>,
    ...subscribers: ((res: WsResponseModel<any>) => void)[]) {
      this.subscribers = subscribers || [];
  }
  push(func: (res: WsResponseModel<any>) => void) {
    this.subscribers.push(func);
  }
  remove(func: (res: WsResponseModel<any>) => void) {
    const idx = this.subscribers.indexOf(func);
    if (idx === -1) {
      console.warn('Подписчик не найден!')
      return;
    }
    this.subscribers.splice(idx, 1);
  }
}
