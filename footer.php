<?php
/**
 * Pata
 *
 */
?>
   

        <footer>
            <a class="anchor" id="kontakt"></a>
            <div class="top">
                <div class="panel inner">
                    <div class="title">
                        <h2><?php echo __('Kontakt','pairam'); ?></h2>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="one">
                    <div class="text">
                        <div class="rotate">
                            <div class="left">
                                <span class="phone">
                                    <span><?php echo __('Tel:','pairam'); ?></span> <?php the_field('telefon','Options'); ?><br/>
                                    <span><?php echo __('E-mail:','pairam'); ?></span> <a href="mailto:<?php the_field('mail','Options'); ?>"><?php the_field('text_mailu','Options'); ?></a>
                                </span>
                                <h3><?php echo __('Adresa:','pairam'); ?></h3>
                                    <?php if(get_field('streetview','Options')) { ?>
                                            <?php the_field('adresa','Options'); ?>
                                    <?php } else {  ?>
                                        <?php the_field('adresa','Options'); ?>
                                    <?php } ?>
                                
                                    <?php if(get_field('streetview','Options')) { ?>
                                        <p>
                                        <a target="_blank" href="<?php the_field('streetview','Options') ?>"><?php echo __('Zobrazit na mapě','pairam') ?></a>
                                        </p> 
                                    <?php } ?>
                                    
                                <h3><?php echo __('Fakturační údaje:','pairam'); ?></h3>
                                    <?php the_field('fakturacni_adresa','Options'); ?>
                                <p>
                                    <?php echo __('IČ:','pairam'); ?> <?php the_field('fakturacni_ico','Options'); ?><br/>
                                    <?php echo __('DIČ:','pairam'); ?> <?php the_field('fakturacni_dic','Options'); ?>
                                </p>
                                
                                
                                
                                <!--<p>-->
                                    <?php 
                                    //if( get_field('lide','Options') ){
                                        //while( has_sub_field('lide','Options') ) { ?> 
                                            <!--<a href="mailto:<?php the_sub_field('e-mail'); ?>"><?php the_sub_field('jmeno'); ?> <span>(<?php the_sub_field('pozice'); ?>)</span></a>-->
                                        <?php //} ?>
                                    <?php //} ?>
                                <!--</p>-->
                            </div>
                            <div class="right footer_buttons">
                                <a class="buttonBlack order"><?php echo __('Poptávka','pairam'); ?></a>
                                <a id="pa-facebook" class="buttonBlack" href="https://www.facebook.com/www.pairam.cz/?ref=hl" target="_blank">Facebook</a>
                                <a id="pa-instagram" class="buttonBlack" href="https://www.instagram.com/janpairam/" target="_blank">Instagram</a>
                                <a id="pa-mailing" class="buttonBlack mailing">Newsletter</a>
                                <span id="lide" class="buttonBlack"><?php echo __('Lidé','pairam'); ?></span>
                                
                                <!--<h3><?php echo __('Lidé:','pairam'); ?></h3>-->
                            </div>
                        </div>

                    </div>
                    <div class="picture">

                        <div id="map-canvas">

			


			</div>

                    </div>
                </div>
            </div>
            <div class="bottomFooter">
                <div class="inner">
                    <div class="copyright">&copy; 2015 PAIRAM Solution s.r.o.</div>
                    <div class="created">
                        <?php $curLang = substr(get_bloginfo( 'language' ), 0, 2);
/*
                switch ($curLang) {
                        case "de": ?>
                            <a target="_blank" href="http://pixelfield.eu/">Erstellt Pixelfield, s.r.o.</a> - 
                            <a target="_blank" href="http://pixelfield.eu/web-development/" title="Website-Erstellung">Website-Erstellung</a>
                            <?php break;
                        case "en": ?>
                            <a target="_blank" href="http://pixelfield.eu/">Created by Pixelfield, s.r.o.</a> - 
                            <a target="_blank" href="http://pixelfield.eu/web-development/" title="web development">web development</a>
                            <?php break;
                        default: ?>
                            <a target="_blank" href="http://pixelfield.cz/">Vytvořil Pixelfield, s.r.o.</a> - 
                            <a target="_blank" href="http://pixelfield.cz/tvorba-webovych-stranek/" title="tvorba webových stránek">tvorba webových stránek</a>
                            <?php break; 
                    }
*/
                    ?></div>
                </div>
            </div>
        </footer>
</div>
        <!-- scripts -->
        <script src="<?php bloginfo('template_url'); ?>/js/dist/scripts.min.js"></script>
	    <!--<script src="<?php bloginfo('template_url'); ?>/js/dist/gmaps.js"></script>-->
        <script>
            // Landing page - schování záložky career v anglické verzi
            if ($(location).attr('href').indexOf("/en") >= 0) {
                // schováme odkaz ve stránce
                $('li[data-id="career"]').hide();
                // schovéme odkaz z menu
                $('li[id="menu-item-209"]').hide();
            }
            
            // Reference - skrývání prázdných položek popisu
            $('span[class=date]').each(function() { 
                if (!$(this).find("strong").text()) { $(this).hide(); }
            });
            
//            // Lidé obrázky - oprava překrývání fotek            
//            // změnila se šířka okna?
//            $( window ).resize(function() {
//                // má div s data-slick-index="0" třídu slick-active?
//                if ($(".slide.slick-slide.slick-active").attr("data-slick-index") == "0") {
//                    // tak u div s data-slick-index="1" vymaž atribut style 
//                    $('div[data-slick-index="1"]').addClass("slick-workaround");
//                }
//                else {
//                    $('div[data-slick-index="1"]').removeClass("slick-workaround");
//                }
//            });
            
            // Přesunutí menu Náš příběh
            // Byla provedena změna v compiled-dist.js, aby třetí položka menu O nás ukazovala na čtvrtou záložku Kariéra.
//            if (window.location.href.indexOf("?link=3") > -1) {
//                $('html, body').scrollTop($('#onas').offset().top);
//                setTimeout(function(){
//                    $('#aboutus .control li:nth-child(3)').trigger('click');
//                },2010);
//            }
//            $('#menu-prvni-menu #menu-item-208 a').click(function(){
//                if($('body').hasClass('home')) {
//                    $('html, body').stop().animate({
//                        'scrollTop': $('#onas').offset().top
//                    }, 900, 'swing',function (){
//                        $('#aboutus .control li:nth-child(3)').trigger('click');
//                    });
//                } else {
//                    window.location.href = window.location.protocol + "//" + window.location.host + "/"+"?link=3";
//                } 
//            });
//            $('#menu-prvni-menu #menu-item-208 a').css('cursor', 'pointer');


    
                
            function updateSpinner(obj)
            {

                var contentObj = $(obj).parent().find('input');
                if(contentObj.val()==""){
                    contentObj.attr("value", "0");
                }
                var value = parseInt(contentObj.val());
                if($(obj).attr("data-id") == "down") {
                    if(value>0) {
                        value--;
                    }
                } else {
                    if(value>=0) {
                        value++;
                    } else {
                        value=0;
                    }

                }
                contentObj.val(value);
            }
        </script>
        <script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		
		  ga('create', 'UA-77954382-1', 'auto');
		  ga('send', 'pageview');
		
	</script>
    <?php wp_footer(); ?>     

    </body>
</html>