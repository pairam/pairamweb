<?php
/**
 * Index
 *
 */
get_header();
?>

    <?php if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
        <div class="thumb smaller">
            <?php echo wp_get_attachment_image( get_field('uvodni_obr'), 'nahled2'); ?>
        </div>

        <article class="ref withoutPadd">
            <div class="top withoutBg padd">
                <div class="inner">
                    <h2><?php the_title(); ?></h2>
                </div>
            </div>
            <div class="inner content">
                <div class="contentRef">
                    <div class="info">
                        <span><?php echo get_the_date('j. n. Y'); ?></span>
                        <span>
                        	<?php if(get_the_author()=='Tereza' || get_the_author()=='Honza') {
                        				echo 'Blog '.get_the_author();
                        			}
                        			else {
                        				echo get_the_author();
                        			}?>                        
                        </span>
                    </div>
                    <p class="big"><?php the_field('uvodni_text'); ?></p>
                    <?php the_content(); ?>
                                        <?php 

                    $images = get_field('fotogalerie');

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
                    <?php if(get_field('youtube')) { ?><?php the_field('youtube') ?><?php } ?>
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