<template>
    <button class="section-button" @click="$emit('onClick')">
        <span><slot /></span>
    </button>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class SectionButtonComponent extends Vue {

}
</script>

<style lang="less">

.section-button {
    padding: 10px 28px;
    background: #FFB83A;
    font-family: 'Proxima Nova', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    transition: all 0.3s ease;
}

.section-button:hover {
    background: #573674;
}




.bg-yellow {
    margin-left: 10px;
}

.bg-purple {
    background: #6E478F;
}

.lang-btn {
    font-family: 'Proxima Nova', sans-serif;
    font-weight: 500;
    padding: 10px 17px;
    border: 1px solid #CED4DE;
    background: transparent;
    text-transform: uppercase;
    color: #6E478F;
}
.lang-btn:not(:last-child) {
    margin-right: 7px;
}
.lang-btn:hover, .lang-btn.active {
    background: #6E478F;
    border: 1px solid #6E478F;
    color: white;
}



</style>