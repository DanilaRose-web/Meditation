

export default class MapPointShot  {
	MapPointId: number = 0;
	Number: number = 0;
	constructor(obj?: Partial<MapPointShot>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
