<template>
  <li
    no-gutters
    class="uc-menu-item menu-item"
    :class="{ select: isActiveLink() || isActiveSubMenu()  }">

      <router-link tag="span" :to="{name: routeName, params: params }" style="cursor:pointer;">
          <span v-if="icon != null" class="icon"><svg><use :xlink:href="icon"></use></svg></span>
          <span class="title">{{ title }}</span>
      </router-link>
      <slot />
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import UcMenuSubComponent from "../main-menu/uc-menu-sub";
import { Route } from "vue-router";

@Component({
  name: "uc-menu-item"
})
export default class UcMenuItemComponent extends Vue {
  @Prop({ type: String })
  title: string;
  @Prop({type: String})
  routeName!: string;
  @Prop({default: () => {}, type: Object})
  params: Object;
  @Prop({ type: String })
  prefix!: string;
  @Prop({ type: String, default: null })
  icon!: string;
  
  isSubMenu = false;
  isShow = false;

  beforeCreate() {
    const defaultSlots = this.$slots.default;
    if (defaultSlots) {
      if (defaultSlots.length > 1) {
        throw new Error(
          "uc-menu-item не может содержать более одного компонента"
        );
      }

      if (!this.GetChildAny("uc-menu-sub")) {
        throw new Error(
          "uc-menu-item внутри может содержать только один компонент menu-sub"
        );
      }
    }
  }

  created() {
  }
  mounted() {
    if (this.isActiveSubMenu()) this.setSubMenuShow();
    if (this.icon && !!(this.$el as HTMLElement).style) {
      var aa = this.$el as HTMLElement;
      aa.style.backgroundImage = this.icon;
    }

    let svgIcon = document.querySelectorAll('.menu-item svg');
    
    for (let i = 0; i < svgIcon.length; i++) {
        svgIcon[i].removeAttribute('width')
        svgIcon[i].removeAttribute('height')
    }
  }
  isActiveLink() {
    if (this.routeName == 'ways/ways-mod') {
      // console.log(this.$route.name == this.routeName);
    }
    
    return this.$route.name == this.routeName;
  }
  isActiveSubMenu() {
    if (this.routeName == 'ways/ways-mod') {
      // console.log(this.prefix && this.$route.name.includes(this.prefix));
    }
    return this.prefix && this.$route.name.includes(this.prefix);
  }
  click(e: any) {
    if (!this.setSubMenuShow()) {
      // location.href = this.url;
      // history.pushState(null, "page 2", this.url);
    } else {
      // console.log('--setSubMenuShow--', this.isShow);
      this.isShow = !this.isShow;
    }
  }
  setSubMenuShow() {
    var defaultSlots = this.$children.filter(
      el => el instanceof UcMenuSubComponent
    ) as UcMenuSubComponent[];

    if (defaultSlots) {
      defaultSlots.forEach(vnode => { vnode.isShow = !vnode.isShow; });
      return true;
    } else {
      return false;
    }
  }
}
</script>
<style lang="less">
.sub {
  margin-right: 0;
}
.menu-item {
  color: white;
  padding: 12px 0 12px 30px;
  font-size: 16px;
  border-right: 2px transparent solid;
  cursor: pointer;
  transition: all 0.3s ease;
  span {
    display: flex;
    align-items: center;
  }
  .link {
    cursor: pointer;
    .icon {
      font-family: TirScript;
      margin-right: 8px;
    }
  }
  .sub-menu {
    display: none;
     .menu-item {
         
     }
  }
}
.menu-item.select {
  background: #684785;
  color: #FFB83A;
  border-right: 2px #FFB83A solid;

  .sub-menu {
    display: block;
    border-left: 1px #7470B7 solid;
    margin: 14px 0 14px 8px;

    .menu-item {
      font-size: 15px;
      padding: 0px 10px 0px 17px;
      border: none;
      padding-bottom: 8px;
    }
    .menu-item:last-child {
      padding-bottom: 0px;
    }
  }
}

.menu-item:hover {
  color: #FFB83A;
  background: #684785;
  border-right: 2px #FFB83A solid;
}

.menu-item:hover svg {
  fill: #FFB83A;
}

.menu-item:not(:last-child) {
  margin-bottom: 7px;
}


.menu-item .icon {
  margin-right: 17px;
}
.menu-item svg {
  fill: white;
  width: 17px;
  height: 17px;
  transition: all 0.3s ease;
}

.menu-item.select svg {
  fill: #FFB83A;
  
}

.sub-menu .menu-item .icon {
  display: none;
}

.menu-item .icon {
  width: 17px;
  height: 17px;
}

@media all and (max-width: 1105px) {
    .menu-item {
      .title {
        display: none;
      }
    }
    .menu-item .icon {
      width: 25px;
      height: 25px;
    }
    .menu-item .icon svg {
      height: 25px;
      width: 25px;
    }

    .sub-menu .menu-item.select .icon {
      display: block;
      svg {
        fill: #FFB83A;
      }
    } 

    .sub-menu .menu-item .icon {
      display: block;
      width: 17px;
      height: 17px;
      svg {
        fill: white;
        width: 20px;
        height: 20px;
      }
    }
}

@media all and (max-width: 860px) {
    .menu-item .icon {
      width: 17px;
      height: 17px;
    }
  .menu-item {
    svg {
      height: 17px;
      width: 17px;
    }
    .title {
      display: inline-block;
    }
  }
 

  .sub-menu .menu-item .icon {
    width: 17px;
    height: 17px;
    display: block;
    svg {
      display: none;
    }
  }
}

</style>
