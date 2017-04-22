import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

let STORAGE_KEY = 'vv3-theme'
let siteInfoStorage = {
  fetch : function(){
    let siteInfo = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    return siteInfo
  },
  save : function( key, data){
    let stored = this.fetch();
    stored[key] = data
    stored['last_updated'] = +new Date;
    console.log(stored);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored))
  }
}

const state = {
    siteInfo : '',
    allPosts  : '',
    // allPages : '',
    // allCategories : '',
    // allTags : '',
}

const getters = {
    getSiteInfo(state){
      return siteInfoStorage.fetch().siteInfo ? siteInfoStorage.fetch().siteInfo : state.siteInfo;
    },
    getAllPosts(state){
        return state.allPosts;
    },
    // getAllPages(state){
    //     return state.allPages;
    // },
    // getAllCategories(state){
    //     //return state.allCategories;
    //     return siteInfoStorage.fetch().allCategories ? siteInfoStorage.fetch().allCategories : state.allCategories;
    // },
    // getAllTags(state){
    //     //return state.allTags;
    //     return siteInfoStorage.fetch().allTags ? siteInfoStorage.fetch().allTags : state.allTags;
    // },
}

const mutations = {
    updateSiteInfo(state, info){
        state.siteInfo = info;
        let siteInfo = siteInfoStorage.fetch();
        let now  = +new Date;
        let one_day = 1000*60*60*24;
        if( (now - siteInfo.last_updated) > one_day ){
          siteInfoStorage.save('siteInfo',info);
        }
    },
    // updateAllPages(state, pages){
    //     state.allPages = pages;
    // },
    updateAllPosts(state, posts){
        state.allPosts = posts;
    },
    // updateAllCategories(state, categories){
    //     state.allCategories = categories;
    // },
    // updateAllTags(state, tags){
    //     state.allTags = tags;
    // },
}

const actions = {
    fetchSiteInfo({commit}){
        let siteInfo = axios.get('/wp-json/vv3/v1/info')
            .then(function (response) {
                commit('updateSiteInfo', response.data)
                return response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    // fetchAllPages({commit}){
    //     let pages = axios.get('/wp-json/wp/v2/pages?per_page=100')
    //         .then(function (response) {
    //             commit('updateAllPages', response.data)  ;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // },
    fetchAllPosts({commit, state}){
        let posts = axios.get('/wp-json/wp/v2/posts?per_page=100')
            .then(function (response) {
                commit('updateAllPosts', response.data)  ;
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    // fetchAllCategories({commit}){
    //     let categories = axios.get('/wp-json/wp/v2/categories')
    //         .then(function (response) {
    //             commit('updateAllCategories', response.data )
    //             return response.data
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // },
    // fetchAllTags({commit}){
    //     let tags = axios.get('/wp-json/wp/v2/tags')
    //         .then(function (response) {
    //             commit('updateAllTags', response.data );
    //             return response.data
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

});
