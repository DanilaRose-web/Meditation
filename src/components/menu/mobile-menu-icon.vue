<template>
    <div class="mobile-menu-icon" :class="[iconActive ? 'active' : '']" @click="setIconActive">
        <span></span>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class MobileIconComponent extends Vue {
    iconActive: boolean = false

    setIconActive() {
        this.iconActive = !this.iconActive
        this.$emit('showSidebar')
    }
}
</script>

<style lang="less" scoped>

.mobile-menu-icon {
    margin-right: 27px;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4B2A67;
    border-radius: 50%;
    cursor: pointer;
}

span {
    width: 20px;
    height: 3px;
    background: #9255C7;
    position: relative;
    border-radius: 50px;
}

span::after, span::before {
    content: '';
    width: 100%;
    height: 3px;
    background: #9255C7;
    position: absolute;
    left: 0;
    border-radius: 50px;
}

span::before {
    top: -8px;
}

span::after {
    bottom: -8px;
}

.mobile-menu-icon.active span, .mobile-menu-icon.active span::after, .mobile-menu-icon.active span::before {
    background: #FFB83A;
}

@media all and (min-width: 861px) {
    .mobile-menu-icon { display: none; }
}

@media all and (max-width: 430px) {
    .mobile-menu-icon { margin-right: 20px; }
}

</style>