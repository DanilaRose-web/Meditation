

export default class MapPointDeleteRequest  {
	Id: number = 0;
	constructor(obj?: Partial<MapPointDeleteRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
