<?php
// menu
register_nav_menu('primary', __('Hlavní menu', 'pairam'));
register_nav_menu('Secondary', __('Sekundární menu', 'pairam'));

// sidebar
register_sidebar(array(
    'name' => __('Jazyky', 'pairam'),
    'id' => 'lang',
    'before_widget' => '',
    'after_widget' => '',
));

// jazyky
$lang_dir = get_template_directory() . '/languages';
load_theme_textdomain('pairam', $lang_dir);

// web title
function webTitle() {
    global $page, $paged;
    wp_title();
    //bloginfo('name');
    $site_description = get_bloginfo('description', 'display');
//    if ($site_description && ( is_home() || is_front_page() ))
//	echo " | $site_description";
}

add_image_size( 'slide', 1920, 699, true); 
add_image_size( 'nahled', 1920, 590, true); 
add_image_size( 'nahled2', 1920, 345, true); 
//add_image_size( 'reference', 146, 91, true); 
add_image_size( 'reference', 107, 64, true); 
add_image_size( 'referenceVypis', 1920, 711, true); 
add_image_size( 'galPeople', 132, 138, true); 
add_image_size( 'galArt', 258, 161, true); 
add_image_size( 'rows', 196, 9999, false); 
add_image_size( 'reff', 460, 288, true); 




if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
        'page_title' => 'Další nastavení',
        'menu_title'	=> 'Další nastavení',
        'menu_slug' => 'theme-general-settings',
        'capability'	=> 'edit_posts',
        'redirect'	 => false
    ));
}



// Přes tuto funkci zjistíme, jestli je článek v požadovaném jazyce
function getAvailableLanguages( $post_id )
{
        global $q_config;
        $post = &get_post($post_id);
        $languages = array();
        $content = qtrans_split($post->post_content);
        foreach($content as $lang => $lang_text) {
                $lang_text = trim($lang_text);
                if(!empty($lang_text)) $languages[] = $lang;
        }

        return $languages;
}




// images
//add_theme_support( 'post-thumbnails' ); 

//add_image_size( $name, $width, $height, $crop ); 

// queries
/*function nazev_projektu_Posts() {
	$args = array(
	    'post_type' => 'post',
	    'posts_per_page' => -1
	);
	$query = new WP_Query($args);
	while ($query->have_posts()) :
		$query->the_post(); ?>
            <?php if ( has_post_thumbnail() ) {
                the_post_thumbnail();
            } ?>
            <?php echo get_the_date('d. m. Y'); ?>
            <?php the_title(); ?>
            <?php the_excerpt(); ?>
            <?php the_content(); ?>
		<?php
	endwhile;
	wp_reset_postdata();
} */

?>