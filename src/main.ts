import Vue from "vue"

import './register-router-hooks'
import './register-components'
import app from './components/app.vue'
import uiComponents from "ui-components";


import api from './api/dataSource/api/apiDataSource.plugin'
declare var ApiUrl:string //вебпак заменит на нужное значение при сборке
Vue.use(api,ApiUrl);


import mainStore from './plugins/mainStore'
Vue.use(mainStore);

import vSelect from "vue-select";
Vue.component('v-select', vSelect)

import domPlugin from './plugins/DomPlugin'
Vue.use(domPlugin);

// Подключение фильтров
import "./filters/moment.ts"

// import store from "./pages/map-routes/store/MapRoute"

const moment = require('moment')
moment.locale('ru');
Vue.use(require('vue-moment'),{
    moment
});

// import { Component } from "vue-property-decorator";
// Component.registerHooks([
//     "beforeRouteEnter",
//     "beforeRouteLeave",
//     "beforeRouteUpdate",
// ])



import router from './router'

//console.log('start vue');


const v = new Vue({
    el: "#app",
    router: router,
    // store: store,
    template: `<app/>`,
    components: { 
        app,
        uiComponents  
    }
});




//console.dir(Vue)