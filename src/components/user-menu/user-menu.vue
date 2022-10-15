<template> 
    <nav class="user-menu" >
        <ul class="user-menu-list">
            <li class="user-menu-item" @click="$router.push({ name: 'page-profile' })"><a>Профиль</a></li>
            <li class="user-menu-item"><a>Настройки</a></li>
            <li class="user-menu-item"><a>Прочее</a></li>
            <li class="user-menu-item" @click="logout"><a >Выйти</a></li>
        </ul>
    </nav>
</template>

<script lang="ts">

    import Vue from "vue";
    import { Component, Prop, Watch } from 'vue-property-decorator'
    // import { set } from "js-cookies";

    @Component
    export default  class UserMenuComponent extends Vue{
        @Prop({ type: Boolean, default: false }) showUserMenu: boolean
        innerShowUserMenu = false
        outside = false;
        isUpdate = false;

        created() {
            this.innerShowUserMenu = this.showUserMenu
        }

        mounted() {
            document.body.addEventListener('click', this.clickOutside.bind(this));
        }
        @Watch('showUserMenu')
        onChangeShowUserMenu() {
            this.outside = true;
            this.isUpdate = true;
        }
        async logout() {
            try { 
                let res = await this.$api.AccountService.logoutAsync() 
                if (res) {
                    this.$router.push({ name: 'sign-in' })
                    this.$api.SetUser({Id: null})
                }
            } catch {}
        }
        onMouseLeave() {
            this.outside = true;
        }
        onMouseOver() {
            this.outside = false;
        }
        clickOutside(event: any) {
            if (!(this.$el == event.target || this.$el.contains(event.target))) {
                if (this.outside && !this.isUpdate) {
                    this.outside = false;
                    this.$emit('clickOutSideMenu');
                }
                if (this.isUpdate) this.isUpdate = false;
            }
        }
        destroyed() {
            document.body.removeEventListener('click', this.clickOutside.bind(this));
        }
    }
    
</script>

<style lang="less" scoped>

.user-menu {
    background: #573674;
    box-shadow: 0px 4px 7px rgba(16, 27, 45, 0.25);
    position: absolute;
    right: 0;
    top: 120%;
    width: 100%;
    z-index: 5;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
}

.user-menu-item {
    min-height: 35px;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
}

.user-menu-item:hover {
    background: #684785;
}

.user-menu-item:not(:first-child) {
    border-top: 1px solid #6E478F;
}

.user-menu-item a {
    padding-left: 28px;
    padding-right: 5px;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #CDCEDF;
}

.user-info:focus-within .user-menu  {
    opacity: 1;
    visibility: visible;
    top: 102%;
}

// .user-info:focus-within .user-menu  {
//     opacity: 0;
//     visibility: hidden;
//     top: 120%;
// }

@media all and (max-width: 555px) {
    .user-menu { right: 0; min-width: 188px; }
}

</style>