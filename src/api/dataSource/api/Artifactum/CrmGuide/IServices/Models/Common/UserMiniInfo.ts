

export default class UserMiniInfo  {
	UserId: number = 0;
	NickName?: string = '';
	PhotoUrl?: string = '';
	constructor(obj?: Partial<UserMiniInfo>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
