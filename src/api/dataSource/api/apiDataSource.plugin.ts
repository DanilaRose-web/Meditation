import _Vue from "vue";
import ApiDataSource from "./apiDataSource";


  export default {
    install: (Vue: typeof _Vue, url?: string, reconnectEnabled: boolean = false, vueNameField: string = "$api") => {
      const websocket = new ApiDataSource(url);  
      if(websocket.webApiService.reconnectEnabled!==undefined)
        websocket.webApiService.reconnectEnabled = reconnectEnabled||false;
      Vue.prototype[vueNameField] = websocket;
      (Vue as any)[vueNameField] = websocket;
    }
  }
