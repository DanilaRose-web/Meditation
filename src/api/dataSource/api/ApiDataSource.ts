import { WebApiService } from './plugins/webApiService';
import AuthPlugin from './plugins/authPlugin';
import { IUserResponse } from './plugins/authPlugin';
import AccountService from './Artifactum/CrmGuide/Services/Services/AccountService';
import BaseWsService from './Artifactum/CrmGuide/Services/Services/BaseWsService';
import CityService from './Artifactum/CrmGuide/Services/Services/CityService';
import CountryService from './Artifactum/CrmGuide/Services/Services/CountryService';
import MapPointService from './Artifactum/CrmGuide/Services/Services/MapPointService';
import MapRouteService from './Artifactum/CrmGuide/Services/Services/MapRouteService';
import WsCallbacks from './WebSocketControllers/Core/WsCallbacks'

export default class ApiDataSource {
	webApiService: WebApiService;
	private authPlugin: AuthPlugin;
	AccountService: AccountService;
	BaseWsService: BaseWsService;
	CityService: CityService;
	CountryService: CountryService;
	MapPointService: MapPointService;
	MapRouteService: MapRouteService;
	WsCallbacks: WsCallbacks;
	constructor(webApiUrl: string) {
		this.webApiService = new WebApiService(webApiUrl);
		this.AccountService = new AccountService(this.webApiService);
		this.BaseWsService = new BaseWsService(this.webApiService);
		this.CityService = new CityService(this.webApiService);
		this.CountryService = new CountryService(this.webApiService);
		this.MapPointService = new MapPointService(this.webApiService);
		this.MapRouteService = new MapRouteService(this.webApiService);
		this.WsCallbacks = new WsCallbacks(this.webApiService);
		// плагин авторизации
		this.authPlugin = new AuthPlugin(this.AccountService);
	}

	public get User(): IUserResponse {
		return this.authPlugin.User;
	}
	public get isLoggedIn(): boolean {
		return this.authPlugin.isLoggedIn;
	}
	public SetUser(user: IUserResponse) {
		this.authPlugin.setUser(user);
	}
}
