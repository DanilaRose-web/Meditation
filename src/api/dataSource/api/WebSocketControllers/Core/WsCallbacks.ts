import { WebApiService } from '../../plugins/webApiService'
import { Events } from '../../plugins/events'
import EventToAsyncDecorator from '../../plugins/eventToAsyncDecorator'
import WsResponseModel from '../../SchemaBuilderServer/Models/WsResponseModel';
import ProgressMessageModel from '../../WebSocketControllers/Core/Models/ProgressMessageModel';

export default class WsCallbacks {
	webApiService: WebApiService;
	UploadMessageProgressEvent = new Events<WsResponseModel<ProgressMessageModel>>();
	ErrorProcessAuthorizationEvent = new Events<WsResponseModel<Boolean>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('WsCallbacks', 'UploadMessageProgress', (res: WsResponseModel<ProgressMessageModel>) => {
			self.UploadMessageProgressEvent.trigger(res);
		});
		webApiService.on('WsCallbacks', 'ErrorProcessAuthorization', (res: WsResponseModel<Boolean>) => {
			self.ErrorProcessAuthorizationEvent.trigger(res);
		});
	}
	UploadMessageProgress() { 	
        this.webApiService.send('WsCallbacks', 'UploadMessageProgress' );
    }
	ErrorProcessAuthorization() { 	
        this.webApiService.send('WsCallbacks', 'ErrorProcessAuthorization' );
    }
	 // async methods
	async uploadMessageProgressAsync(): Promise<ProgressMessageModel> {
		return EventToAsyncDecorator.getInstance().bind(this.UploadMessageProgress.bind(this), this.UploadMessageProgressEvent)();
	}
	async errorProcessAuthorizationAsync(): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ErrorProcessAuthorization.bind(this), this.ErrorProcessAuthorizationEvent)();
	}
}