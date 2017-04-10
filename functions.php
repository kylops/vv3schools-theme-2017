<?php
/**
 * @package WordPress
 * @subpackage Third_Wunder_2017
 * @since Third Wunder 2017
 */

/**
 * Enqueue scripts and styles.
 */
if( !function_exists( "tw_theme_css" ) ) {
	function tw_theme_css() {
		wp_register_style( 'style',        get_stylesheet_directory_uri().'/style.css',array(),                     null, 'all' );
		wp_enqueue_style( 'style' );

		wp_register_style( 'main-css',        get_stylesheet_directory_uri().'/dist/main.css',array(),                     null, 'all' );
		wp_enqueue_style( 'main-css' );


	}
	add_action( 'wp_enqueue_scripts', 'tw_theme_css' );
}

if( !function_exists( "tw_theme_js" ) ) {
	function tw_theme_js() {
    	wp_register_script( 'bundle-js', get_template_directory_uri() . '/dist/bundle.js', array(), null, true );
    	wp_enqueue_script( 'bundle-js');


	}
	add_action( 'wp_enqueue_scripts', 'tw_theme_js' );
}


if(!function_exists('tw_theme_support')){
  function tw_theme_support() {
    $theme_menus = array(
                      'mobile' => 'Mobile Menu',    // mobile main navigation
                  		'primary' => 'Primary Menu',  // main nav in header
                    );

    load_theme_textdomain( 'thirdwunder', get_template_directory() . '/language' );
    add_theme_support( 'post-thumbnails');      // wp thumbnails (sizes handled in functions.php)
    add_theme_support( 'title-tag' );
    add_theme_support( 'html5', array(
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
      ) );
    add_theme_support( 'menus' );            // wp menus
    register_nav_menus( $theme_menus );      // wp3+ menus
  }
  add_action('after_setup_theme','tw_theme_support');
}

function get_author_data($author_id){
  $author = array('id' => $author_id);
  $author['email'] = get_the_author_meta( 'user_email', $author_id );
  $author['url'] = get_the_author_meta( 'user_url', $author_id );
  $author['display_name'] = get_the_author_meta( 'display_name', $author_id );
  $author['nicename'] = get_the_author_meta( 'user_nicename', $author_id );
  $author['nickname'] = get_the_author_meta( 'nickname', $author_id );
  $author['first_name'] = get_the_author_meta( 'first_name', $author_id );
  $author['last_name'] = get_the_author_meta( 'last_name', $author_id );
  $author['desc'] = get_the_author_meta( 'description', $author_id );
  $author['avatar'] = get_avatar_url( $author_id, array('size'=>500) );

  return $author;
}

// function prepare_rest($data, $post, $request){
//   $_data = $data->data;
//
//   // Featured Image
//   $thumb_id = get_post_thumbnail_id( $post->ID );
//   $thumbnail_img = wp_get_attachment_image_src( $thumb_id, 'thumbnail' );
//   $medium_img = wp_get_attachment_image_src( $thumb_id, 'medium' );
//   $large_img = wp_get_attachment_image_src( $thumb_id, 'large' );
//   $full_img = wp_get_attachment_image_src( $thumb_id, 'full' );
//
//   $caption = wp_get_attachment_caption( $thumb_id );
//   $alt = get_post_meta( $thumb_id, '_wp_attachment_image_alt', true);
//
//   $feat_img = array(
//     'caption' => $caption,
//     'alt' => $alt,
//     'sizes' => array(
//       'thumbnail' => array(
//         'url' => $thumbnail_img[0],
//         'width' => $thumbnail_img[1],
//         'height' => $thumbnail_img[2],
//       ),
//       'medium' => array(
//         'url' => $medium_img[0],
//         'width' => $medium_img[1],
//         'height' => $medium_img[2],
//       ),
//       'large' => array(
//         'url' => $large_img[0],
//         'width' => $large_img[1],
//         'height' => $large_img[2],
//       ),
//       'full' => array(
//         'url' => $full_img[0],
//         'width' => $full_img[1],
//         'height' => $full_img[2],
//       )
//     )
//   );
//   $_data['featured_image'] = $feat_img;
//
//
//   // Categories
//   $categories = get_the_category( $post->ID );
//   if($categories){
//     foreach($categories as $cat){
//       $cat_url = get_category_link( $cat->term_id );
//       $cat->category_url = $cat_url;
//     }
//     $_data['category_objects'] = $categories;
//   }
//
//
//   // Tags
//   $tags = get_the_tags( $post->ID );
//   if($tags){
//     foreach($tags as $tag){
//       $tag_url = get_tag_link( $tag->term_id );
//       $tag->tag_url = $tag_url;
//     }
//     $_data['tag_objects'] = $tags;
//   }
//
//
//   $author = get_author_data( $post->post_author );
//   $_data['author_object'] = $author;
//
//
//   $nextPost = get_adjacent_post(false, '', true );
//   $_data['next_post'] = !is_null($nextPost) ? array('id'=>$nextPost->ID, 'slug'=>$nextPost->post_name) : false;
//
//   $prevPost = get_adjacent_post(false, '', false );
//   $_data['previous_post'] = !is_null($prevPost) ? array('id'=>$prevPost->ID, 'slug'=>$prevPost->post_name) : false;
//
//
//   $data->data = $_data;
//   return $data;
// }
// add_filter( 'rest_prepare_post', 'prepare_rest', 1, 3 );
