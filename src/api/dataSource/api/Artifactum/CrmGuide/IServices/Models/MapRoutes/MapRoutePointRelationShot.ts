

export default class MapRoutePointRelationShot  {
	MapPointId: number = 0;
	Number: number = 0;
	constructor(obj?: Partial<MapRoutePointRelationShot>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
