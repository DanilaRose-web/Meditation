<template>
  <router-link :to="{name:route, params:params}">
     <slot/>
    </router-link>
</template>

<script lang="ts">

import Vue from "vue";
import { Component, Prop } from 'vue-property-decorator';
    @Component
    export default class LinkComponent extends Vue {
        @Prop({
            required: true,
            type: String
        })
        route: string

        @Prop({
            required: false,
            type: Object
        })
        params: Object
    }
</script>

<style lang="less" scoped>

</style>