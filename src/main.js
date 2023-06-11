import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//公共css文件
import "@/assets/css/common.css";
import "@/assets/bootstrap-icons/font/bootstrap-icons.css";

Vue.config.productionTip = false;
const Base64 = require("js-base64").Base64;
Vue.prototype.$Base64 = Base64;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
