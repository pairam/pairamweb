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
            <?php echo wp_get_attachment_image( get_field('uvodni_obrazek'), 'nahled2'); ?>
        </div>
        <article class="mainContent">
            <div class="inner">
                <article class="ref withoutPadd">
                    <div class="top withoutBg">
                        <h2><?php the_title(); ?></h2>
                    </div>
                </article>
                <article class="obsah">
                    <?php the_content(); ?>
                </article>
                
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