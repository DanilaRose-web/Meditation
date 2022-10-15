import * as enRes from './translations/localization.en.json';
import * as ruRes from './translations/localization.ru.json';
import * as lvRes from './translations/localization.lv.json';
// todo dynamic import resources

export class LocaleProvider {
  private static _instance: LocaleProvider;
  private resouces = {
    en: enRes,
    ru: ruRes,
    lv: lvRes,
  };
  private lang = [
    { id: 0, langCode: 'en', name: 'English' },    
    { id: 1, langCode: 'ru', name: 'Русский' },
    { id: 3, langCode: 'lv', name: 'Latvian' }
  ];
  public static get Instance() {
    // Do you need arguments? Make it a regular static method instead.
    return this._instance || (this._instance = new this());
  }
  get currentLang() {
    if(!localStorage)
      return 'en';
    const loc = localStorage.getItem('locale') || 'en';
    if (loc == 'undefined') {
      return 'en';
    }
    return loc;
  }
  set currentLang(value: string) {
    if(localStorage)
      localStorage.setItem('locale', value);
  }
  get localeResource(): Object {
    return (this.resouces as any)[this.currentLang];
  }
  getTranslate(key: string) {
    const res = this.localeResource;
    if (!res) {
      console.error(`Ресурсы ключа: ${key} для языка ${this.currentLang} не найдены!`);
      return key;
    }
    if (!res.hasOwnProperty(key)) {
      console.error(`Ресурсы ключа: ${key} для языка ${this.currentLang} не найдены!`);
      return key;
    }
    return (res as any)[key];
  }
  getLangCodeById(id: number): string {
    return this.lang.find((item) => item.id == id).langCode;
  }
  getLangNameById(id: number): string {
    return this.lang.find((item) => item.id == id).name;
  }
  getLangObjectById(id: number): { id: number; langCode: string; name: string } {
    return this.lang.find((item) => item.id == id);
  }
}

const myClassInstance = LocaleProvider.Instance;
export default myClassInstance;
