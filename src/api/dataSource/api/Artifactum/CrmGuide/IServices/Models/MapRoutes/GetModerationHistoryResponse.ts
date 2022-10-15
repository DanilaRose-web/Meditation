import ModerationHistoryItem from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/ModerationHistoryItem';

export default class GetModerationHistoryResponse  {
	Items: Array<ModerationHistoryItem> = null;
	constructor(obj?: Partial<GetModerationHistoryResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
