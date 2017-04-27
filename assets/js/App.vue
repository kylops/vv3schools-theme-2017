<template>
<div id="app">

  <div id="page" class="site">
    <site-nav v-if="showNav"></site-nav>
    <!-- <div id="main" class="site-main uk-overflow-hidden" role="main"> -->
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <!-- <transition name="fade-down" mode="out-in" appear> -->
      <router-view></router-view>
      <!-- </transition> -->
    <!-- </div> -->

    <site-footer v-if="showNav"></site-footer>


  </div><!-- #page .site -->
</div><!-- #app -->
</template>

<script>
export default {
  name: 'app',
  // props : {
  //   showNav : '',
  // },
  data () {
    return {
    }
  },
  created(){
    //   this.$store.dispatch('fetchSiteInfo');
    //   this.$store.dispatch('fetchAllPages');
    //   this.$store.dispatch('fetchAllPosts');
    //   this.$store.dispatch('fetchAllCategories');
    //   this.$store.dispatch('fetchAllTags');
  },
  mounted(){
    //   this.getShowNav();
  },
  methods : {
    //   getShowNav(){
    //       if(this.$route.name == 'welcome'){
    //           this.showNav = false;
    //       }else{
    //           this.showNav = true;
    //       }
    //   }
  },
  computed: {
     showNav: function(){
        if(this.$route.name == 'welcome'){
           return this.showNavValue = false;
        }else{
           return this.showNavValue = true;
        }

      }
  }
}
</script>

<style scoped>
#app {

}
</style>
