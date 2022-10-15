import _Vue from "vue"

export default {
    install(Vue: typeof _Vue)  {
        const plugin = new MainStore();  
        Vue.prototype.$mainStore = plugin;
        (Vue as any).$mainStore = plugin;
        }
}

export class MainStore {

    constructor(){
        //_Vue.$api.SchoolService.GetSchoolInfoEvent.on(this.onGetSchoolInfo.bind(this));         
        //_Vue.$api.SchoolService.GetSchoolInfo();
    }  

    
    Field1: string  = ''
    Field2: number  = 123
   
}
