

export default class MapRouteModerationRequest  {
	MapRouteId: number = 0;
	constructor(obj?: Partial<MapRouteModerationRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
