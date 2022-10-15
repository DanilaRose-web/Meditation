

export default class MapPointImageListItem  {
	Id: number = 0;
	DetailUrl?: string = '';
	PreviewlUrl?: string = '';
	constructor(obj?: Partial<MapPointImageListItem>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
