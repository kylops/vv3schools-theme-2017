<template lang="html">
    <!-- <div class="uk-cover-container uk-height-large">
        <img src="http://www.wallpapers-web.com/data/out/19/3864777-artistic-wallpapers.jpg" alt="" />
        <div class="uk-overlay uk-light uk-position-bottom">
            <p>Default Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div> -->
    <div class="uk-section uk-background-cover uk-height-large uk-panel uk-flex uk-flex-center uk-flex-middle uk-overflow-hidden">
        <img src="http://vv3schools.dev/wp-content/uploads/2017/04/3864777-artistic-wallpapers.jpg" alt="Example image" uk-scrollspy="cls: uk-animation-kenburns; repeat: true">

        <p class="title uk-h4 uk-position-z-index">{{title}}</p>
    </div>
</template>

<script>
export default {
    name: 'site-header',
    props : {
    },
    data(){
      return {
        title : 'This is the Homepage title'
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
</style>
