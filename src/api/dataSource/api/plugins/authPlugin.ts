import { Events } from "./events";

export default class AuthPlugin {
  private TokenCookieName: string = "AuthorizationToken";
  private AccountService: IAccountService;
  public User: IUserResponse | null = null;
  public get isLoggedIn() {
    return this.User != null;
  }
  constructor(accountService: IAccountService) {
    this.AccountService = accountService;
  }
  OnLogout(response: IWsResponse<IResponse>) {
    if (response.IsSuccess) {
        this.setUser(null);
    }
  }
  public setUser(response: IUserResponse) {        
    this.User = response;
    if (response != null) { 
      this.AccountService.LogoutEvent.once(this.OnLogout.bind(this));
    }
  }
}


export interface IUserResponse {
	Id: any;
	Email?: String;
	FullName?: String;
}

interface IResponse {
  IsSuccess: Boolean;  
}
interface IWsResponse<T = any> {
  IsSuccess: Boolean;
  Value: T;
}

interface IAccountService {
  LogoutEvent: Events<IWsResponse<IResponse>>;
}