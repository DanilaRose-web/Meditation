export default class MenuItem {
    icon: string;
    name: string;
    prefix: string;
    routeName: string;
    routeParameters: Object;
    childs: MenuItem[];
    constructor(menu: Partial<MenuItem>) {
      this.icon = menu.icon;
      this.name = menu.name;
      this.routeName = menu.routeName;
      this.routeParameters = menu.routeParameters;
      this.childs = menu.childs;
      this.prefix = menu.prefix;
    }
  }  