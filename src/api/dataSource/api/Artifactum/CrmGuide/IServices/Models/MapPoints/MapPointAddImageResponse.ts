

export default class MapPointAddImageResponse  {
	Id: number = 0;
	DetailUrl?: string = '';
	PreviewUrl?: string = '';
	constructor(obj?: Partial<MapPointAddImageResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
