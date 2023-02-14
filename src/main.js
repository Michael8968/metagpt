import Vue from "vue";
import "vant/lib/index.less";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");

