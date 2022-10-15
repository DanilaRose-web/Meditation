

export default class CountriesGetListResponse  {
	Id: number = 0;
	Name?: string = '';
	constructor(obj?: Partial<CountriesGetListResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
