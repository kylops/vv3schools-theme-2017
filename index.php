<?php
/**
 * The main template file
 *
 * @package WordPress
 * @subpackage Third_Wunder_2017
 * @since 1.0
 * @version 1.0
 */
get_header(); ?>
<div class="wrap container-fluid">

   <div id="primary" class="content-area">

      <main id="main" class="site-main" role="main">


         <div id="app">
           <!-- <app-nav></app-nav> -->
           <!-- <app-view>
             <app-sidebar></app-sidebar>
             <app-content></app-content>
           </app-view> -->
           <!-- <appNav></appNav> -->
           <app-nav></app-nav>
           <div class="container">
             <router-view></router-view>
           </div>
         </div>
      </main><!-- #main .site-main -->

   </div><!-- #primary .content-area -->

</div><!-- .wrap -->

<?php get_footer();
