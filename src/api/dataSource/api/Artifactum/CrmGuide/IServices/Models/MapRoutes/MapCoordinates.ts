

export default class MapCoordinates  {
	Longitude?: number = null;
	Latitude?: number = null;
	constructor(obj?: Partial<MapCoordinates>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
