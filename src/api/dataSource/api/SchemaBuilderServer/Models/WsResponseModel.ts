

export default class WsResponseModel<T>  {
	Method?: string = '';
	Class?: string = '';
	ErrorMessage?: string = '';
	Value: T = null;
	IsSuccess: boolean = false;
	constructor(obj?: Partial<WsResponseModel<T>>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
