// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHttp from 'vue-resource'
import RouterConfig from "../config/router-config"
import ApiConfig from "../config/api-config"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueHttp);
var router = new VueRouter({
	// mode: 'history',
    linkActiveClass: "active",
    routes : RouterConfig
})
// console.log(router);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// hot-serve
window.router = router

Vue.prototype.extendApi = ApiConfig;