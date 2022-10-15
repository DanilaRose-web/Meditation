

export default class LogoutResponse  {
	IsSuccess: boolean = false;
	constructor(obj?: Partial<LogoutResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
