import PageRequest from '../../../../../PaginationHelper/Lib/PageRequest';

export default class MapPointGetListRequest  {
	Page: PageRequest = null;
	Search?: string = '';
	CityId?: number = null;
	CountryId?: number = null;
	MapRouteId: number = 0;
	constructor(obj?: Partial<MapPointGetListRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
