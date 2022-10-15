import SaveImageRequest from '../../../../../Artifactum/CrmGuide/IServices/Models/Common/SaveImageRequest';
import EnumBizMapRouteType from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/EnumBizMapRouteType';
import EnumBizMapRouteTypeTransmission from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/EnumBizMapRouteTypeTransmission';

export default class MapRouteUpdateRequest  {
	Id: number = 0;
	Title?: string = '';
	Description?: string = '';
	Price?: number = null;
	PreviewImage: SaveImageRequest = null;
	Type: EnumBizMapRouteType = null;
	Transmission: EnumBizMapRouteTypeTransmission = null;
	constructor(obj?: Partial<MapRouteUpdateRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
