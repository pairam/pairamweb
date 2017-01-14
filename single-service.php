<?php
/**
 * Index
 *
 */
get_header();
?>

    <?php if (have_posts()) : ?>
	<?php while (have_posts()) : the_post(); ?>
        <!--<div class="slider">-->
            <?php 
//            if( get_field('slidery') ){
//                while( has_sub_field('slidery') )	{ 
//                    echo wp_get_attachment_image( get_sub_field('obrazek'), 'nahled');
//                }
//            }
            ?>
        <!--</div>-->
        <article class="ref services <?php if( !get_field('radky_sl') ){ echo 'fullwidth';} ?>">
            <div class="top withoutBg">
                <div class="inner">
                    <h2><?php the_title(); ?></h2>
                </div>
            </div>
            <div class="inner content services">
                <div class="left">
                    <p class="big"><?php the_field('bold'); ?></p>
                    <?php the_content(); ?>
                    <div class="contact">
                        <?php if (qtranxf_getLanguage()=='en') { ?>
                            <div class="leftC">
                            <span><?php echo 'Contact us, we are looking forward to You.' ?></span>
                            <span><?php echo __('Phone:','pairam'); ?> <?php the_field('telefon_sl'); ?></span>
                            <span><?php echo __('E-mail:','pairam'); ?> <a href="mailto:<?php the_field('email_sl'); ?>"><?php the_field('email_sl'); ?></a></span>
                            </div>
                            <div class="rightC">
                                <a class="buttonWhite order">Demand</a>
                            </div>
                        <?php }  else { ?> 
                            <div class="leftC">
                            <span><?php echo __('Kontaktujte nás, těšíme se na Vás.','pairam'); ?></span>
                            <span><?php echo __('Tel:','pairam'); ?> <?php the_field('telefon_sl'); ?></span>
                            <span><?php echo __('E-mail:','pairam'); ?> <a href="mailto:<?php the_field('email_sl'); ?>"><?php the_field('email_sl'); ?></a></span>
                            </div>
                            <div class="rightC">
                                <a class="buttonWhite order">Poptávka</a>
                            </div>
                        <?php } ?>                        
                    </div>
                    <div class="bottomText">
                        <?php the_field('spodni_text_sl'); ?>
                    </div>
                </div>
                <div class="right">
                   
                    <?php 
                    if( get_field('radky_sl') ){
                        ?>  <p class="big"><?php the_field('nadpis_pravy'); ?></p> <?php
                        $i=1;
                        while( has_sub_field('radky_sl') )	{ ?>
                    <div class="row">
                        <div class="before"><?php echo $i++; ?></div>
                        <div class="imgWrapperSmaller">
                            <?php echo wp_get_attachment_image( get_sub_field('obrazek_sl'), 'rows'); ?>
                        </div>
                        <div class="textRow">
                            <?php the_sub_field('text'); ?>
                        </div>
                    </div>
                            
                        <?php }
                    }
                    ?>
                </div>
                <div class="clear"></div>
            </div>
	</article>
        <article id="reference">
            <!--<a href="<?php echo get_post_type_archive_link( 'reference' ); ?>" class="buttonWhite"><?php echo __('Reference','pairam') ?></a>-->

            <div class="top">
                <div class="panel inner">
                    <div class="title">
                        <h2><?php echo __('Reference','pairam') ?></h2>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <?php $idcko = get_the_ID(); ?>
                <?php 
                $args2 = array(
                    'post_type' => 'reference',

                );
                $the_query2 = new WP_Query( $args2);

                // The Loop
                if ( $the_query2->have_posts() ) {
                        while ( $the_query2->have_posts() ) {
                                $the_query2->the_post(); ?>
                            <?php if(in_array($idcko, get_field('zobrazit_sluzby'))) { ?>
                                <div class="slide">
                                    <div class="one">
                                        <div class="text">
                                            <div class="rotate">
                                                <div class="nextprev">
                                                    <p class="bold"><span class="prev"><?php echo __('Předchozí','pairam') ?></span> / <span class="next"><?php echo __('Další','pairam') ?></span></p>
                                                </div>
                                                <p class="bold"><a href="<?php echo get_permalink() ?>" alt="<?php the_field('kratky_text') ?>"><?php the_field('kratky_text') ?></a></p>
                                                <a href="<?php echo get_post_type_archive_link( 'reference' ); ?>" class="buttonWhite"><?php echo __('Reference','pairam') ?></a>
                                            </div>

                                        </div>
                                        <div class="picture">
                                            <?php echo wp_get_attachment_image( get_field('obrazek_ref'), 'referenceVypis'); ?>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>
                        <?php } ?>
                <?php } ?>  
            </div>
        </article>
	<?php endwhile; ?>
    <?php else: ?>
	<article>
	    <h2><?php echo __('Připravuje se','pairam') ?></h2>
	</article>
    <?php endif; ?>


<?php get_footer(); ?>