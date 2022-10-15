<template>
  <div class="ui-maps-leaflet">
    <l-map
      v-show="showMap"
      ref="myMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      @click="addMarker"
    >
      <!-- <l-control-layers> </l-control-layers> -->
      <!-- <l-wms-tile-layer
        v-for="layer in layers"
        :key="layer.name"
        :base-url="url"
        :layers="layer.layers"
        :visible="layer.visible"
        :name="layer.name"
        layer-type="base"
      >
      </l-wms-tile-layer> -->
      <l-tile-layer
        :url="url"
        :attribution="attribution"
        :options="{ id: 'mapbox/streets-v11' }"
      />

      <l-marker
        v-for="marker in innerMarkers"
        :key="marker.id"
        :lat-lng="[marker.positionPoint.lat, marker.positionPoint.lng]"
        :icon="getIcon(marker.icon)"
        :draggable="marker.draggable"
        @update:latLng="updateLatLng($event, marker)"
      >
        <l-popup :options="{ offset: [0, -30] }">
          <slot name="infowindow" :marker="marker"></slot>
        </l-popup>
      </l-marker>
      <!-- </v-marker-cluster> -->

      <l-polyline :lat-lngs="innerRoute" color="#5D58B7"  />
      <!-- <l-marker
        v-for="(nod, idx) in innerRoute"
        :key="idx"
        :lat-lng="[nod[0], nod[1]]"
        :icon="getNodeIcon()"
      >
      </l-marker> -->
    </l-map>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import "leaflet/dist/leaflet.css";
import { icon, latLng, LatLngTuple } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LTooltip,
  LControlLayers,
  LWMSTileLayer,
  LPolyline
} from "vue2-leaflet";
import LeafletRoutingMachine from "leaflet-routing-machine";
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";

import { Component, Prop, Watch } from "vue-property-decorator";
import PosMarkerData from "@views/a-model/posMarkerData";
import Position from "./position";
import Route from "./route";

@Component({
  name: "ui-maps-leaflet",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LControlLayers,
    LPolyline,
    LeafletRoutingMachine,
    "l-wms-tile-layer": LWMSTileLayer,
    "v-marker-cluster": Vue2LeafletMarkerCluster
  }
})
export default class UiMapsLeaflet extends Vue {
  @Prop({ default: 10, type: Number }) zoom: number;
  @Prop({ default: () => [0, 0] }) center: number[];
  @Prop({ type: Array }) markers: PosMarkerData[];
  @Prop({ type: Array, default: (): number[][] => [] }) route: number[][];

  // center = latLng(47.41322, -1.219482);
  url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  attribution =
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';

  mapOptions = {
    zoomSnap: 0.5,
    zoomControl: false
  };
  showMap = true;
  control: any = null;
  map: LMap = null;
  // grayscale = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
  // streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr });
  layers = [
    {
      name: "grayscale",
      visible: true,
      format: "image/png",
      layers: "mapbox/light-v9",
      transparent: true,
      attribution: this.attribution
    },
    {
      name: "streets",
      visible: false,
      format: "image/png",
      layers: "mapbox/streets-v11",
      transparent: true,
      attribution: this.attribution
    }
  ];
  innerMarkers: PosMarkerData[] = [];
  innerRoute: number[][] = [];

  firs = true;
  L = window.L;
  @Watch("center")
  onCenterChanged() {
    if (this.map) {
      this.map.setCenter(this.center as LatLngTuple);
    }
  }
  //если информация о маркерах изменилась
  @Watch("markers")
  OnMarkerChanged() {
    if (this.markers.length == 0) {
      return;
    }
    this.innerMarkers = [];
    this.innerMarkers = this.markers;
    if (this.firs) {
      this.getCenter();
      this.firs = false;
    }
  }
  // если маршрут изменился
  @Watch("route")
  onRouteChanged() {
    // debugger;
    if (this.route.length == 0) {
      return;
    }
    this.innerRoute = [];
    this.innerRoute = this.route;
    this.getCenterRoute();
    const l: number = this.getDistanceRoute();
    this.$emit("distance", Number(l / 1000));
  }

