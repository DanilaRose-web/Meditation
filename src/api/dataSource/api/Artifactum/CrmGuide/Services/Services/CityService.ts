import { WebApiService } from '../../../../plugins/webApiService'
import { Events } from '../../../../plugins/events'
import EventToAsyncDecorator from '../../../../plugins/eventToAsyncDecorator'
import CityGetListRequest from '../../../../Artifactum/CrmGuide/IServices/Models/Cities/CityGetListRequest';
import WsResponseModel from '../../../../SchemaBuilderServer/Models/WsResponseModel';
import CityGetListResponse from '../../../../Artifactum/CrmGuide/IServices/Models/Cities/CityGetListResponse';

export default class CityService {
	webApiService: WebApiService;
	GetListEvent = new Events<WsResponseModel<Array<CityGetListResponse>>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('CityService', 'GetList', (res: WsResponseModel<Array<CityGetListResponse>>) => {
			self.GetListEvent.trigger(res);
		});
	}
	GetList(request: CityGetListRequest = null) { 	
        this.webApiService.send('CityService', 'GetList' , request);
    }
	 // async methods
	async getListAsync(request: CityGetListRequest = null): Promise<Array<CityGetListResponse>> {
		return EventToAsyncDecorator.getInstance().bind(this.GetList.bind(this), this.GetListEvent)(request);
	}
}