<template>
   <span :style="{backgroundImage:'url(/assets/img/icons/'+name+'.svg)'}"></span>   
</template>

<script lang="ts">
    import Vue from 'vue'
import { Component,Prop } from 'vue-property-decorator'
@Component
    export default class IconComponent extends Vue{
        @Prop()
        name:string

    }
</script>

<style scoped>
span{
    display: inline-block;
    vertical-align: middle;
    height: 14px;
    width: 14px;
    background: transparent center center 100%;
}
</style>