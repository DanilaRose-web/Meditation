import MapPointCoordinates from '../../../../../Artifactum/CrmGuide/IServices/Models/MapPoints/MapPointCoordinates';

export default class MapPointUpdateRequest  {
	Id: number = 0;
	Title?: string = '';
	Description?: string = '';
	Coordinates: MapPointCoordinates = null;
	constructor(obj?: Partial<MapPointUpdateRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
