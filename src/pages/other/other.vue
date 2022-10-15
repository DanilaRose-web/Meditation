<template>
  <layout>
    <template slot="header">other-header</template>
    <template slot="footer">other-footer</template>
    other. Params: 
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class PageOtherComponent extends Vue {
  
  
  constructor() {
    super();    
  }
  created() { 
    console.log('other');   
  }
  get id(){
      if(!this.$route)
        return '';
      return this.$route.params.id;
  }
  mounted() {
  

    
  }
  
}
</script>