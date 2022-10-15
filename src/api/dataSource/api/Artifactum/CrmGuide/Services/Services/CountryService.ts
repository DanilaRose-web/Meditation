import { WebApiService } from '../../../../plugins/webApiService'
import { Events } from '../../../../plugins/events'
import EventToAsyncDecorator from '../../../../plugins/eventToAsyncDecorator'
import WsResponseModel from '../../../../SchemaBuilderServer/Models/WsResponseModel';
import CountriesGetListResponse from '../../../../Artifactum/CrmGuide/IServices/Models/Countries/CountriesGetListResponse';

export default class CountryService {
	webApiService: WebApiService;
	GetListEvent = new Events<WsResponseModel<Array<CountriesGetListResponse>>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('CountryService', 'GetList', (res: WsResponseModel<Array<CountriesGetListResponse>>) => {
			self.GetListEvent.trigger(res);
		});
	}
	GetList() { 	
        this.webApiService.send('CountryService', 'GetList' );
    }
	 // async methods
	async getListAsync(): Promise<Array<CountriesGetListResponse>> {
		return EventToAsyncDecorator.getInstance().bind(this.GetList.bind(this), this.GetListEvent)();
	}
}