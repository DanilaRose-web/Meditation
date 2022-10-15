import { WebApiService } from '../../../../plugins/webApiService'
import { Events } from '../../../../plugins/events'
import EventToAsyncDecorator from '../../../../plugins/eventToAsyncDecorator'
import LoginRequest from '../../../../Artifactum/CrmGuide/IServices/Models/Users/LoginRequest';
import GetTransactionRequest from '../../../../Artifactum/CrmGuide/IServices/Models/Users/GetTransactionRequest';
import WsResponseModel from '../../../../SchemaBuilderServer/Models/WsResponseModel';
import LoginResponse from '../../../../Artifactum/CrmGuide/IServices/Models/Users/LoginResponse';
import LogoutResponse from '../../../../Artifactum/CrmGuide/IServices/Models/Users/LogoutResponse';
import GetProfileResponse from '../../../../Artifactum/CrmGuide/IServices/Models/Profiles/GetProfileResponse';
import GetGoldBalanceResponse from '../../../../Artifactum/CrmGuide/IServices/Models/Profiles/GetGoldBalanceResponse';
import GetTransactionResponse from '../../../../Artifactum/CrmGuide/IServices/Models/Users/GetTransactionResponse';

export default class AccountService {
	webApiService: WebApiService;
	LoginEvent = new Events<WsResponseModel<LoginResponse>>();
	LogoutEvent = new Events<WsResponseModel<LogoutResponse>>();
	GetProfileEvent = new Events<WsResponseModel<GetProfileResponse>>();
	GetGoldBalanceEvent = new Events<WsResponseModel<GetGoldBalanceResponse>>();
	GetTransactionEvent = new Events<WsResponseModel<GetTransactionResponse>>();
	constructor(webApiService: WebApiService) {
		const self = this;
		this.webApiService = webApiService;
		webApiService.on('AccountService', 'Login', (res: WsResponseModel<LoginResponse>) => {
			self.LoginEvent.trigger(res);
		});
		webApiService.on('AccountService', 'Logout', (res: WsResponseModel<LogoutResponse>) => {
			self.LogoutEvent.trigger(res);
		});
		webApiService.on('AccountService', 'GetProfile', (res: WsResponseModel<GetProfileResponse>) => {
			self.GetProfileEvent.trigger(res);
		});
		webApiService.on('AccountService', 'GetGoldBalance', (res: WsResponseModel<GetGoldBalanceResponse>) => {
			self.GetGoldBalanceEvent.trigger(res);
		});
		webApiService.on('AccountService', 'GetTransaction', (res: WsResponseModel<GetTransactionResponse>) => {
			self.GetTransactionEvent.trigger(res);
		});
	}
	Login(request: LoginRequest = null) { 	
        this.webApiService.send('AccountService', 'Login' , request);
    }
	Logout() { 	
        this.webApiService.send('AccountService', 'Logout' );
    }
	GetProfile() { 	
        this.webApiService.send('AccountService', 'GetProfile' );
    }
	GetGoldBalance() { 	
        this.webApiService.send('AccountService', 'GetGoldBalance' );
    }
	GetTransaction(request: GetTransactionRequest = null) { 	
        this.webApiService.send('AccountService', 'GetTransaction' , request);
    }
	 // async methods
	async loginAsync(request: LoginRequest = null): Promise<LoginResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.Login.bind(this), this.LoginEvent)(request);
	}
	async logoutAsync(): Promise<LogoutResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.Logout.bind(this), this.LogoutEvent)();
	}
	async getProfileAsync(): Promise<GetProfileResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetProfile.bind(this), this.GetProfileEvent)();
	}
	async getGoldBalanceAsync(): Promise<GetGoldBalanceResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetGoldBalance.bind(this), this.GetGoldBalanceEvent)();
	}
	async getTransactionAsync(request: GetTransactionRequest = null): Promise<GetTransactionResponse> {
		return EventToAsyncDecorator.getInstance().bind(this.GetTransaction.bind(this), this.GetTransactionEvent)(request);
	}
}