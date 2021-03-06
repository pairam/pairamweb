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
        <div class="top withoutBg padd">
                <div class="inner">
                    <h2><?php the_title(); ?></h2>
                </div>
            </div>

            <div class="inner content">
            <div class="ref-info">
                <div class="grid-row">
                    
                    <div class="grid-6">
                        <span class="date mt-10"><?php echo __('Realizováno:','pairam') ?> <strong><?php the_field('datum_realizace'); ?></strong></span>
                        <span class="date"><?php echo __('Místo realizace:','pairam') ?> <strong><?php the_field('misto'); ?></strong></span>
                        <span class="date"><?php echo __('Klient:','pairam') ?> <strong><?php the_field('klient'); ?></strong></span>
                    </div>

                    <?php if(get_field('url_klienta')) { ?>
                        <div class="grid-6">
                            <a class="buttonWhite buttonWhiteSmall ml-20" href="<?php the_field('url_klienta'); ?>" target="_blank">Web klienta</a>
                        </div>
                    <?php } ?>

                </div>
            </div>

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
                    
                    <div class="contentRef refGallery">
                            <?php 

                    $images = get_field('galerie_ref');

                    if( $images ): ?>
                        <ul class="gallery">
                            <?php foreach( $images as $image ): ?>
                                <li>
                                    <a href="<?php echo $image['url']; ?>">
                                        <div class="imgWrapperSmaller">
                                            <img src="<?php echo $image['sizes']['galArt']; ?>" alt="<?php echo $image['alt']; ?>" />
                                        </div>
                                         
                                    </a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>

                    
                    </div>
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