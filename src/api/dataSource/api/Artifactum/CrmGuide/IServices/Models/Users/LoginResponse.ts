

export default class LoginResponse  {
	UserId: number = 0;
	IsEmailActive: boolean = false;
	constructor(obj?: Partial<LoginResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
