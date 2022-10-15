import _Vue from "vue"
import KeyboardSettings from "./Models/KeyboardSettings";
import PosActionOptions from "./Models/PosActionOptions";
import PosActionResponseOptions from "./Models/PosActionResponseOptions";
import PostMessageSubscriber from "./Models/PostMessageSubscriber";
import PrinterReceipt from "./Models/PrinterReceipt";
import ScanResult from "./Models/ScanResult";

export default {
    install(Vue: typeof _Vue)  {
        const plugin = new PosStore();  
        Vue.prototype.$posStore = plugin;
        (Vue as any).$posStore = plugin;
        }
}

export class PosStore {
    private DeviceManagerName:string = "AndroidDeviceManagerMotivation"
    constructor(){
        if(!this.isFramed)
            console.error('В родительском окне не найден объект AndroidDevice')

        this.addListenerPostMessage();
        //this.AndroidDeviceManager = this.getAndroidDeviceManager();
        //console.log('PosStore AndroidDeviceManager', this.AndroidDeviceManager,window.top);
    }  
    //AndroidDeviceManager : any;

    /**
     * Проверка запущено приложение во фрейме или нет
     */
    private get isFramed(){
        var isFramed = false;
        try {
            isFramed = window != window.top || document != top.document || self.location != top.location;
        } catch (e) {
            isFramed = true;
        }
       return isFramed;
    }
    private ExecuteAction(options:PosActionOptions){        
        console.log('VUE postMessage', options);
        window.top.postMessage(options,"*");
    }
    private addListenerPostMessage(){
        const self = this;
        window.addEventListener("message", function(e) {  
            if(!e.data || !(e.data as PosActionResponseOptions) )
                return;
                
            console.log('VUE ListenerPostMessage receved', e.data);
            self.onPostMessage(e.data);
            // can message back using event.source.postMessage(...)
        },false);
    }

    private onPostMessage(data:PosActionResponseOptions){
        var subscriber = this.subscribtions.find(x=>x.RequestId === data.RequestId);
        if(!subscriber)
            return;
        this.subscribtions = this.subscribtions.filter(x=>x!==subscriber);
        subscriber.Callback.apply(this,[data.Argument]);
    }
    
    public async getLabelAsync(name: string): Promise<string>
    {        
        if(!this.isFramed)
            return name;
        return await this.executeAsync<string>("getLabel",name);
    }
    public async showKeyboardAsync(settings: KeyboardSettings)
    {        
        if(!this.isFramed)              
            return '';
        return await this.executeAsync<string>('showKeyboard',settings);        
    }
    public async scanQrCodeAsync(): Promise<ScanResult>//callback: (result:ScanResult)=>void
    {        
        if(!this.isFramed)
        {
            var res = prompt('Введите баркод для теста');            
            return {
                isSuccess : !!res,
                text: res
            };
        } 
        return await this.executeAsync<ScanResult>('scanQrCode');                
    }
    public async checkPrinter():Promise<boolean>
    {
        if(!this.isFramed)
        {            
            alert('Эта операция доступна только на посе')
            return false;
        }        
        return await this.executeAsync<boolean>('checkPrinter');
    }
    public async print(receipt: PrinterReceipt):Promise<boolean>
    {
        if(!this.isFramed)
        {            
            alert('Эта операция доступна только на посе')
            return false;
        }        
        return await this.executeAsync<boolean>('print',receipt);
    }
    // public showKeyboard(settings: KeyboardSettings,callback: (text:string)=>void)
    // {        
    //     if(!this.isFramed)
    //     {
    //         callback(undefined);
    //         return;
    //     }        
    //     console.log('showKeyboard', settings);
    //     this.ExecuteAction({
    //         Name: this.DeviceManagerName+".showKeyboard",
    //         Arguments: [settings, callback],
    //         RequestId: this.newGuid()
    //     });
    // }
    public getPosCode(){
            return 'N1AP27';       
    }
    public async getPosCodeAsync(): Promise<string>
    {   
        if(!this.isFramed)
            return 'N1AP27';
        return await this.executeAsync<string>('getPosCode');       
    }
 
    // private AndroidDeviceManager : any;

    // public getLanguage():string{
    //     if(!this.AndroidDeviceManager)
    //     {   
    //         return 'ru';
    //     }
    //     //return 'de';
    //     return this.AndroidDeviceManager.getLanguage() || 'ru';
    // }

    public executeAsync<TRes>(methodName: string, ...args:Array<any>)//: () => Promise<TRes>
    {   
        return new Promise<TRes>((resolve, reject) => {

            const subscriber:PostMessageSubscriber = {
                RequestId: this.newGuid(),
                Callback:(res:any)=>resolve(res)
            };
            this.subscribtions.push(subscriber)
            this.ExecuteAction({
                Name: methodName,
                Arguments: args||[],
                RequestId: subscriber.RequestId
            });
          })        
    }
    private subscribtions:Array<PostMessageSubscriber> = [];
    private newGuid(): string{
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });    
      }
}


