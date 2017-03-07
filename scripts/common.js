// Ready
$(function () {
  
  // Story Page
  var h = $('#story').height() - 80;
  $('head').append('<style>.mdl-demo .story-header .story-header-circle:after { height: '+ h +'px; } </style>');

  // Story Menu
  function floatMenu(){
    var storyHeader = $('#story-header');
    // スクロール位置がメニューのtop座標を超えたら固定にする
    if ($('.mdl-layout__tab-bar').offset().top + 72 > $('#story').offset().top + 100) {
        storyHeader.addClass('is-fixed');
    }
    else {
        storyHeader.removeClass('is-fixed');
    }
  };
  $('.mdl-layout__content').scroll(floatMenu);
  $('.mdl-layout').bind('touchmove', floatMenu);

  // Map
  $('#access-tab').one('click', function(){
    initMap();
  });

  // Swipebox
  $('.swipebox').swipebox( {
    useCSS : true, // false will force the use of jQuery for animations
    useSVG : true, // false to force the use of png for buttons
    initialIndexOnArray : 0, // which image index to init when a array is passed
    hideCloseButtonOnMobile : false, // true will hide the close button on mobile devices
    removeBarsOnMobile : true, // false will show top bar on mobile devices
    hideBarsDelay : 3000, // delay before hiding bars on desktop
    videoMaxWidth : 1140, // videos max width
    beforeOpen: function() {}, // called before opening
    afterOpen: null, // called after opening
    afterClose: function() {}, // called after closing
    loopAtEnd: false // true will return to the first image after the last image is reached
  } );
  
});


// GoogleMap initialize
function initMap() {
  var dst = new google.maps.LatLng(35.6904846, 139.7817518);

  var map = new google.maps.Map(document.getElementById('map'), {
    center: dst,
    scrollwheel: true,
    zoom: 17
  });

  var marker = new google.maps.Marker({
    position: dst,
    map: map,
    title: '東京アフロディテ'
  });
}