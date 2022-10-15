

export default class LoginRequest  {
	Email?: string = '';
	Password?: string = '';
	constructor(obj?: Partial<LoginRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
