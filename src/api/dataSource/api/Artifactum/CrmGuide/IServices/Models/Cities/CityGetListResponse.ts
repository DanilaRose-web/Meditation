

export default class CityGetListResponse  {
	Id: number = 0;
	Name?: string = '';
	constructor(obj?: Partial<CityGetListResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
