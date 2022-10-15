import { WebApiService } from '../../../../plugins/webApiService'
import { Events } from '../../../../plugins/events'
import EventToAsyncDecorator from '../../../../plugins/eventToAsyncDecorator'
import MapPointCreateRequest from '../../../../Artifactum/CrmGuide/IServices/Models/MapPoints/MapPointCreateRequest';
import MapPointDeleteRequest from '../../../../Artifactum/CrmGuide/IServices/Models/MapPoints/MapPointDeleteRequest';
import MapPointUpdateRequest from '../../../../Artifactum/CrmGuide/IServices/Models/MapPoints/MapPointUpdateRequest';
import MapPointGetListRequest from '../../../../Artifactum/CrmGuide/IServices/Models/MapPoints/MapPointGetListRequest';
import MapPointAddImageRequest from '../../../../Artifactum/CrmGuide/IServices/Models/MapPoints/MapPointAddImageRequest';
import WsResponseModel from '../../../../SchemaBuilderServer/Models/WsResponseModel';
import MapPointGetListResponse from '../../../../Artifactum/CrmGuide/IServices/Models/MapPoints/MapPointGetListResponse';
import MapPointAddImageResponse from '../../../../Artifactum/CrmGuide/IServices/Models/MapPoints/MapPointAddImageResponse';

export default class MapPointService {
	webApiService: WebApiService;
	CreateEvent = new Events<WsResponseModel<Boolean>>();
	DeleteEvent = new Events<WsResponseModel<Boolean>>();
	UpdateEvent = new Events<WsResponseModel<Boolean>>();
	GetListEvent = new Events<WsResponseModel<MapPointGetListResponse>>();
	AddImageEvent = new Events<WsResponseModel<MapPointAddImageResponse>>();
	DeleteImageEvent = new Events<WsResponseModel<Boolean>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('MapPointService', 'Create', (res: WsResponseModel<Boolean>) => {
			self.CreateEvent.trigger(res);
		});
		webApiService.on('MapPointService', 'Delete', (res: WsResponseModel<Boolean>) => {
			self.DeleteEvent.trigger(res);
		});
		webApiService.on('MapPointService', 'Update', (res: WsResponseModel<Boolean>) => {
			self.UpdateEvent.trigger(res);
		});
		webApiService.on('MapPointService', 'GetList', (res: WsResponseModel<MapPointGetListResponse>) => {
			self.GetListEvent.trigger(res);
		});
		webApiService.on('MapPointService', 'AddImage', (res: WsResponseModel<MapPointAddImageResponse>) => {
			self.AddImageEvent.trigger(res);
		});
		webApiService.on('MapPointService', 'DeleteImage', (res: WsResponseModel<Boolean>) => {
			self.DeleteImageEvent.trigger(res);
		});
	}
	Create(request: MapPointCreateRequest = null) { 	
        this.webApiService.send('MapPointService', 'Create' , request);
    }
	Delete(request: MapPointDeleteRequest = null) { 	
        this.webApiService.send('MapPointService', 'Delete' , request);
    }
	Update(request: MapPointUpdateRequest = null) { 	
        this.webApiService.send('MapPointService', 'Update' , request);
    }
	GetList(request: MapPointGetListRequest = null) { 	
        this.webApiService.send('MapPointService', 'GetList' , request);
    }
	AddImage(request: MapPointAddImageRequest = null) { 	
        this.webApiService.send('MapPointService', 'AddImage' , request);
    }
	DeleteImage(imageId: number = 0) { 	
        this.webApiService.send('MapPointService', 'DeleteImage' , imageId);
    }
	 // async methods
	async createAsync(request: MapPointCreateRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.Create.bind(this), this.CreateEvent)(request);
	}
	async deleteAsync(request: MapPointDeleteRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.Delete.bind(this), this.DeleteEvent)(request);
	}
	async updateAsync(request: MapPointUpdateRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.Update.bind(this), this.UpdateEvent)(request);
	}
	async getListAsync(request: MapPointGetListRequest = null): Promise<MapPointGetListResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetList.bind(this), this.GetListEvent)(request);
	}
	async addImageAsync(request: MapPointAddImageRequest = null): Promise<MapPointAddImageResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.AddImage.bind(this), this.AddImageEvent)(request);
	}
	async deleteImageAsync(imageId: number = 0): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.DeleteImage.bind(this), this.DeleteImageEvent)(imageId);
	}
}