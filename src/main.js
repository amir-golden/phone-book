import Vue from "vue";
import NProgress from "nprogress";
import App from "./App.vue";
import router from "./router";
import store from "./store";

NProgress.configure({
  minimum: 0.4,
  showSpinner: false,
  trickleSpeed: 200,
  speed: 200,
  easing: "ease-in",
});
NProgress.start();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
