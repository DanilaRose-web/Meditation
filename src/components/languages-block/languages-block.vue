<template>
    <div class="languages-block">
        <slot />
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class LanguagesBlockComponent extends Vue {

}
</script>

<style lang="less">

.languages-block {
    display: flex;
    align-items: center;
}
</style>