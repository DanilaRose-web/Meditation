<template>
    <h1 class="section-title">
        <div class="title-left-side">
            <slot name="icon"></slot>
            <slot name="title"></slot>
        </div>
        <div class="title-right-side"><slot /></div>
    </h1>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class SectionTitleComponent extends Vue {

}
</script>

<style lang="less">

.section-title {
    padding-bottom: 12px;
    border-bottom: 2px solid #F0F0F0;
    font-family: 'Proxima Nova', sans-serif;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #162147;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.title-left-side {
    display: flex;
    align-items: center;
}

.title-left-side svg {
    margin-right: 12px;
    max-width: 15px;
    height: 15px;
    fill: #6E478F;
    cursor: pointer;
    transition: all 0.3s ease;
}
.title-left-side svg:hover {
    fill: black;
}
</style>