import _Vue from "vue"

export default {
    install(vue: typeof _Vue)  {
       // const plugin = new DomPlugin(vue.prototype);  
/*
       Получаем список дочерниф компонент, по заданому тегу
       * @param {имя тега} tag 
       */
      _Vue.prototype.GetChildComponents=function(tag:string) {
          // console.log(this);
          let slot = this.$slots.default;
          return slot.filter((vnode: { tag: any; componentOptions: { Ctor: { options: { name: string; }; }; }; }) => vnode.tag && vnode.componentOptions && vnode.componentOptions.Ctor.options.name === tag).map(_ => _.componentInstance);
      }
      _Vue.prototype.GetChilds = function(tag:string) {
            // console.log(this);
          let slot = this.$slots.default;
          if (!slot)
            return [];
          return slot.filter((vnode: { tag: any; componentOptions: { Ctor: { options: { name: string; }; }; }; }) => vnode.tag && vnode.componentOptions && vnode.componentOptions.Ctor.options.name === tag);
        }
        /**
         * Получаем первый дочерни компонент с заданным тегом
         * @param {имя тега} tag 
         */
        _Vue.prototype.GetChildFirstComponent = function(tag:string) {
          let slot = this.$slots.default;
          return slot.filter((vnode: { tag: any; componentOptions: { Ctor: { options: { name: string; }; }; }; }) => vnode.tag && vnode.componentOptions && vnode.componentOptions.Ctor.options.name === tag).map(_ => _.componentInstance)[0];
        }
    
        _Vue.prototype.GetChildAny = function(tag:string) {
          let components = this.GetChildComponents(tag);
          return components && components.length > 0;
        }
        _Vue.prototype.CollectRefsFromComponent = function(component:any, refs:any) {
          if (component && component.$refs) {        
            Object.assign(refs, component.$refs);
          }
          if (component && component.$children) {
            component.$children.forEach((child: any) => this.CollectRefsFromComponent(child, refs))
          }
        }
        _Vue.prototype.GetAllRefs = function():any {
          const refs = {};
          (this.$root.$children || []).forEach((child: any) => {
            this.CollectRefsFromComponent(child, refs);
          })
          return refs;
        }
        _Vue.prototype.GetRef = function(ref: any) {
          const refs = this.GetAllRefs();
            for (var i in refs) {
              if (i == ref)
                return refs[i];
            }      
          return null;
        }
       
        /**
         * Добавляет или перезаписывает поля дополняющего объекта к дополняемому
         * @param {дополняемый} target 
         * @param {дополняющий} extend 
         */
        _Vue.prototype.Extend = function (target:any, extend:any) {
          //console.log('Extend',target,extend);
          if (extend && target)
            for (var i in extend) {
              //console.log('Extend item',i,extend[i]);
              target[i] = extend[i];
            }
          //console.log('Extend end',target);
        }
    
        _Vue.prototype.OffsetElement = function (el: Element) {
          var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
          }
        }

        // vue.prototype.$dom = plugin;
        // (vue as any).$dom = plugin;
    }
}

// export class DomPlugin {

//     private Vue: _Vue;
//     constructor(vue :  _Vue){
//         this.Vue = vue;
//     }
//         /**
//      *
    
// }



