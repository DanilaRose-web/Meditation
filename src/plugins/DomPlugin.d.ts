import _Vue, { Component, VNode } from "vue";
// 2. Укажите файл с типами, которые вы хотите расширить
//    Vue имеет тип конструктора в types/vue.d.ts
declare module "vue/types/vue" {
    export interface Vue {
        GetChildComponents(tag: string): Array<Component>;
        GetChilds(tag: string): Array<VNode>;
        GetChildFirstComponent(tag: string): Component;
        GetChildAny(tag: string): boolean;
        GetRef(ref: string): Vue | Element | Vue[] | Element[];
        GetRefs(ref: string): Vue | Element | Vue[] | Element[];
        Extend(target: object, extend: object): void;
        OffsetElement(el:Element):any;
    }
    interface VueConstructor {
      GetChildComponents(tag: string): Array<Component>;
        GetChilds(tag: string): Array<VNode>;
        GetChildFirstComponent(tag: string): Component;
        GetChildAny(tag: string): boolean;
        GetRef(ref: string): Vue | Element | Vue[] | Element[];
        Extend(target: object, extend: object): void;
        OffsetElement(el:Element):any;
  }
}