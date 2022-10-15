import EnumBizGoldTransactionType from '../../../../../Artifactum/CrmGuide/IServices/Models/Users/EnumBizGoldTransactionType';

export default class TansactionItem  {
	Id: number = 0;
	Amount: number = 0;
	IsRefill: boolean = false;
	Date: Date = null;
	Type: EnumBizGoldTransactionType = null;
	constructor(obj?: Partial<TansactionItem>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
