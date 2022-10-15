

export default class ProgressMessageModel  {
	Id?: string = '';
	Percent: number = 0;
	constructor(obj?: Partial<ProgressMessageModel>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
