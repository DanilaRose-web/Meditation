<template>
  <div>
    <slot name="header">
      <layout-header/>
    </slot>    
   
    <div id="content">
      <div class="wrapper">
         <slot/>
      </div>
    </div>
    <slot name="footer">
      <layout-footer />
    </slot>    
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class LayoutComponent extends Vue {
  //name: "layout"
  constructor() {
    super();
    console.log("LayoutComponent created");
  }
}
</script>
