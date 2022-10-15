import EnumBizMapRouteType from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/EnumBizMapRouteType';
import EnumBizMapRouteTypeTransmission from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/EnumBizMapRouteTypeTransmission';
import UserMiniInfo from '../../../../../Artifactum/CrmGuide/IServices/Models/Common/UserMiniInfo';
import MapPointShot from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/MapPointShot';
import EnumBizMapRouteStatus from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/EnumBizMapRouteStatus';

export default class MapRouteListItem  {
	Id: number = 0;
	Title?: string = '';
	Description?: string = '';
	Distance?: number = null;
	Time?: number = null;
	Type: EnumBizMapRouteType = null;
	Transmission: EnumBizMapRouteTypeTransmission = null;
	Price?: number = null;
	Rating?: number = null;
	CommentsCount: number = 0;
	PointsCount: number = 0;
	PreviewUrl?: string = '';
	Owner: UserMiniInfo = null;
	MapPoints: Array<MapPointShot> = null;
	Status: EnumBizMapRouteStatus = null;
	constructor(obj?: Partial<MapRouteListItem>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
