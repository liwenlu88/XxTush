import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/list",
    name: "ListView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ListView.vue"),
  },
  {
    path: "/cart",
    name: "CartView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CartView.vue"),
  },
  {
    path: "/my",
    name: "MyView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
