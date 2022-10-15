import SaveImageRequest from '../../../../../Artifactum/CrmGuide/IServices/Models/Common/SaveImageRequest';

export default class MapPointAddImageRequest  {
	MapPointId: number = 0;
	Image: SaveImageRequest = null;
	constructor(obj?: Partial<MapPointAddImageRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
