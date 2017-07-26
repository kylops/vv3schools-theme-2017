import '../scss/style.scss'
import Vue from 'vue'
import App from './App.vue'

// Vue Router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Vuex
import store from './store.js'

// Axios Import
import Axios from 'axios'
Vue.use(Axios)
window.axios = require('axios')

import iView from 'iview'
Vue.use(iView)
// import 'node_modules/iview/dist/styles/iview.css'

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
// UIkit.notification('Hello world.');

//.vue components
import Home from './components/Home.vue'
import Welcome from './components/Welcome.vue'


const routes = [
    { path: '/', name: 'welcome', component: Welcome },

    { path: '/home', name: 'home', component: Home }
]
const router = new VueRouter({
    mode: 'history',
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
var postList = Vue.component(
    'post-list',
    require('./components/_post-list.vue')
)


// Initialize
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },  // render(h) {
  //   return h(App, {
  //     props: {
  //       siteTitle: this.$el.attributes.siteTitle.value
  //     },
  //   })
  // }
})
