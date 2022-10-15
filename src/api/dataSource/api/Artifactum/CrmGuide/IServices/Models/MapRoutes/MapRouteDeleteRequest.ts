

export default class MapRouteDeleteRequest  {
	Id: number = 0;
	constructor(obj?: Partial<MapRouteDeleteRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
