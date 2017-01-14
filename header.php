<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<?php  ?>
	<head>
		<meta charset="<?php bloginfo('charset'); ?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><?php webTitle( ); ?></title>
		<meta name="author" content="PAIRAM Solution s.r.o." />
                <meta name="robots" content="all">
		<meta name="keywords" content="návrhy osvětlení, umělecká svítidla, design, realizace osvětlení" />
		
		<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('template_url'); ?>/css/style.css" />
		<script type="text/javascript">
			var site_url = '<?php bloginfo('url'); ?>';
		</script>
<!--		<script async src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBKLPUlQqLD2qnNOAPOMewW9y8h6YYFqVs"></script>-->
                <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBKLPUlQqLD2qnNOAPOMewW9y8h6YYFqVs"></script>
		<?php wp_head(); ?>
		
		<!-- Facebook Pixel Code -->
		<script async>
		!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
		n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
		document,'script','//connect.facebook.net/en_US/fbevents.js');
		
		fbq('init', '1671603673098912');
		fbq('track', "PageView");
		fbq('track', 'ViewContent');
		</script>
		<noscript><img height="1" width="1" style="display:none"
		src="https://www.facebook.com/tr?id=1671603673098912&ev=PageView&noscript=1"
		/></noscript>
		<!-- End Facebook Pixel Code -->
	</head>
	<body <?php body_class(); ?>>
		<?php //if (is_active_sidebar('top')) dynamic_sidebar('top'); ?>
		<?php //wp_nav_menu(array('theme_location' => 'primary', 'container' => false)); ?>
		<div class="wrapper">
		<div class="replaceHeader"></div>
		<header>
			<div class="inner">
                                <h1><a href="/<?php echo qtranxf_getLanguage(); ?>"><img class="logo" src="<?php bloginfo('template_url'); ?>/images/<?php if (qtranxf_getLanguage()=='en') { echo 'logo_en.png'; } else { echo 'logo.png'; } ?>" alt="Pairam" /></a></h1>
				<?php wp_nav_menu(array('theme_location' => 'primary', 'container' => false)); ?>
				<div class="menus">
					<?php wp_nav_menu(array('theme_location' => 'Secondary', 'container' => false)); ?>
					<?php if (is_active_sidebar('lang')) dynamic_sidebar('lang'); ?>
				</div>
				<img id="openMenu" class="mobile" src="<?php bloginfo('template_url'); ?>/images/menu.png" alt="Menu" />


				<div id="menuMobile">
					<?php wp_nav_menu(array('theme_location' => 'primary', 'container' => false)); ?>
					<?php wp_nav_menu(array('theme_location' => 'Secondary', 'container' => false)); ?>
					<?php if (is_active_sidebar('lang')) dynamic_sidebar('lang'); ?>
				</div>
				<div class="clear"></div>
			</div>
		</header>
		<div id="cover"></div>
		<div id="order">
                    <?php if (qtranxf_getLanguage()=='en') { ?>
			<span id="closeOrder"><img src="<?php bloginfo('template_url'); ?>/images/close.png" alt="Close demand form" /></span>
			<h2><?php echo __('Poptávkový formulář','pairam'); ?></h2>
			<p><?php echo __('Po odeslání této nezávazné poptávky vás budeme kontaktovat.','pairam'); ?></p>
			<div class="forms">
<!--                <div class="umelecke">
					<?php echo do_shortcode('[contact-form-7 id="829" title="Poptávka_other_en"]'); ?>
				</div>
				<div class="ostatni">
					<?php echo do_shortcode('[contact-form-7 id="830" title="Poptávka_new_en"]'); ?>
				</div>-->
			</div>
			<?php echo do_shortcode('[contact-form-7 id="831" title="Poptávka_en"]'); ?>
                    <?php }  else { ?> 
                        <span id="closeOrder"><img src="<?php bloginfo('template_url'); ?>/images/close.png" alt="Zavřít poptávkový formulář" /></span>
			<h2><?php echo __('Poptávkový formulář','pairam'); ?></h2>
			<p><?php echo __('Po odeslání této nezávazné poptávky vás budeme kontaktovat.','pairam'); ?></p>
			<div class="forms">
<!--                <div class="umelecke">
					<?php echo do_shortcode('[contact-form-7 id="191" title="Poptávka_other"]'); ?>
				</div>
				<div class="ostatni">
					<?php echo do_shortcode('[contact-form-7 id="190" title="Poptávka_new"]'); ?>
				</div>-->
			</div>
			<?php echo do_shortcode('[contact-form-7 id="4" title="Poptávka"]'); ?>
                    <?php } ?>
		</div>
		<div id="mailing" >
                    <?php if (qtranxf_getLanguage()=='en') { ?>
                        <span id="closeOrder"><img src="<?php bloginfo('template_url'); ?>/images/close.png" alt="Close form" /></span>	
			<?php echo do_shortcode('[contact-form-7 id="828" title="mailing_en"]'); ?>
                    <?php }  else { ?> 
                        <span id="closeOrder"><img src="<?php bloginfo('template_url'); ?>/images/close.png" alt="Zavřít formulář" /></span>	
			<?php echo do_shortcode('[contact-form-7 id="525" title="Mailing"]'); ?>
                    <?php } ?>
		</div>
