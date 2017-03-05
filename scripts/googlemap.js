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

  google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
    //真ん中に位置修正
    var latlngBounds = map.getBounds();
    var northLat = latlngBounds.getNorthEast().lat();
    var southLat = latlngBounds.getSouthWest().lat();
    
    var fixLatlng = new google.maps.LatLng(southLat + (northLat - southLat) * 0.12, dst.lng());
    var fix = map.setCenter(fixLatlng);
  });
  
}