import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
axios.interceptors.request.use((config: any) => {
  config.headers.Authorization = "Bearer " + window.sessionStorage.getItem("token");
  return config;
});

axios.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          router.replace({ path: "/login" });
      }
    }
  }
);

Vue.config.productionTip = false;

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
