import PageRequest from '../../../../../PaginationHelper/Lib/PageRequest';
import EnumBizMapRouteTypeTransmission from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/EnumBizMapRouteTypeTransmission';
import EnumBizMapRouteType from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/EnumBizMapRouteType';
import MapCoordinates from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/MapCoordinates';

export default class MapRouteGetListRequest  {
	Search?: string = '';
	Page: PageRequest = null;
	OnlyFree?: boolean = false;
	ShowPassed: boolean = false;
	Transmission?: EnumBizMapRouteTypeTransmission = null;
	Type?: EnumBizMapRouteType = null;
	TimeFrom?: number = null;
	TimeTo?: number = null;
	DistanceFrom?: number = null;
	DistanceTo?: number = null;
	LeftTopCoordinates: MapCoordinates = null;
	RightBottomCoordinates: MapCoordinates = null;
	AuthorId?: number = null;
	SearchAuthor?: string = '';
	constructor(obj?: Partial<MapRouteGetListRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
