<template>
    <header>
        <div class="container-fluid header-container">

            <div class="logo-block">
                <mobile-menu-icon @showSidebar="$emit('showSidebar')"/>
                <div class="logo">
                    <img src="assets/img/logo.svg" alt="Logo">
                    <div class="logo-name">Медитация</div>
                </div>
            </div>

            <div class="nav-block">
                <div class="notification">
                    <svg><use xlink:href="/assets/img/svg-sprite.svg#notification"></use></svg>
                </div>
                <div class="user-info" tabindex="0">
                    <div class="user-icon"><img src="/assets/img/user-icon.jpg" alt="User Photo"></div>
                    <div class="user-name">ivanivanov</div>
                    <user-menu />
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class HeaderDefaultComponent extends Vue {

}
</script>

<style lang="less">

header {
    background: #573674;
    border-bottom: 1px solid #FFB83A
}

.header-container {
    padding: 0 0 0 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* logo */
.logo-block {
    display: flex;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    max-width: 49px;
    width: 100%;
    height: auto;
}

.logo-name {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.165px;
    text-transform: uppercase;
    color: #FFFFFF;
}



.nav-block {
    display: flex;
    align-items: center;
}

.notification {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #4B2A67;
    width: 41px;
    height: 41px;
    cursor: pointer;
}

.notification svg {
    fill: #9255C7;
    max-width: 20px;
    height: 20px;
}

.user-info {
    margin-left: 27px;
    padding: 0 37px 0 27px;
    min-height: 73px;
    border-left: 1px solid #403D6A;
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
}

.user-icon {
    margin-right: 13px;
    width: 41px;
    height: 41px;
    border-radius: 50%;
    overflow: hidden;
}

.user-icon img {
    max-width: 100%;
    height: auto;
}
.user-name {
    font-family: 'Proxima Nova', sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #FFB83A;
}
</style>