<?php
/**
 * Index
 *
 */
get_header();
?>


        <div class="infoText">
            <?php the_field('text_na_slideru'); ?>
        </div>
        <div class="slider">
            <?php 
            if( get_field('slidery') ){
                while( has_sub_field('slidery') )	{ 
                    echo wp_get_attachment_image( get_sub_field('obrazek'), 'slide');
                }
            }
            ?>
        </div>
        <section>
            <article class="boxes">
                <div class="inner">
                    <?php 
                    if( get_field('boxy') ){
                        while( has_sub_field('boxy') )	{ ?>
                            <div class="box">
                                <h2><?php the_sub_field('nazev'); ?></h2>
                                <div class="text">
                                    <?php the_sub_field('text'); ?>
                                    <a href="<?php the_sub_field('odkaz'); ?>" class="button"><?php echo __('Dále','pairam') ?></a>
                                    <ul>
                                        <?php 
                                        if( get_sub_field('seznam') ){
                                            while( has_sub_field('seznam') )	{ 
                                                echo '<li>'.get_sub_field('text').'</li>';
                                            }
                                        }
                                        ?>
                                    </ul>
                                </div>
                            </div>
                       <?php }
                    }
                    ?>
                </div>
            </article>
            <article id="aboutus">
                <a class="anchor" id="onas"></a>                
                <a class="anchor" id="onas-kdojsme"></a>
                <a class="anchor" id="onas-lide"></a>
                <a class="anchor" id="onas-kariera"></a>
                <div id="blackCover"><img src="<?php bloginfo('template_url'); ?>/images/ajax-loader.gif" alt="Loading" /></div>
                <div class="topSlick">
                    <div class="panel inner">
                        <div class="title">
                            <?php 
                            $args = array(
                                'page_id' => 24,

                            );
                            $the_query3 = new WP_Query( $args);

                            // The Loop
                            if ( $the_query3->have_posts() ) {
                                    while ( $the_query3->have_posts() ) {
                                            $the_query3->the_post(); ?>
                                            <h2 class="who"><?php the_field('nadpis_who'); ?></h2>
                                            <h2 class="people"><?php the_field('nadpis_people'); ?></h2>
                                            <?php if(!get_field('skryt_panel') && false) { ?>
                                                <?php the_field('nadpis_story'); ?></h2>
                                            <?php } ?>
                                            <h2 class="career"><?php the_field('nadpis_career'); ?></h2>
                                    <?php } ?>
                            <?php } ?>
                            
                        </div>
                        <ul class="control">
                            <li data-id="who"><?php echo __('Kdo jsme a co děláme','pairam') ?></li>
                            <li data-id="people"><?php echo __('Lidé','pairam') ?></li>
                            <?php if(!get_field('skryt_panel') && false) { ?>
                                <?php echo __('Náš příběh','pairam') ?></li>
                            <?php } ?>
                            <li data-id="career"><?php echo __('Kariéra','pairam') ?></li>
                        </ul>
                    </div>
                </div>
                <div class="bottomSlick">
                    <?php 
                    $the_query = new WP_Query( $args);

                    // The Loop
                    if ( $the_query->have_posts() ) {
                            while ( $the_query->have_posts() ) {
                                    $the_query->the_post(); ?>
                                <div id="who" class="one">
                                    <!--<h2 class="mobilemobile"><?php the_field('nadpis_who'); ?></h2>-->
                                    <div class="text">
                                        <div class="rotate">
                                            
                                            <?php if(get_field('dulezity_text')) { ?><p class="bold"><?php the_field('dulezity_text') ?></p><?php } ?>
                                            <?php the_field('text_who') ?>
                                        </div>

                                    </div>
                                    <div class="picture">
                                        <?php echo wp_get_attachment_image( get_field('obrazek_who'), 'full'); ?>
                                    </div>
                                </div>
                                <a class="anchor" id="peoplea"></a>
                                <h2 id="onasSwitch" class="about-us-headline desktop-hidden">O nás</h2>
                                <div id="people" class="one">

                                    <!--<h2 class="mobilemobile"><?php the_field('nadpis_people'); ?></h2>-->
                                    <?php 
                                    if( get_field('lide') ){
                                        $report = "";
                                        $k=1;
                                        while( has_sub_field('lide') ) { ?> 
                                            <?php $report .= '<li title="'.get_sub_field('jmeno').'" data-id='.$k++.'>'.wp_get_attachment_image( get_sub_field('prepinac'), 'galPeople').'</li>';?>
                                        <?php } ?>
                                    <?php } ?>

                                    <?php 
                                    if( get_field('lide') ){
                                        while( has_sub_field('lide') ) { ?> 
                                            <div class="slide">
                                                <div class="text">
                                                    <div class="rotate">
                                                        <div id="o-nas-toggle" class="info">
                                                            <div class="before"></div>
                                                            <span class="name"><?php the_sub_field('jmeno'); ?> / <span class="position"><?php the_sub_field('pozice'); ?></span></span>
                                                            <p>
                                                                <?php if(get_sub_field('email')) { ?>
                                                                    <?php echo __('email:','pairam') ?> <a href="mailto:<?php the_sub_field('email') ?>"><?php the_sub_field('email') ?></a> <br/>
                                                                <?php } ?>
                                                                <?php if(get_sub_field('telefon')) { ?>
                                                                    <?php echo __('tel:','pairam') ?> <?php the_sub_field('telefon') ?> <br/>
                                                                <?php } ?>
                                                                <?php the_sub_field('popis'); ?>
                                                            </p>
                                                            <?php echo wp_get_attachment_image( get_sub_field('nahled'), 'nahled','',  array('class'=>'mobilemobile')); ?>
                                                            <div class="after"></div>
                                                        </div>
                                                        <ul class="gallery">
                                                            <?php echo $report; ?>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="picture">
                                                    <?php echo wp_get_attachment_image( get_sub_field('nahled'), 'nahled'); ?>
                                                </div>
                                            </div>
                                        <?php }
                                    }
                                    ?>
                                </div>
                                <?php if(!get_field('skryt_panel') && false) { ?>
                                    <div id="story" class="one">
                                        <!--<h2 class="mobilemobile"><?php the_field('nadpis_story'); ?></h2>-->
                                        <div class="text">
                                            <div class="rotate">
                                                <?php if(get_field('jmeno_story')) { ?><span class="name"><?php the_field('jmeno_story') ?> / <span class="position"><?php the_field('pozice_story') ?></span></span><?php } ?>
                                                <?php the_field('text_story') ?>
                                            </div>

                                        </div>
                                        <div class="picture">
                                            <?php echo wp_get_attachment_image( get_field('obrazek_story'), 'full'); ?>
                                        </div>
                                    </div>
                                <?php } ?>
                                <div id="career" class="one">
                                    <!--<h2 class="mobilemobile"><?php the_field('nadpis_career'); ?></h2>-->
                                    <div class="text">
                                        <div class="rotate">
                                            
                                            <?php 
                                            if( get_field('pozice_rep') ){
                                                while( has_sub_field('pozice_rep') )	{ ?>
                                                    <div class="position">
                                                        <span><?php the_sub_field('nadpis') ?></span>
                                                        <div class="hidden">
                                                            <p><?php the_sub_field('popisek') ?></p>
                                                        </div>
                                                    </div>
                                                <?php }
                                            }
                                            ?>
                                            
                                        </div>

                                    </div>
                                    <div class="picture">
                                        <?php echo wp_get_attachment_image( get_field('obrazek_career'), 'full'); ?>
                                    </div>
                                </div>
                            <?php }
                    }
                    ?>
                    
                    
                    
                </div>
            </article>
            <article id="reference">
                
                
                <div class="top">
                    <div class="panel inner">
                        <div class="title">
                            <h2><?php echo __('Reference','pairam') ?></h2>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <?php 
                    $args2 = array(
                        'post_type' => 'reference',

                    );
                    $the_query2 = new WP_Query( $args2);

                    // The Loop
                    if ( $the_query2->have_posts() ) {
                            while ( $the_query2->have_posts() ) {
                                    $the_query2->the_post(); ?>
                                <?php if(get_field('zobrazit')) { ?>
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
        </section>

<?php get_footer(); ?>