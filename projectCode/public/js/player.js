$(document).ready(function() {
  console.log("player.js connected");
  $.ajax({
    method: 'GET',
    url: '/players/showAllPlayers',
    dataType: 'json',
    success: handleSuccess,
    error: handleError
  });
});


function handleSuccess(data) {
  data.forEach(function(value) {
    renderAlbum(value);
  });
}

function handleError(data) {
  console.log('GET ALL album error!!');
}

// this function takes a single album and renders it to the page
function renderAlbum(album) {
  //console.log('rendering album:', album);

  var albumHtml =
    "        <!-- one album -->" +
    "        <div class='row album' data-album-id='" + album._id + "'>" +
    "          <div class='col-md-10 col-md-offset-1'>" +
    "            <div class='panel panel-default'>" +
    "              <div class='panel-body'>" +
    "              <!-- begin album internal row -->" +
    "                <div class='row'>" +
    "                  <div class='col-md-3 col-xs-12 thumbnail album-art'>" +
    "                     <img src='" + "http://placehold.it/400x400'" + " alt='album image'>" +
    "                  </div>" +
    "                  <div class='col-md-9 col-xs-12'>" +
    "                    <ul class='list-group'>" +
    "                      <li class='list-group-item'>" +
    "                        <h4 class='inline-header'>Album Name:</h4>" +
    "                        <span class='album-name'>" + album.name + "</span>" +
    "                      </li>" +
    "                      <li class='list-group-item'>" +
    "                        <h4 class='inline-header'>Artist Name:</h4>" +
    "                        <span class='artist-name'>" + album.age + "</span>" +
    "                      </li>" +
    "                    </ul>" +
    "                  </div>" +
    "                </div>" +
    "                <!-- end of album internal row -->" +

    "              </div>" + // end of panel-body

    "              <div class='panel-footer'>" +
    "                <button class='btn btn-primary add-song'>Add Song</button>" +
    "              </div>" +

    "            </div>" +
    "          </div>" +
    "          <!-- end one album -->";

  // render to the page with jQuery
  $('#players').append(albumHtml);

}
