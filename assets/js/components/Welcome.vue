<template lang="html">
    <!-- <div class="uk-cover-container uk-height-large">
        <img src="http://www.wallpapers-web.com/data/out/19/3864777-artistic-wallpapers.jpg" alt="" />
        <div class="uk-overlay uk-light uk-position-bottom">
            <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div> -->
    <div id="homepage-main" class="uk-overflow-hidden">
        <!-- <div id="main-title" class="uk-h2 uk-margin-remove">{{title}}</div> -->
        <div id="main-bg" class="uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle">
            <div id="main-title" class="uk-heading-primary uk-position-z-index" v-text="title"></div>

            <div class="head-icon uk-width-medium-1-4 uk-width-small-1-2 uk-position-z-index">
                        <div class="head-icon-img-div">
                            <router-link :to="{ path: 'home' }" class="head-icon-a">
                                <div class="head-icon-img head-icon-child uk-border-circle">&nbsp;</div>
                            </router-link>
                        </div>
            </div>
            <div id="social-icon-list" class="uk-navbar-nav uk-position-z-index uk-list">
                  <div id="social-icon">
                    <a target="_blank" href="https://github.com/kylops" class="">
                      <span uk-icon="icon: github; ratio: 2"></span>
                    </a>
                </div>
                  <div>
                    <a target="_blank" href="https://www.facebook.com/kyle.yangliu" class="">
                      <span uk-icon="icon: facebook; ratio: 2"></span>
                    </a>
                </div>
                  <div>
                    <a target="_blank" href="https://www.instagram.com/kyle.yangliu/" class="">
                      <span uk-icon="icon: instagram; ratio: 2"></span>
                    </a>
                </div>

            </div>


            <img src="http://www.vv3schools.com/wp-content/uploads/2017/04/3864777-artistic-wallpapers.jpg" alt="wallpaper" uk-scrollspy="cls: uk-animation-kenburns; repeat: true">

        </div>

    </div>
</template>

<script>
export default {
    name: 'welcome',
    props : {

    },
    data(){
      return {
        title: 'CATS RULE!'
      }
    },
    mounted(){
    },
    methods : {
    },
    computed : {
    }
}
</script>

<style lang="css">
#main-title{
    font-size: 4em;
    color: white;
    position: absolute;
    text-align: center;
    text-align: -webkit-center;

    top: 20%;
    font-family: 'Gloria Hallelujah', cursive !important;
}
#homepage-main{
    height: 100vh;
}
#main-bg{
    positon: relative;
    height: 100%;
}
.head-icon-child { background-image: url('http://www.vv3schools.com/wp-content/uploads/2017/04/cooper-logo.jpeg'); }
#social-icon-list{
    position: absolute;
    top: 70%;
}
a{
    color: black;
}
</style>
