import MapPointCoordinates from '../../../../../Artifactum/CrmGuide/IServices/Models/MapPoints/MapPointCoordinates';
import SaveImageRequest from '../../../../../Artifactum/CrmGuide/IServices/Models/Common/SaveImageRequest';

export default class MapPointCreateRequest  {
	Name?: string = '';
	Description?: string = '';
	MapRouteId: number = 0;
	Height: number = 0;
	Coordinates: MapPointCoordinates = null;
	Images: Array<SaveImageRequest> = null;
	constructor(obj?: Partial<MapPointCreateRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
