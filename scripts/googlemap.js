function initMap() {
    var afrodite = {lat: 35.6904846, lng: 139.7817518};
    var position = {lat: 35.6848775, lng: 139.7817518}

    var map = new google.maps.Map(document.getElementById('map'), {
      center: position,
      scrollwheel: true,
      zoom: 17
    });

    var marker = new google.maps.Marker({
    position: afrodite,
    map: map,
    title: '東京アフロディテ'
  });
}