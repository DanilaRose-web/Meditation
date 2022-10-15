import { Route } from "vue-router";
import MenuItem from "./menuItem";
// import router from "../router";

class MenuItemFactory {
  /**
   * Меню проектов начало
  */
  // static ProjectTasks =  new MenuItem({icon: 'assets/img/svg-sprite.svg#users-icon-menu', prefix: '', name: 'Список пользователей', routeName: 'page-users', childs: [
  // ]});
  // static ProjectListWays =  new MenuItem({icon: 'assets/img/svg-sprite.svg#quest-icon-menu', prefix: 'ways-list', name: 'Список маршрутов', routeName: 'ways-list', childs: []});
  // static ProjectWaysMod =  new MenuItem({icon: 'assets/img/svg-sprite.svg#users-icon-menu', prefix: 'ways-mod', name: 'Модерация маршрутов', routeName: 'ways-mod', childs: []});
  static PageMeditation =  new MenuItem({icon: '/assets/img/svg-sprite.svg#meditation', prefix: '', name: 'Медитации', routeName: 'page-meditation', childs: [
    // MenuItemFactory.ProjectListWays,
    // MenuItemFactory.ProjectWaysMod,
  ]});
  static PageMusic =  new MenuItem({icon: '/assets/img/svg-sprite.svg#music', prefix: '', name: 'Музыка', routeName: 'page-music', childs: []});
  static PageUsers =  new MenuItem({icon: '/assets/img/svg-sprite.svg#users', prefix: '', name: 'Пользователи', routeName: 'page-users', childs: []});
  static PagePromocode = new MenuItem({icon: '/assets/img/svg-sprite.svg#promocode', prefix: '', name: 'Промокоды', routeName: 'page-promocode', childs: []});
  static PageEmail =  new MenuItem({icon: 'assets/img/svg-sprite.svg#email', prefix: '', name: 'Пуши и e-mail', routeName: 'page-email', childs: []});
  static PageInspiration =  new MenuItem({icon: 'assets/img/svg-sprite.svg#lamp', prefix: '', name: 'Вдохновение', routeName: 'page-inspiration', childs: []});
  /**
   * Меню проектов конец
  */
}
export default class MenuFactory {
  private static ProjectMenu = [ 
    MenuItemFactory.PageMeditation, 
    MenuItemFactory.PageMusic, 
    MenuItemFactory.PageUsers,
    MenuItemFactory.PagePromocode,
    MenuItemFactory.PageEmail,
    MenuItemFactory.PageInspiration 
  ];

  static getProjectMenu(): MenuItem[] {
    this.addParams(this.ProjectMenu, {});
    let menuItems: MenuItem[] = this.ProjectMenu;
    return menuItems;
  }
  static addParams(menu: MenuItem[], params: Object) {
    menu.forEach(item => {
      item.routeParameters = params;
      if (item.childs.length > 0) {
        this.addParams(item.childs, params);
      }
    })
  }
}
