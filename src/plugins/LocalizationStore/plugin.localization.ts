import _Vue from "vue";
import localeProvider from "./localization";
import { DirectiveBinding } from "vue/types/options";

const install = (Vue: typeof _Vue) => {  
  Vue.prototype.$locale = localeProvider;
  (Vue as any).$locale = localeProvider;
};

const locale = {
  install
};

_Vue.filter("locale", function(key: string) {
  // console.log('vue locale filter');
  if (!key) {
    return "";
  }
  const value = _Vue.$locale.getTranslate(key);
  return value;
});
//использовать так:   {{ 'Distance' | locale }}  Distance - это название константы
_Vue.directive('locale', {
  // Когда привязанный элемент вставлен в DOM...
  inserted: function (el: HTMLElement, binding: DirectiveBinding) {
    el.innerText = _Vue.$locale.getTranslate(binding.value);
    // Переключаем фокус на элемент
    // console.log('locale directive:', arguments)
  },
  update: function(el: HTMLElement, binding: DirectiveBinding) {
    console.log('UPDATE locale directive:', arguments)
    if (binding.oldValue == binding.value) {
      return;
    }
    el.innerText = _Vue.$locale.getTranslate(binding.value);
  }
})

export default locale;