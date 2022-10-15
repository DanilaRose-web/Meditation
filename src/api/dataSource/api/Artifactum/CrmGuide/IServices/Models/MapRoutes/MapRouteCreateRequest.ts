import SaveImageRequest from '../../../../../Artifactum/CrmGuide/IServices/Models/Common/SaveImageRequest';
import EnumBizMapRouteType from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/EnumBizMapRouteType';
import EnumBizMapRouteTypeTransmission from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/EnumBizMapRouteTypeTransmission';

export default class MapRouteCreateRequest  {
	Title?: string = '';
	Description?: string = '';
	PreviewUrl?: string = '';
	Price?: number = null;
	PreviewImage: SaveImageRequest = null;
	Type: EnumBizMapRouteType = null;
	Transmission: EnumBizMapRouteTypeTransmission = null;
	constructor(obj?: Partial<MapRouteCreateRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
