<template>
  <div :class="GetClass()" v-if="(icon != null)"></div>
</template>
<script lang="ts">
import { Vue, Prop, Component, Watch } from "vue-property-decorator";

@Component({ name: "uc-menu-icon" })
export default class UcMenuIconComponent extends Vue {
  @Prop({ type: String, default: null })
  icon!: string;

  @Prop({ default: null })
  sizeXl: boolean;

  @Prop({ default: null })
  sizeLg: boolean;

  @Prop({ default: null })
  sizeMd: boolean;

  @Prop({ default: null })
  sizeSm: boolean;

  // iconClass = this.icon + " icon";
  GetClass() {
    var css: any = {};

    css["size-xl"] = this.sizeXl != null;
    css["size-lg"] = this.sizeLg != null;
    css["size-md"] = this.sizeMd != null;
    css["size-sm"] = this.sizeSm != null;
    css[`${this.icon}`] = this.icon != null;
    return css;
  }
}
</script>
<style lang="less" scoped>
.size-sm {
  font-size: 1rem;
}
@media (min-width: 576px) {
  .size-sm {
    font-size: 1rem;
  }
}

@media (min-width: 768px) {
  .size-md {
    font-size: 1rem;
  }
}

@media (min-width: 992px) {
  .size-lg {
    font-size: 1.5rem;
  }
}

@media (min-width: 1200px) {
  .size-xl {
    font-size: 1rem;
  }
}
</style>
