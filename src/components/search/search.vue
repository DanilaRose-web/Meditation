<template>
    <div class="search">
        <ui-input 
            :placeholder="'Поиск...'" 
            :type="'text'" 
            :id="'search'" 
            :required="false"
            v-model="search"
            :showError="false"
            :noMargin="true"
            @keydown.enter="$emit('serchResult', search)"
        />
        <section-button class="bg-yellow">Поиск</section-button>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class SearchComponent extends Vue {
    search: string = ''
}
</script>

<style lang="less">

.search {
    margin-top: 20px;
    display: flex;
    align-items: center;
}

.content-wrap .search .control-input .form-control {
    height: 37px;
}
</style>