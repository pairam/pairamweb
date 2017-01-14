<?php
/**
 * Template Name: O nás
 *
 */
get_header();
?>

    <?php if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
	<article>
        <h1><?php the_title(); ?></h1>
	    <?php the_content(); ?>
	</article>
	<?php endwhile; ?>
    <?php else: ?>
	<article>
	    <h1>Požadovaná stránka nebyla nalezena.</h1>
	    <p>Stránka nenalezena.</p>
	</article>
    <?php endif; ?>


<?php get_footer(); ?>