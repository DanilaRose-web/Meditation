import { WebApiService } from '../../../../plugins/webApiService'
import { Events } from '../../../../plugins/events'
import EventToAsyncDecorator from '../../../../plugins/eventToAsyncDecorator'
import WsResponseModel from '../../../../SchemaBuilderServer/Models/WsResponseModel';

export default class BaseWsService {
	webApiService: WebApiService;
	ToHttpUrlEvent = new Events<WsResponseModel<String>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('BaseWsService', 'ToHttpUrl', (res: WsResponseModel<String>) => {
			self.ToHttpUrlEvent.trigger(res);
		});
	}
	ToHttpUrl(relativeUrl?: string = '') { 	
        this.webApiService.send('BaseWsService', 'ToHttpUrl' , relativeUrl);
    }
	 // async methods
	async toHttpUrlAsync(relativeUrl: string = ''): Promise<String> {
		return EventToAsyncDecorator.getInstance().bind(this.ToHttpUrl.bind(this), this.ToHttpUrlEvent)(relativeUrl);
	}
}