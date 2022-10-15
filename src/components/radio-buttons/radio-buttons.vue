<template>
    <div class="item">
        <input
            type="radio"
            :id="id"
            :name="name"
            :value="data"
            v-model="value"
            @click="change"
        >
        <label v-if="label" :for="id"><span>{{ label }}</span></label>
    </div>
</template>

<script lang="ts">

import Vue from "vue"
import { Component, Prop, Watch  } from "vue-property-decorator"

@Component
export default class UiInputRadio extends Vue {
    @Prop({ type: String, default: '' }) label: string
    @Prop({ type: String, default: '' }) id: string
    @Prop({ type: String, default: '' }) name: string
    @Prop({ type: String, default: '' }) value: string
    @Prop({ type: String, default: '' }) data: boolean

    change() {
        this.$emit('input', this.data)
    }
}
</script>

<style lang="css">


[type="radio"] + label {
    font-family: 'Proxima Nova', sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    color: black;
    display: flex;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    display: inline-block;
    color: black;
}
[type="radio"]:checked + label {
    color: #5D58B7;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid #5D58B7;
    border-radius: 100%;
    background: #fff;
}
[type="radio"]:not(:checked) + label:before {
    border: 1px solid #CED4DE;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #5D58B7;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}

</style>