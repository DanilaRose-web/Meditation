<template>
    <!-- <router-view v-if="isDevelopment" />
    <fake-router-view v-else />   -->
    <router-view />
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
declare var NODE_ENV:string //вебпак заменит на нужное значение при сборке

@Component
export default class AppComponent extends Vue {  
  constructor() {
    super();
    //console.log("AppComponent created");

  }
  get isDevelopment(): boolean{
    return NODE_ENV==='development';
  }  
  created(){
           
  }

}
</script>
