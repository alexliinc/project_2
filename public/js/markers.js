$(document).ready(function() {
  console.log("maker.js connected");

  // Getting all visited stadiums
  $.ajax({
    method: 'GET',
    url: '/userProfile/vistedStadium',
    dataType: 'json',
    success: markerSuccess,
    error: markerFailed
  });

});


// Getting all stadiums
// ------------------------------------------------------------
function markerSuccess(data) {
  var mapOpts = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: true,
    scrollwheel: false
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOpts);
  var infoWindow = new google.maps.InfoWindow();
  var markerBounds = new google.maps.LatLngBounds();
  var markerArray = [];

  function makeMarker(a) {
    var b = new google.maps.Marker({
      map: map
    });
    b.setOptions(a);
    google.maps.event.addListener(b, "click", function() {
      infoWindow.setOptions(a);
      infoWindow.open(map, b);
    });
    var c = b.getIcon();

    markerBounds.extend(a.position);
    markerArray.push(b);
    return b
  }
  google.maps.event.addListener(map, "click", function() {
    infoWindow.close()
  });

  $.each(data, function(index, item) {
    console.log("new Marker: " + index);
    makeMarker({
      position: new google.maps.LatLng(item.position[0], item.position[1]),
      title: item.title,
      content: item.title
    });
  });

  google.maps.event.addListener(map, "zoom_changed", function() {
    zoomChangeBoundsListener = google.maps.event.addListener(map, "bounds_changed", function(a) {
      if (this.getZoom() > 9 && this.initialZoom == true) {
        this.setZoom(9);
        this.initialZoom = false
      }
      google.maps.event.removeListener(zoomChangeBoundsListener)
    })
  });
  map.initialZoom = true;
  map.fitBounds(markerBounds);

}

function markerFailed(data) {
  console.log('GET ALL stadiums error!!');
}
