<?php
/**
 * The main template file
 *
 * @package WordPress
 * @subpackage Third_Wunder_2017
 * @since 1.0
 * @version 1.0
 */
get_header();
?>
<div class="uk-container-expand">
   <div id="app">
      <!-- <site-header></site-header> -->
      <div id="main" class="site-main" role="main">
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <site-nav></site-nav>
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
     </div>

      <!-- <site-footer></site-footer> -->
   </div><!-- #app -->
</div>
<?php get_footer();
