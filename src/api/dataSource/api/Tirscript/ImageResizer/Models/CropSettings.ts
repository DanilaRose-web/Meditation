

export default class CropSettings  {
	X: number = 0;
	Y: number = 0;
	Width: number = 0;
	Height: number = 0;
	constructor(obj?: Partial<CropSettings>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
