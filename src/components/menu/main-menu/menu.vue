<template>    
    <nav class="menu">
        <ul class="menu-list"><base-menu-item v-for="(child, index) in menuList" :key="index" :menuItem="child"></base-menu-item></ul>
    </nav>
</template>

<script lang="ts">

    import Vue from "vue";
    import { Component, Prop, Watch } from "vue-property-decorator";
    import { Route } from "vue-router"
    import MenuItem from "../../../models/menuItem";
    import MenuFactory from "../../../models/menu"

    @Component
    export default  class MenuComponent extends Vue {

        menuList: Array<MenuItem> = MenuFactory.getProjectMenu();
        routers: Array<Route> = [];

        burgerActive: boolean = true

        // addBurgerActive() {
        //     let burger = document.querySelector('.ui-burger-icon')
            

        //     if (this.burgerActive) {
        //         this.burgerActive = false
        //         burger.classList.remove('active')
        //     } else {
        //         this.burgerActive = true
        //         burger.classList.add('active')
        //     }
        // }

        created() {
            // console.log(this.$route);
            
            // this.setRoutesList((this.$route as any).options.routes)
            // console.log();
        }

        // setRoutesList(routes: Array<Route>) {
        //     routes.forEach(route => {
        //         if (!!route) {
        //             this.routers.push(route)
        //         }
        //         if ((route as any).children && (route as any).childern.length > 0) {
        //             this.setRoutesList((route as any).children)
        //         }
        //     })
        // }
    }
    
</script>

<style lang="less" scoped>

.menu {
    height: 100%;
    padding-top: 27px;
    position: relative;
    z-index: 2;
}

</style>