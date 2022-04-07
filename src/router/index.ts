import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import {default as User} from '../components/user/Index.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path:'/login',
    name:'Login',
    component: ()=> import('../views/Login.vue')
  },
  {
    path: "/",
    name: "Index",
    component: ()=>import('../components/Index.vue'),
    redirect: '/user',
    children:[
      {
        path:'/user',
        name:'User',
        component: User
      }
    ]

  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
