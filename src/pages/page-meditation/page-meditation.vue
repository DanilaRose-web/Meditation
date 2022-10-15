<template>
  <div class="content-wrap home-content-wrap">
      <section-title>
        <template slot="title">Медитации</template>
        <section-button class="bg-purple" @onClick="$router.push({name: 'page-create-meditation'})">Добавить</section-button>
      </section-title>
      <search />

      <div class="table-wrap">
          <ui-table :rowGap="1" :columnGap="1" :mb='true'  w100 template-columns="100px 1fr 1fr 1fr 1fr 36px">
              <template slot="header">
                  <ui-table-header-item>#</ui-table-header-item>
                  <ui-table-header-item>Название</ui-table-header-item>
                  <ui-table-header-item>E-mail</ui-table-header-item>
                  <ui-table-header-item>Дата регистрации</ui-table-header-item>
                  <ui-table-header-item>Роль</ui-table-header-item>
                  <ui-table-header-item></ui-table-header-item>
              </template>
                  
              <template #body="data">
                  <ui-table-body-item ></ui-table-body-item>
                  <ui-table-body-item ></ui-table-body-item>
                  <ui-table-body-item ></ui-table-body-item> 
                  <ui-table-body-item ></ui-table-body-item> 
                  <ui-table-body-item ></ui-table-body-item> 
                  <ui-table-body-item ></ui-table-body-item> 
              </template>
          </ui-table>
      </div>
  </div>
</template>  

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class PageHomeComponent extends Vue {
  
  
  constructor() {
    super();    
  }
  created() { 
    console.log('home');   
  }
  mounted() {
  

    
  }
  
}
</script>

<style lang="less">

.home-content-wrap {
  max-width: 1100px;
}
</style>