import '../scss/style.scss';
import Bulma from 'bulma';
import Vue from 'vue';
import VueRouter from 'vue-router';

// import axios from 'axios';
// import VueAxios from 'vue-axios';
// import VueResource from 'vue-resource';
Vue.use(VueRouter);

// ES build is more efficient by reducing unneeded components with tree-shaking.
// (Needs Webpack 2 or Rollup)
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
// import app from 'vue-router';
// Globally register components
// Vue.use(axios);
// Vue.use(BootstrapVue);

//.vue components
import CardView from './components/card-view.vue';
import Home from './components/home.vue';
import AppNav from './components/app-nav.vue';
Vue.component('app-nav', AppNav);


const routes = [
    { path: '/',  component: Home },
    { path: '/posts',  component: CardView },
    // { path: '/nav',  component: AppNav },
];

var router = new VueRouter({
  routes,
  mode: 'history',
});

// create a root instance
new Vue({
    el: '#app',
    router,

    data:{
        // posts: []
    },
    // render: function (createElement) {
    //     return createElement(appNav)
    // }
    // mounted() {
    //     axios.get('/wp-json/wp/v2/posts?per_page=5')
    //             .then(response=>console.log(response.data)
    //             )
    //             .catch(function (error) {
    //               console.log(error);
    //             });
    // },
    // mothods: {
    //     getPosts(){
    //         axios.get('/wp-json/wp/v2/posts?per_page=5')
    //                 .then(response=>console.log(response))
    //                 .catch(function (error) {
    //                   console.log(error);
    //                 });
    //
    //     }
    // }

    component: {
        'app-nav':  AppNav
    }
})
