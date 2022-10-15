

export default class MapPointCoordinates  {
	Longitude: number = 0;
	Latitude: number = 0;
	constructor(obj?: Partial<MapPointCoordinates>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
