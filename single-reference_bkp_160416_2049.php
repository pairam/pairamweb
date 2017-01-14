<?php
/**
 * Index
 *
 */
get_header();
?>

    <?php if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
        <div class="thumb">
            <?php echo wp_get_attachment_image( get_field('nahled_ref'), 'nahled'); ?>
        </div>
        <article class="ref">
            <div class="top">
                <div class="inner">
                    <h2><?php the_title(); ?></h2>
                    <?php 

                    $images = get_field('galerie_ref');

                    if( $images ): ?>
                        <div class="gallery">
                            <?php foreach( $images as $image ): ?>
                                <div class="image">
                                    <a href="<?php echo $image['url']; ?>">
                                         <img src="<?php echo $image['sizes']['reference']; ?>" alt="<?php echo $image['alt']; ?>" />
                                    </a>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
            <div class="inner content">
                <span class="date"><?php echo __('Realizováno:','pairam') ?> <strong><?php the_field('datum_realizace'); ?></strong></span>
                <span class="date"><?php echo __('Klient:','pairam') ?> <strong><?php the_field('klient'); ?></strong></span>
                <span class="date"><?php echo __('Místo realizace:','pairam') ?> <strong><?php the_field('misto'); ?></strong></span>
                
                <div class="contentRef">
                    <?php the_content(); ?>
                </div>
                <div class="photos">
                    <?php if(get_field('pred')) { ?>
                        <div class="left">
                            <span><?php echo __('Před realizací','pairam') ?></span>
                            <div class="imgWrapper">
                                <?php echo wp_get_attachment_image( get_field('pred'), 'full'); ?>
                            </div>
                        </div>
                    <?php } ?>
                    <?php if(get_field('po_real')) { ?>
                        <div class="right">
                            <span><?php echo __('Po realizaci','pairam') ?></span>
                            <div class="imgWrapper">
                                <?php echo wp_get_attachment_image( get_field('po_real'), 'full'); ?>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
	</article>
	<?php endwhile; ?>
    <?php else: ?>
	<article>
	    <h1>Požadovaná stránka nebyla nalezena.</h1>
	    <p>Stránka nenalezena.</p>
	</article>
    <?php endif; ?>


<?php get_footer(); ?>