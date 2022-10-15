import MapPointCoordinates from '../../../../../Artifactum/CrmGuide/IServices/Models/MapPoints/MapPointCoordinates';
import MapPointImageListItem from '../../../../../Artifactum/CrmGuide/IServices/Models/MapPoints/MapPointImageListItem';

export default class MapPointItem  {
	Id: number = 0;
	Name?: string = '';
	CountryId?: number = null;
	CityId?: number = null;
	Number: number = 0;
	Description?: string = '';
	Coordinates: MapPointCoordinates = null;
	Images: Array<MapPointImageListItem> = null;
	MapRouteId: number = 0;
	constructor(obj?: Partial<MapPointItem>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
