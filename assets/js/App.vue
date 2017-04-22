<template>
<div id="app">

  <div id="page" class="site">
    <site-header></site-header>
    <h1>Hello World</h1>
    <div id="main" class="site-main" role="main">
      <!-- route outlet -->
      <!-- component matched by the route will render here -->
      <!-- <transition name="fade-down" mode="out-in" appear> -->
      <router-view></router-view>
      <!-- </transition> -->
    </div>

    <site-footer></site-footer>


  </div><!-- #page .site -->
</div><!-- #app -->
</template>

<script>
export default {
  name: 'app',
  props : {
    siteTitle : '',
  },
  data () {
    return {

    }
  },
  created : function(){
      this.$store.dispatch('fetchSiteInfo');
    //   this.$store.dispatch('fetchAllPages');
      this.$store.dispatch('fetchAllPosts');
    //   this.$store.dispatch('fetchAllCategories');
    //   this.$store.dispatch('fetchAllTags');
  },
  mounted : function(){},
  methods : {

  },
}
</script>

<style scoped>
#app {

}
@keyframes fadeInDown {
    from {
        opacity: 0.05;
        transform: translate3d(0, -60px, 0);
    }
    to {
        opacity: 1;
        transform: none;
    }
}

@keyframes fadeOutUp {
    from {
        opacity: 1;
        transform: none;
    }
    to {
        opacity: 0.05;
        transform: translate3d(0, -60px, 0);
    }
}

.fade-down-enter-active {
    animation-name: fadeInDown;
    animation-duration: 0.5s;
}

.fade-down-leave-active {
    animation-name: fadeOutUp;
    animation-duration: 0.3s;
}
</style>
