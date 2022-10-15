import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import BaseLayout from "@layouts/base-layout.vue";
import CustomLayout from "@layouts/custom-layout.vue";
import PageMeditaition from "@pages/page-meditation/page-meditation.vue";
import PageCreateMeditaition from "@pages/page-meditation/page-create-meditation.vue";
import PageMusic from "@pages/page-music/page-music.vue";

import PageOther from "@pages/other/other.vue";

import MenuComponent from "./components/menu/main-menu/menu.vue"



const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: CustomLayout,
      children: [
      
        {
          name:"page-meditation",
          path: "",
          components: {
            default: PageMeditaition,
            menu: MenuComponent
          }
        },
        {
          name:"page-create-meditation",
          path: "create-meditation",
          components: {
            default: PageCreateMeditaition,
            menu: MenuComponent
          }
        },
        {
          name:"page-music",
          path: "music",
          components: {
            default: PageMusic,
            menu: MenuComponent
          }
        },
        {
          name:"other",
          path: "other/:id?",
          component: PageOther
        }
      
        // {
        //   path: "Новости",
        //   component: EmptyLayout,
        //   children:[
        //     {
        //       name: "news",
        //       path: "",
        //       component: PageNews,
        //       meta: {
        //         title: "Новости"
        //       }
        //     },
        //     {
        //       name: "news-detail",
        //       path: ":code",
        //       component: PageNewsDetail
        //     }
        //   ]
        // },
        
      ]
    }
    // {
    //     name: loginRoute.name,
    //     path: "/" + routeLangPrefix + "/login",
    //     component: LoginComponent,
    //     meta: {
    //         allowAnonymous: true,
    //         title: "Авторизация"
    //     }
    // },
    // {
    //     name: '404',
    //     path: "*",
    //     component: LoginComponent,
    //     meta: {
    //         allowAnonymous: true,
    //         title: "Авторизация"
    //     }
    // },
  ]
});

router.beforeEach((to, from, next) => {
 // console.log(to, from, next);
  //var title = Vue.$mainStore.PageTitle;
  // if (to.meta.title) {
  //   if (title) title = `${to.meta.title} | ${title}`;
  //   else title = to.meta.title;
  // }
  // document.title = title;
  // console.log("document.head.title", document.head.title);


  // if(!Vue.$mainStore.SchoolInfo){
  //   Vue.$api.SchoolService.GetSchoolInfoEvent.once(()=>{
  //     next();
  //   });
  //   Vue.$api.SchoolService.GetSchoolInfo();
  // }
  // else
    next();
  
});

export default router;
