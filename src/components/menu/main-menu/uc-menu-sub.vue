<template>
  <ul class="uc-menu-sub uc-menu-sub-area sub-menu" :class="{'select': isShow}">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "uc-menu-sub"
})
export default class UcMenuSubComponent extends Vue {
  @Prop({ type: Boolean, required: false, default: false })
  show: Boolean;

  isShow = this.show;
  
}
</script>

<style lang="less" scoped>
</style>