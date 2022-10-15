

export default class CityGetListRequest  {
	Search?: string = '';
	Take?: number = null;
	CountryId?: number = null;
	constructor(obj?: Partial<CityGetListRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
