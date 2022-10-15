<template>    
    <transition name="fade">
        <aside class="sidebar col" v-if="!showSidebar">
            <div class="sidebar-bg"><img src="/assets/img/sidebar-bg.png" alt=""></div>
            <slot />
        </aside>
    </transition>
</template>

<script lang="ts">

    import Vue from "vue";
    import { Component, Prop } from 'vue-property-decorator'

    @Component
    export default  class SidebarComponent extends Vue {
        @Prop({ type: Boolean, default: false }) showSidebar: boolean
    }
    
</script>

<style lang="css" scoped>

.sidebar {
    padding-left: 0;
    padding-right: 0;
    background: #573674;
    max-width: 315px;
    width: 100%;
    /* min-height: 100vh; */
    height: calc(100% - 74px);
    position: relative;
}

.sidebar-bg {
    position: absolute;
    top: 7px;
    left: 14px;
    z-index: 0;
}

.sidebar-bg img {
    max-width: 100%;
    height: auto;
}

@media all and (max-width: 1105px) {
    .sidebar { max-width: 100px; }
}

@media all and (max-width: 860px) {
    .sidebar { max-width: 260px; display: block; position: absolute; z-index: 2; }
}

@media all and (min-width: 861px) {
    .sidebar { display: none; }
}

</style>