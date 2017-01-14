jQuery(document).ready(function ($) {
   
    function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var myLatlng = new google.maps.LatLng(50.076638, 14.510277);
        var center = new google.maps.LatLng(50.076344, 14.498112);
        var mapOptions = {
          center: center,
          scrollwheel: false,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var image = {
            url:  site_url+'/wp-content/themes/theme/images/marker.png',
            //origin: new google.maps.Point(-108, 0),
            anchor: new google.maps.Point(25, 50),
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: image,
            title: 'Pairam Solution s.r.o.'
        });
      }

if ( $(window).width() > 720) {
 google.maps.event.addDomListener(window, 'load', initialize);
}   
    
});