  mounted() {
    this.$nextTick(() => {
      this.map = (this.$refs.myMap as any).mapObject;
      this.initMap();
      this.innerRoute = [];
      this.innerRoute = this.route;
    });
  }
  addMarker(event: any) {
    // console.log(`event.latlng`, event.latlng);
    this.$emit("getCoord", event.latlng);
  }
  // расчет расстояния между точками
  getDistance(origin: number[], destination: number[]) {
    // return distance in meters
    let lon1 = this.toRadian(origin[1]);
    let lat1 = this.toRadian(origin[0]);
    let lon2 = this.toRadian(destination[1]);
    let lat2 = this.toRadian(destination[0]);

    var deltaLat = lat2 - lat1;
    var deltaLon = lon2 - lon1;

    var a =
      Math.pow(Math.sin(deltaLat / 2), 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(deltaLon / 2), 2);
    var c = 2 * Math.asin(Math.sqrt(a));
    var EARTH_RADIUS = 6371;
    return c * EARTH_RADIUS * 1000;
  }

  toRadian(degree: number) {
    return (degree * Math.PI) / 180;
  }

  getDistanceRoute(path: number[][] = []): number {
    if (path.length == 0) {
      path = this.route;
    }
    if (path.length < 1) {
      return 0;
    }
    let point1 = path[0];

    let l = 0;
    path.forEach(el => {
      l = l + this.getDistance(point1, el);
      point1 = el;
    });
    // console.log(`l`, l);
    return l;
  }
  // var distance = getDistance([lat1, lng1], [lat2, lng2])

  //обновить координаты точки
  updateLatLng(position: any, point: PosMarkerData) {
    point.positionPoint = position;
    this.$emit("updateCoord", position);

  }

  // центрирование карты по точкам
  getCenter() {
    
    let rez: any = [];
    if (this.innerMarkers) {
      this.innerMarkers.forEach(el => {
        rez.push([el.positionPoint.lat, el.positionPoint.lng]);
      });
      // console.log(`rez`, rez);
      if (this.map && rez.length>0) this.map.fitBounds(rez);
    }
  }
  getCenterRoute() {
    let rez: any = [];
    if (this.innerRoute) {
      this.innerRoute.forEach(el => {
        rez.push([el[0], el[1]]);
      });
    }
    if (this.map) this.map.fitBounds(rez);
  }
  initMap() {
    this.innerMarkers = this.markers;
    this.getCenter();
    // this.L.Routing.control({
    //   waypoints: [this.L.latLng(57.74, 11.94), this.L.latLng(57.6792, 11.949)],
    //   routeWhileDragging: true
    // }).addTo(this.map as any);
  }

  getRoute() {
    // this.routeData.forEach(el => {
    //   el.setMap(null);
    // });
    // this.allPoint.forEach(el => {
    //   el.setMap(null);
    // });
    // this.routeData = [];
    // this.clearInfoWindows();
    // if (this.route.length > 0) this.paintRoute();
  }

  // настройки иконки
  getIcon(url: string): any {
    const myIcon = icon({
      iconUrl: url ? url : "",
      iconSize: [32, 37],
      iconAnchor: [16, 37]
    });
    return myIcon;
  }

  // настройки иконки
  getNodeIcon(): any {
    const myIcon = icon({
      iconUrl: "/assets/img/maps/green-circle1.svg",
      iconSize: [32, 24],
      iconAnchor: [10, 10]
    });
    return myIcon;
  }
}
</script>

<style lang="less">
.ui-maps-leaflet {
  height: 600px;

  .infowindow {
    width: 240px;
    // height: 265px;

    .infowindow__img {
      img {
        width: 100%;
      }
    }
  }
  &::after {
    content: none !important;
  }

  .info-window {
    display: none;
  }
  .all {
    padding-bottom: 1rem;
  }
  .code {
    color: #1791fa;
    font-size: 15px;
    padding-bottom: 5px;
  }
}
</style>
