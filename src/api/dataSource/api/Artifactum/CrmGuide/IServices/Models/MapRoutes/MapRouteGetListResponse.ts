import MapRouteListItem from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/MapRouteListItem';
import PageResponse from '../../../../../PaginationHelper/Lib/PageResponse';

export default class MapRouteGetListResponse  {
	Items: Array<MapRouteListItem> = null;
	Page: PageResponse = null;
	constructor(obj?: Partial<MapRouteGetListResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
