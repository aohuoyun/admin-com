
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import './assets/css/base.css'
import './assets/css/common.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.use(VueAxios, axios)

// router.beforeEach((to, from, next) => {
//   let token_e=sessionStorage.getItem("token_e");
//   if(token_e !='' && token_e || to.path == "/login"||to.path== "/register"||to.path== "/submitInfo"){
//     next();
//   }else{
//     next({path:"/login"});
//   } 
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
