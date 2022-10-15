import MapRoutePointRelationShot from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/MapRoutePointRelationShot';

export default class MapRoutePointRelatioUpdateRequest  {
	MapRouteId: number = 0;
	MapPointsRelation: Array<MapRoutePointRelationShot> = null;
	constructor(obj?: Partial<MapRoutePointRelatioUpdateRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
