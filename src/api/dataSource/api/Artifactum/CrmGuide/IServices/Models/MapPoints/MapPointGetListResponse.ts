import MapPointItem from '../../../../../Artifactum/CrmGuide/IServices/Models/MapPoints/MapPointItem';
import PageResponse from '../../../../../PaginationHelper/Lib/PageResponse';

export default class MapPointGetListResponse  {
	Items: Array<MapPointItem> = null;
	Page: PageResponse = null;
	constructor(obj?: Partial<MapPointGetListResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
