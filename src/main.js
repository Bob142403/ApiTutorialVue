import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "./",
  routes: []
});

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
});
