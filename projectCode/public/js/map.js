$(document).ready(function() {
  console.log("map.js connected");
  var mapOptions = {
    center: new google.maps.LatLng(39.755872, -104.994172),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var markerOptions = {
    position: new google.maps.LatLng(39.755872, -104.994172)
  };
  var marker = new google.maps.Marker(markerOptions);
  marker.setMap(map);

  var infoWindowOptions = {
    content: 'ROCKIES!'
  };

  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
  google.maps.event.addListener(marker, 'click', function(e) {

    infoWindow.open(map, marker);

  });


});
