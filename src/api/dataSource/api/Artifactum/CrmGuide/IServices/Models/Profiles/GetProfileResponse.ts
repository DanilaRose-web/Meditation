import EnumBizGender from '../../../../../Artifactum/CrmGuide/IServices/Models/Account/EnumBizGender';

export default class GetProfileResponse  {
	UserId: number = 0;
	Email?: string = '';
	FullName?: string = '';
	NickName?: string = '';
	BirthDate?: Date = null;
	Phone?: string = '';
	CityId?: number = null;
	CityName?: string = '';
	CountryId?: number = null;
	CountryName?: string = '';
	PhotoUrl?: string = '';
	LanguageId?: number = null;
	LanguageName?: string = '';
	Gender?: EnumBizGender = null;
	GoldBalance: number = 0;
	MoneyBalance: number = 0;
	ArtifactCount: number = 0;
	constructor(obj?: Partial<GetProfileResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
