<?php
/**
 * Template Name: Články
 *
 */
 
get_header();
?>
    <div class="thumb smaller">
        <?php echo wp_get_attachment_image( get_field('nahled_clanky'), 'nahled2'); ?>
    </div>
    <article class="ref withoutPadd">
        <div class="top withoutBg">
            <div class="inner">
            <!-- 
                <h2><?php echo __('Články','pairam') ?></h2>
                 -->
            </div>
        </div>

    </article>
<div class="references inner" id="ContainerClanky">
    <?php $args = array(
	'post_type' => 'post',
        ); ?>
    <?php $the_query = new WP_Query( $args ); ?>
    <?php if ($the_query->have_posts()) : ?>
	<?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
            <?php 
                $languages = getAvailableLanguages(get_post()->ID); 
                if (in_array(qtranxf_getLanguage(), $languages) || (qtranxf_getLanguage() == 'cz' && count($languages) == 0)) {    
            ?>
            
            <div class="singleRef full">
                <div class="titleArt">
                    <?php if(get_field('typ')==="blog") { ?>
                    <img src="<?php bloginfo('template_url'); ?>/images/blog.png" alt="<?php echo __('Blog','pairam'); ?>" />
                    <?php } ?>
                    <?php if(get_field('typ')==="clanek") { ?>
                    <img src="<?php bloginfo('template_url'); ?>/images/clanek.png" alt="<?php echo __('Článek','pairam'); ?>" />
                    <?php } ?>
                    <?php if(get_field('typ')==="video") { ?>
                    <img src="<?php bloginfo('template_url'); ?>/images/video.png" alt="<?php echo __('Video','pairam'); ?>" />
                    <?php } ?>
                    <?php if(get_field('typ')==="fotka") { ?>
                    <img src="<?php bloginfo('template_url'); ?>/images/photo.png" alt="<?php echo __('Fotografie','pairam'); ?>" />
                    <?php } ?>
                    <h2><?php the_title(); ?></h2>
                    <span><?php echo get_the_date('j. n. Y'); ?></span>
                    <span><?php echo get_the_author(); ?></span>
                </div>
                <div class="imgButt">
                    <div class="imgWrapperSmaller">
                        <a href="<?php echo get_permalink(); ?>">
                            <?php echo wp_get_attachment_image( get_field('nahled'), 'reff'); ?>
                        </a>
                    </div>
                    <a class="buttonWhite" href="<?php echo get_permalink(); ?>"><?php echo __('Více','pairam'); ?></a>
                </div>
                <div class="shortText">
                    <?php the_field('text_vypis'); ?>
                </div>
            </div>
                <?php } ?>
	<?php endwhile; ?>
    <div class="clear"></div>
    <?php else: ?>
	<article>
	    <h1>Požadovaná stránka nebyla nalezena.</h1>
	    <p>Stránka nenalezena.</p>
	</article>
    <?php endif; ?>
</div>

<?php get_footer(); ?>