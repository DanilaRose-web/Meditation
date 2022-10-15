import _Vue from "vue"
// import StoragePointForMapRoute from "../../components/models/storage/StoragePointForMapRoute"

export default {
    install(Vue: typeof _Vue)  {
        const plugin = new AppStore();  
        Vue.prototype.$app = plugin;
        (Vue as any).$app = plugin;
    }
}

export class AppStore {
    private storage:any = {};
    constructor(){
    }  
    
    Title: StoragePointForMapRoute = new StoragePointForMapRoute(this.storage);


    // public showedLoader: boolean = false;

    // public loadingShow(){
    //     this.showedLoader = true;
    // }

    // public loadingHide(){
    //     this.showedLoader = false;
    // }  
}


export class StoragePointForMapRoute {
    
    private storage:any;
    private TAG:string = 'StoragePointForMapRoute'
    code: string;
    constructor(storage: any){
        this.storage = storage;
    }  

    private getValue(name:string): string{
        let value = this.storage[name];
        if(value)
            return value;
        value = localStorage.getItem(name)
            return value;
    }
    private setValue(name:string, value: string){    
        this.storage[name] = value;   
        localStorage.setItem(name,value); 
        return value;
    }


    get title(): string {
        return this.getValue(this.TAG+'.name');
    }
    set phone(value: string) {        
        this.setValue(this.TAG+'.name', value);
    }
}





