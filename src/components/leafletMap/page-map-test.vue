<template>
  <uc-page class="page-map">
    <template slot="button">
      <!-- <ui-button class="btn-slim" :color="'#1791FA'" @onClick="onAddPointToMap">Добавить точку на карту</ui-button> -->
      <!-- <div style="margin-left: auto">
        <a :href="frontMapUrl" target="_blank">{{ frontMapUrl }}</a>
      </div> -->
    </template>
    <!-- <bs-row class="align-items-center justify-content-center">
      <bs-col class="col-6 col-xl d-flex pb-xl-2">
        <ui-input v-model="searchCodePoint" :placeholder="$locale.getTranslate('Map_placeHolder_Search')" :show-error="false" @onEnter="setFilter" />
      </bs-col>
      <bs-col class="col-6 col-xl d-flex pb-xl-2">
        <ui-dropdown :items="mobileUsers" autocomplete :placeholder="$locale.getTranslate('Map_placeHolder_filter_employers')" @changeAutocomlite="changeAutocomlite"></ui-dropdown>
      </bs-col>
      <bs-col class="col-6 pt-4 col-xl pt-xl-0 d-flex pb-xl-2">
        <ui-dropdown :items="deviceStatus" :placeholder="$locale.getTranslate('Map_placeHolder_filterStatus')"></ui-dropdown>
      </bs-col>
      <bs-col class="col-6 pt-4 col-xl pt-xl-0 d-flex pb-xl-2">
        <ui-dropdown :items="deviceType" :placeholder="$locale.getTranslate('Map_placeHolder_typeDevice')"></ui-dropdown>
      </bs-col>
      <bs-col class="col-10 col-xl pt-3 pt-xl-0 d-flex justify-content-center pb-xl-2">
        <ui-button class="mr-2" @onClick="clearFilter">{{ "Map_btn_reset" | locale }}</ui-button>
        <ui-button style="width:100px" :disabled="isLoading" @onClick="setFilter">{{ "btn_search" | locale }}</ui-button>
      </bs-col>
    </bs-row> -->

    <bs-row class="py-4">
      <bs-col>
        <ui-maps-leaflet
          ref="leaflet"
          :zoom="4"
          :markers="innerItems"
          :route="innerRoute"
          @markerClick="onMarkerClick"
          @dragend="onDragEnd"
          @getCoord="onGetCoord"
          @updatePoint="onUpdateCoord"
        >
          <template #infowindow="data">
            {{ data }}
          </template>
        </ui-maps-leaflet>
      </bs-col>
    </bs-row>
  </uc-page>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";

import PosMarkerData from "../a-model/posMarkerData";

@Component({
  name: "pageMapTest",
  components: {}
})
export default class PageMapTestComponent extends Vue {
  center = [47.0264, 28.8404];
  innerItems: PosMarkerData[] = [];
  innerRoute: number[][] = [];

  created() {
    document.title = this.$route.meta.title;
    this.getItems();
  }

  onDragEnd(data: { id: number; marker: PosMarkerData }) {
    console.log(`value onMarkerClick`, value);
  }
  onMarkerClick(value: any) {
    console.log(`value onMarkerClick`, value);
  }
  onGetCoord(value: any) {
    console.log(`value onGetCoord`, value);
  }
  onUpdateCoord(value: any) {
    console.log(`value onUpdateCoord`, value);
  }
  getItems() {
    this.innerItems = [];
    this.innerItems = [
      {
        id: 1,
        icon: "/assets/img/map-point.svg",
        positionPoint: { lat: 47.0264, lng: 28.8404 },
        draggable: true
      },
      {
        id: 2,
        icon: "/assets/img/map-point.svg",
        positionPoint: { lat: 47.0264, lng: 29.8604 }
      }
    ];
    this.innerRoute = [[47.0264, 28.8404], [47.0264, 29.8404]];
  }

  getStyle() {
    var style: any = {};

    style["height"] = 300 + "px";
  }
}
</script>
<style lang="less">
.page-map {
  position: relative;
  background-color: #fff;
  .ui-dropdown {
    .scroll {
      // height: 400px;
    }
  }
  .control-input {
    min-width: 100px;
    width: 100%;
  }
  .image-preview-modal .openimage {
    margin-right: 0;
  }
  .gray-line {
    border-bottom: 1px solid #f0f0f0;
  }
  .value {
    margin-left: auto;
    padding-left: 0.5rem;
  }
  .legenda {
    position: absolute;
    flex-direction: column;
    bottom: 50px;
    right: 30px;
    z-index: 1000;
    .l1 {
      background: rgba(255, 255, 255, 0.7);
    }
    .l2 {
      background: rgba(255, 255, 255, 0.7);
    }
  }

  .image {
    width: 200px;
    height: 200px;
    position: relative;
    img {
      width: 100%;
      // height: 100%;
    }
  }
  .mobile-user {
    .link {
      color: rgb(23, 145, 250);
    }
  }
  .infowindow {
    padding: 8px;
    max-height: 300px;
    overflow: hidden;
    overflow-y: auto;
    .infowindow__img {
      img {
        width: 100%;
      }
    }
    &::-webkit-scrollbar {
      width: 4px;
      background: #ccc;
    }
    &::-webkit-scrollbar-thumb {
      border-width: 1px 1px 1px 2px;
      border-color: #777;
      background-color: #aaa;
      border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb:hover {
      border-width: 1px 1px 1px 2px;
      border-color: #555;
      background-color: #777;
    }
    .img {
      img {
        width: 100%;
        // background: url() no-repeat;
        // background-size:cover ;
      }
    }
  }
  .btn {
    min-width: fit-content;
  }

  .file {
    position: relative;
    .btn-close {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      width: 20px;
      height: 20px;
      background: rgba(255, 255, 255, 0.8);
      font-size: 24px;
      color: black;
      // align-items: center;
      // justify-content: center;
    }
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.8);
    font-size: 24px;
    color: black;
    align-items: center;
    justify-content: center;
  }
  .ui-table-header-item {
    font-weight: bold;
  }

  .btn-slim {
    height: 28px;
    margin-left: auto;
  }
  .ui-dropdown {
    width: 100%;
    .ui-box-menu {
      min-width: 160px;

      background-color: #fff;
      border-color: #ced4de;
    }
    .ui-list-view-item:hover {
      background: #f0f0f0;
    }
  }
  .ui-button {
    font-size: 14px;
  }
  input {
    display: none;
  }
  .ui-button {
    &.green {
      background-color: green;
    }
    &.blue {
      background-color: #1791fa;
    }
  }

  /* Анимации появления и исчезновения могут иметь */
  /* различные продолжительности и динамику.       */
  .slide-fade-enter-active {
    transition: all 0.5s ease;
  }
  .slide-fade-leave-active {
    transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  // @media screen and (max-width: 1325px){
  //   .pb2{
  //     padding-top: 1rem;
  //   }
  // }
}
</style>
