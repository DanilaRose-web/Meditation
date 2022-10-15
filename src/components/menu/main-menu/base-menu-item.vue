<template>
    <uc-menu-item v-if="!!menuItem" :routeName="menuItem.routeName" :params="menuItem.routeParameters"  :title="menuItem.name"  :icon="menuItem.icon"  :prefix="menuItem.prefix">
      <uc-menu-sub v-if="menuItem.childs.length > 0">
        <base-menu-item
          v-for="(child, index) in menuItem.childs"
          :key="index"
          :menuItem="child"
        >
        </base-menu-item> 
      </uc-menu-sub>
    </uc-menu-item>
</template>
<script lang="ts">
  import { Vue, Component, Prop, Watch } from "vue-property-decorator";
  import MenuItem from "../../../models/menuItem";
  @Component({
    name: "base-menu-item"
  })
  export default class BaseMenuItemComponent extends Vue {
    @Prop({default: null}) menuItem: MenuItem;
  }
</script>

<style lang="less" scoped>

</style>