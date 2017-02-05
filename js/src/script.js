jQuery(document).ready(function ($) {
    var isSliderActive = 0;
    var w = 0;

    $(window).load(function() {
        w = $(window).width();
    });

    // checks for support of svg, then converts selected svgs into paths
    // after you change format of your template to PHP delete the code below
    // and in HTML replace path to image by this piece of code (example)
    // <?php echo file_get_contents("wp-content/themes/template/images/icon.svg"); ?> 
    if (!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
        $('img[src*="svg"]').attr('src', function () {
            return $(this).attr('src')
                .replace('.svg', '.png');
        });
    } else {
        $('img[src*="svg"]').addClass("svg");
    }

    $('img.svg.convert').each(function () {
        var $img = jQuery(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function (data) {
            var $svg = jQuery(data).find('svg');
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        }, 'xml');
    });
    
    function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var myLatlng = new google.maps.LatLng(50.076638, 14.510277);
        var center = new google.maps.LatLng(50.076344, 14.498112);
        var mapOptions = {
            center: center,
            scrollwheel: false,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var image = {
            url: site_url + '/wp-content/themes/theme/images/marker.png',
            //origin: new google.maps.Point(-108, 0),
            anchor: new google.maps.Point(25, 50),
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: image,
            title: 'Pairam Solution s.r.o.'
        });
    }

    // smooth scroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);

        if (target !== '') {
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        }
    });
    
    // prefixes
    function replaceText(node) {
        var current = node.nodeValue;
        var replaced = current.replace(/(\s\w)\s/g, "$1\xA0"); // (search pattern, replace pattern) use regular expressions
        node.nodeValue = replaced;
    }

    function traverse(node) {
        var children = node.childNodes;
        var childLen = children.length;
        for(var i = 0; i < childLen; i++) {
            var child = children.item(i);
            if(child.nodeType == 3) //or if(child instanceof Text)
                replaceText(child);
            else traverse(child);
        }
    }

    function replaceAll() { traverse(document.body); }
    replaceAll();
    
    var constructSlider = function () {

        $('#images-slider').slick({
            infinite: true,
            slidesToShow: 1,
            pauseOnHover: false,
            slidesToScroll: 1,
            prevArrow: '<span class="arrow prev"></span>',
            nextArrow: '<span class="arrow next"></span>',
            slide: 'img'
        });

        $('#people').on('init', function(slick) {
            setTimeout(function() {
                $('#blackCover').hide();
                $('.topSlick .control li:first-child').trigger('click');
            }, 2000);
        });

        $('#people').slick({
            infinite: true,
            slidesToShow: 1,
            pauseOnHover: false,
            dots: true,
            draggable: false,
            slidesToScroll: 1,
            prevArrow: '<span class="arrow prev"></span>',
            nextArrow: '<span class="arrow next"></span>',
            responsive: [
                {
                    breakpoint: 720,
                    settings: "unslick",
                },
            ]
        });

        $('#reference-slider').slick({
            infinite: true,
            slidesToShow: 1,
            pauseOnHover: false,
            draggable: false,
            slidesToScroll: 1,
            prevArrow: '<span class="arrow prev ref"></span>',
            nextArrow: '<span class="arrow next ref"></span>',
            responsive: [
                {
                    breakpoint: 720,
                    settings: "unslick",
                },
            ]
        });

        if ($('.single-reference .top .gallery .image').length > 6) {
            $('.single-reference .top .gallery').slick({
                infinite: true,
                slidesToShow: 6,
                arrows: false,
                pauseOnHover: false,
                draggable: false,
                slidesToScroll: 1,
                autoplay: true,
                respondTo: 'slider',
                autoplaySpeed: 2000
            });
        }
    };

    var name = function () {
        if ($(window).width() > 1400) {
            $('#people .slide').each(function() {
                var top = parseInt($('.rotate', this).css('paddingTop'));
                var topAfter = parseInt($('.rotate', this).css('paddingTop')) + $('.rotate .info', this).outerHeight();
                var width = $('.text', this).width() + 583;
                $('.text .info .before', this).width(width - top - 52 - 7);
                $('.text .info .after', this).width(width - topAfter - 4 - 4);
            });
        }
    };

    var peopleToggle = function () {
        $("#onasSwitch").addClass("caret-down");
        $("#people").addClass("people-hidden");
    };

    $("#onasSwitch").click(function() {
        $(this).toggleClass("caret-down caret-up");
        $("#people").toggleClass("people-hidden people-visible");
    });

    if ($(window).width() < 719) {
        peopleToggle();
        $("#images-slider").slick();
    }
    
    if ($(window).width() >= 720) {
        constructSlider();
        name();
        google.maps.event.addDomListener(window, 'load', initialize);
    }

    $(window).resize(function() {
        if (w != $(window).width()) {

            if($(window).width() <= 719) {
                $("#images-slider").slick();
                peopleToggle();
            } else {
                constructSlider();
                name();
                google.maps.event.addDomListener(window, 'load', initialize);
            }

            w = $(window).width();
            delete w;
        }
    });

    //$('article#aboutus .bottomSlick #story .text .rotate, article#aboutus .bottomSlick #career .text .rotate').niceScroll();
    
    $('#openMenu').click(function (){
        $('#menuMobile').slideToggle();
    });
    
    $('.one .position span').click(function(){
        
        if(!$(this).parent().find('.hidden').hasClass('otevreno')) {
            $('#aboutus .one .position .hidden').slideUp().removeClass('otevreno');
            $(this).parent().find('.hidden').slideDown().addClass('otevreno');
        } else {
            $('#aboutus .one .position .hidden').slideUp().removeClass('otevreno');
        }
    });
    
    if($('#reference .bottom .slide').length === 0) {
        $('#reference').remove();
    }
    
    $('.topSlick .control li').on('click',function(){
        
        $('#aboutus .topSlick .control li').removeClass('active');
        $(this).addClass('active');
        
        var id = $(this).attr('data-id');
        
        $('#aboutus .topSlick .title h2').hide();
        $('#aboutus .topSlick .title h2.'+id).show();
        $('#aboutus .bottomSlick .one').hide();
        $('#aboutus .bottomSlick .one#'+id).show();
    });
    
    
    $('#people .slide .gallery li').click(function(){
        var id = $(this).attr('data-id');
        $('#people .slick-dots li:nth-of-type('+id+') button').trigger('click');
    });
    
    $('.wpcf7-form br').remove();
    
    $('#reference .bottom .nextprev .prev').click(function(){
        $('#reference .bottom .arrow.prev.ref').trigger('click');
    });
    
    $('#reference .bottom .nextprev .next').click(function(){
        $('#reference .bottom .arrow.next.ref').trigger('click');
    });
    
    $('input[type="number"]').each(function(){
        $(this).parent().prepend('<a class="up" data-id="up"  onclick="updateSpinner(this);"></a>');
        $(this).parent().append('<a class="down" data-id="down" onclick="updateSpinner(this);"></a>');
    });
    
    $('.order').click(function (){
        $('#order').show();
        $('#cover').show();
        
        if($(window).width()<720) {
            $('html, body').scrollTop(0);
        }
    });
    
    $('#cover, #closeOrder').click(function (){
        $('#order').hide();
        $('#cover').hide();
    });
    
    $('#order input[type=submit]').click(function(){
        setTimeout(function(){
            if($('#order form').hasClass('sent')) {
                $('#closeOrder').trigger('click');
            }
        }, 3000);
    });

    // Menu controller
    
    $('#menu-prvni-menu li:nth-child(2) .sub-menu li:first-child a').click(function(){
        if($('body').hasClass('home')) {
            $('html, body').stop().animate({
                'scrollTop': $('#onas').offset().top
            }, 900, 'swing',function (){
                $('#aboutus .control li:first-child').trigger('click');
            });
        } else {
            window.location.href = window.location.protocol + "//" + window.location.host + "/"+"?link=1";
        } 
    });
    
    if (window.location.href.indexOf("?link=1") > -1) {
        $('html, body').scrollTop($('#onas').offset().top);
         setTimeout(function(){
             $('#aboutus .control li:nth-child(1)').trigger('click');
         },2010);
    }
    
    $('#menu-prvni-menu li:nth-child(2) .sub-menu li:nth-child(2) a, #lide').on('click',function(e){
        e.preventDefault();
        if($('body').hasClass('home')) {
            if($(window).width()>=720) {
                $('html, body').stop().animate({
                    'scrollTop': $('#onas').offset().top
                }, 900, 'swing',function (){
                    $('#aboutus .control li:nth-child(2)').trigger('click');
                });
            } else {
                $('html, body').scrollTop($('#peoplea').offset().top);                
            }
        } else {
            window.location.href = window.location.protocol + "//" + window.location.host + "/"+"?link=2";
        } 
    });
    
    if (window.location.href.indexOf("?link=2") > -1) {
        if($(window).width()>=720) {
            $('html, body').scrollTop($('#onas').offset().top);
            setTimeout(function(){
                $('#aboutus .control li:nth-child(2)').trigger('click');
            }, 2010);
        } else {
             $('html, body').scrollTop($('#peoplea').offset().top);
        }
    }

    $('#menu-prvni-menu li:nth-child(2) .sub-menu li:nth-child(3) a').click(function(){
        if($('body').hasClass('home')) {
            $('html, body').stop().animate({
                'scrollTop': $('#onas').offset().top
            }, 900, 'swing',function (){
                $('#aboutus .control li:nth-child(3)').trigger('click');
            });
        } else {
            window.location.href = window.location.protocol + "//" + window.location.host + "/"+"?link=3";
        } 
    });
    
    if (window.location.href.indexOf("?link=3") > -1) {
        $('html, body').scrollTop($('#onas').offset().top);
        setTimeout(function(){
            $('#aboutus .control li:nth-child(3)').trigger('click');
        }, 2010);
    }
});