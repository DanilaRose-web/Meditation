import TansactionItem from '../../../../../Artifactum/CrmGuide/IServices/Models/Users/TansactionItem';

export default class GetTransactionResponse  {
	Tansactions: Array<TansactionItem> = null;
	constructor(obj?: Partial<GetTransactionResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
