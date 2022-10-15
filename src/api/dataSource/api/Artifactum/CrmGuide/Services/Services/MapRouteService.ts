import { WebApiService } from '../../../../plugins/webApiService'
import { Events } from '../../../../plugins/events'
import EventToAsyncDecorator from '../../../../plugins/eventToAsyncDecorator'
import MapRouteCreateRequest from '../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/MapRouteCreateRequest';
import MapRouteUpdateRequest from '../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/MapRouteUpdateRequest';
import MapRouteDeleteRequest from '../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/MapRouteDeleteRequest';
import MapRoutePointRelatioUpdateRequest from '../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/MapRoutePointRelatioUpdateRequest';
import MapRouteModerationRequest from '../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/MapRouteModerationRequest';
import MapRouteGetListRequest from '../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/MapRouteGetListRequest';
import WsResponseModel from '../../../../SchemaBuilderServer/Models/WsResponseModel';
import GetModerationHistoryResponse from '../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/GetModerationHistoryResponse';
import MapRouteGetListResponse from '../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/MapRouteGetListResponse';

export default class MapRouteService {
	webApiService: WebApiService;
	CreateEvent = new Events<WsResponseModel<number>>();
	UpdateEvent = new Events<WsResponseModel<Boolean>>();
	DeleteEvent = new Events<WsResponseModel<Boolean>>();
	UpdateMapRoutePointRelationEvent = new Events<WsResponseModel<Boolean>>();
	ModerationMapRouteEvent = new Events<WsResponseModel<Boolean>>();
	GetModerationHistoryEvent = new Events<WsResponseModel<GetModerationHistoryResponse>>();
	GetListEvent = new Events<WsResponseModel<MapRouteGetListResponse>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('MapRouteService', 'Create', (res: WsResponseModel<number>) => {
			self.CreateEvent.trigger(res);
		});
		webApiService.on('MapRouteService', 'Update', (res: WsResponseModel<Boolean>) => {
			self.UpdateEvent.trigger(res);
		});
		webApiService.on('MapRouteService', 'Delete', (res: WsResponseModel<Boolean>) => {
			self.DeleteEvent.trigger(res);
		});
		webApiService.on('MapRouteService', 'UpdateMapRoutePointRelation', (res: WsResponseModel<Boolean>) => {
			self.UpdateMapRoutePointRelationEvent.trigger(res);
		});
		webApiService.on('MapRouteService', 'ModerationMapRoute', (res: WsResponseModel<Boolean>) => {
			self.ModerationMapRouteEvent.trigger(res);
		});
		webApiService.on('MapRouteService', 'GetModerationHistory', (res: WsResponseModel<GetModerationHistoryResponse>) => {
			self.GetModerationHistoryEvent.trigger(res);
		});
		webApiService.on('MapRouteService', 'GetList', (res: WsResponseModel<MapRouteGetListResponse>) => {
			self.GetListEvent.trigger(res);
		});
	}
	Create(request: MapRouteCreateRequest = null) { 	
        this.webApiService.send('MapRouteService', 'Create' , request);
    }
	Update(request: MapRouteUpdateRequest = null) { 	
        this.webApiService.send('MapRouteService', 'Update' , request);
    }
	Delete(request: MapRouteDeleteRequest = null) { 	
        this.webApiService.send('MapRouteService', 'Delete' , request);
    }
	UpdateMapRoutePointRelation(request: MapRoutePointRelatioUpdateRequest = null) { 	
        this.webApiService.send('MapRouteService', 'UpdateMapRoutePointRelation' , request);
    }
	ModerationMapRoute(request: MapRouteModerationRequest = null) { 	
        this.webApiService.send('MapRouteService', 'ModerationMapRoute' , request);
    }
	GetModerationHistory(request: MapRouteModerationRequest = null) { 	
        this.webApiService.send('MapRouteService', 'GetModerationHistory' , request);
    }
	GetList(request: MapRouteGetListRequest = null) { 	
        this.webApiService.send('MapRouteService', 'GetList' , request);
    }
	 // async methods
	async createAsync(request: MapRouteCreateRequest = null): Promise<number> {
		return EventToAsyncDecorator.getInstance().bind(this.Create.bind(this), this.CreateEvent)(request);
	}
	async updateAsync(request: MapRouteUpdateRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.Update.bind(this), this.UpdateEvent)(request);
	}
	async deleteAsync(request: MapRouteDeleteRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.Delete.bind(this), this.DeleteEvent)(request);
	}
	async updateMapRoutePointRelationAsync(request: MapRoutePointRelatioUpdateRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.UpdateMapRoutePointRelation.bind(this), this.UpdateMapRoutePointRelationEvent)(request);
	}
	async moderationMapRouteAsync(request: MapRouteModerationRequest = null): Promise<Boolean> {
		return EventToAsyncDecorator.getInstance().bind(this.ModerationMapRoute.bind(this), this.ModerationMapRouteEvent)(request);
	}
	async getModerationHistoryAsync(request: MapRouteModerationRequest = null): Promise<GetModerationHistoryResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetModerationHistory.bind(this), this.GetModerationHistoryEvent)(request);
	}
	async getListAsync(request: MapRouteGetListRequest = null): Promise<MapRouteGetListResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetList.bind(this), this.GetListEvent)(request);
	}
}