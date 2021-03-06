<?php
/**
 * Index
 *
 */
get_header();
?>
   
        <?php 
                    
                    $tax2 = 'kategorie';
                    $argst2 = array(
                        'hide_empty'        => 0, 
                        'exclude'           => array(), 
                        'exclude_tree'      => array(), 
                        'include'           => array(),
                        'number'            => '', 
                        'fields'            => 'all', 
                        'slug'              => '',
                        'parent'            => 0,
                        'hierarchical'      => true, 
                        'child_of'          => 0,
                        'childless'         => true,
                        'get'               => '', 
                        'name__like'        => '',
                        'description__like' => '',
                        'pad_counts'        => false, 
                        'offset'            => '', 
                        'search'            => '', 
                        'cache_domain'      => 'core'
                    ); 

                    ?>
    <!--<div class="thumb">-->
        <?php 
//        $args = array(
//            'page_id' => 197,
//
//        );
//        $the_query3 = new WP_Query( $args);
//
//        // The Loop
//        if ( $the_query3->have_posts() ) {
//                while ( $the_query3->have_posts() ) {
//                        $the_query3->the_post(); ?>
                        <?php //echo wp_get_attachment_image( get_field('uvodni_obrazek'), 'nahled'); ?>
                <?php //} ?>
        <?php //} ?>
    <!--</div>-->
    <article class="ref">
        <div class="top new">
            <div class="inner">
                <h2><?php echo __('Reference','pairam') ?></h2>
            </div>
        </div>
        <div class="filter">
            <div class="inner">
                <?php $tax_terms2 = get_terms($tax2,$argst2);
                    foreach ($tax_terms2  as $tax_term2) {
                        echo '<a href="' . get_term_link( $tax_term2, $tax2 ) . '">' . __($tax_term2->name,'mstc') . '</a>';  
                    }
                    ?>
            </div>
        </div>

    </article>
<div class="references inner">
    <?php if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
        
            <div class="singleRef">
                <div class="title"><?php the_title(); ?></div>
                <div class="imgButt">
                    <div class="imgWrapperSmaller">
                    	<a href="<?php echo get_permalink(); ?>">
                        	<?php echo wp_get_attachment_image( get_field('obrazek_vypis'), 'reff'); ?>
                        </a>
                    </div>
                    <a class="buttonWhite" href="<?php echo get_permalink(); ?>"><?php echo __('Více','pairam'); ?></a>
                </div>
            </div>
        
	<?php endwhile; ?>
    <div class="clear"></div>
    <?php else: ?>
	<article class="error404">
	    <h2><?php echo __('Připravuje se','pairam') ?></h2>
	</article>
    <?php endif; ?>
</div>

<?php get_footer(); ?>