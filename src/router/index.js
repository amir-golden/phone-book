import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/users/",
  },
  {
    path: "/users/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/users/:id",
    name: "UserCard",
    component: () => import("../views/UserCard.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  store.dispatch("getUserList").then(() => {
    next();
  });
});

export default router;
