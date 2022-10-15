import EnumBizMapRouteStatus from '../../../../../Artifactum/CrmGuide/IServices/Models/MapRoutes/EnumBizMapRouteStatus';

export default class ModerationHistoryItem  {
	Id: number = 0;
	Date: Date = null;
	Status: EnumBizMapRouteStatus = null;
	Descrtiption?: string = '';
	constructor(obj?: Partial<ModerationHistoryItem>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
