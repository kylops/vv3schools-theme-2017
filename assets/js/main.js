import '../scss/style.scss'
import Vue from 'vue'
// import App from './App'

// Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// Vuex
import store from './store'



//import UIkit
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
// loads the Icon plugin
UIkit.use(Icons)

// Axios Import
import Axios from 'axios'
Vue.use(Axios)
window.axios = require('axios')

//.vue components
import Home from './components/Home.vue'
const routes = [
    { path: '/',  component: Home },
]
const router = new VueRouter({
  routes // short for routes: routes
})

var siteHeader = Vue.component(
    'site-header',
    require('./components/_site-header.vue')
)
var siteFooter = Vue.component(
    'site-footer',
    require('./components/_site-footer.vue')
)
var siteFooter = Vue.component(
    'site-nav',
    require('./components/_site-nav.vue')
)


// Initialize
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App },
  // render(h) {
  //   return h(App, {
  //     props: {
  //       siteTitle: this.$el.attributes.siteTitle.value
  //     },
  //   })
  // }
})
