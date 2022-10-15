

export default class GetTransactionRequest  {
	From?: Date = null;
	To?: Date = null;
	constructor(obj?: Partial<GetTransactionRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
