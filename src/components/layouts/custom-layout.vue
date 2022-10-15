<template>
    <div>
        <header-default @showSidebar="showSidebar"/>
        <div class="row main-row">
            <sidebar :showSidebar="!showSidebarFlag">
                <router-view name="menu"></router-view>
            </sidebar>

            <sidebar-lg>
                <router-view name="menu"></router-view>
            </sidebar-lg>

            <div class="content-all col">
                <transition name="fade-route" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class CustomLayoutComponent extends Vue {
    //name: "layout"
    constructor() {
        super();
        console.log("LayoutComponent created");
    }

    sidebarActive: boolean = false
    showSidebarFlag: boolean = false

    showSidebar() {
        this.sidebarActive = !this.sidebarActive
        this.showSidebarFlag = !this.showSidebarFlag
    }
}
</script>
<style lang="less">

.main-row {
    margin-left: 0;
    margin-right: 0;
    background: #E7E7F2;
    min-height: calc(100vh - 74px);
}

.content-all {
    padding: 30px 30px;
    width: calc(100% - 315px);
}

.fade-route-enter-active, .fade-route-leave-active {
    transition: all 0.4s ease-in-out;
}
.fade-route-enter, .fade-route-leave-to {
    opacity: 0;
}

@media all and (max-width: 1105px) {
    .content-all { width: calc(100% - 100px); padding-bottom: 30px; }
}

@media all and (max-width: 860px) {
    .content-all { width: calc(100% - 260px); }
    .sidebar { height: calc(100% - 74px); }
}
</style>
