import CropSettings from '../../../../../Tirscript/ImageResizer/Models/CropSettings';

export default class SaveImageRequest  {
	ImageBase64?: string = '';
	OriginalFileName?: string = '';
	CropSettings: CropSettings = null;
	constructor(obj?: Partial<SaveImageRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
