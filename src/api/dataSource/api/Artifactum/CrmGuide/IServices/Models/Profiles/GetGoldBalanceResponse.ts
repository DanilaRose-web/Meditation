

export default class GetGoldBalanceResponse  {
	GoldBalance: number = 0;
	constructor(obj?: Partial<GetGoldBalanceResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
