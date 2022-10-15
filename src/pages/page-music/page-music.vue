<template>
    <div class="content-wrap">
        <section-title>
            <template slot="title">Музыка</template>
            <section-button class="bg-purple">Добавить</section-button>
        </section-title>

        <search />

        <div class="table-wrap">
            <ui-table :rowGap="1" :columnGap="1" :mb='true'  w100 template-columns="100px 1fr 1fr 1fr 1fr 36px">
                <template slot="header">
                    <ui-table-header-item>#</ui-table-header-item>
                    <ui-table-header-item>Название</ui-table-header-item>
                    <ui-table-header-item>E-mail</ui-table-header-item>
                    <ui-table-header-item>Дата регистрации</ui-table-header-item>
                    <ui-table-header-item>Роль</ui-table-header-item>
                    <ui-table-header-item></ui-table-header-item>
                </template>
                    
                <template #body="data">
                    <ui-table-body-item ></ui-table-body-item>
                    <ui-table-body-item ></ui-table-body-item>
                    <ui-table-body-item ></ui-table-body-item> 
                    <ui-table-body-item ></ui-table-body-item> 
                </template>
            </ui-table>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class PageMusicComponent extends Vue {

}
</script>

<style lang="less">

.content-wrap {
    padding: 14px 26px;
    background: white;
}

.table-wrap {
    margin-top: 21px;
}
</style>