$(document).ready(function() {
  console.log("player.js connected");

  $.ajax({
    method: 'GET',
    url: '/players/showAllPlayers',
    dataType: 'json',
    success: handleSuccess,
    error: handleError
  });

  $('form').on('submit', function(e) {
    e.preventDefault();

    let formData = $(this).serialize();
    //console.log(formData);
    //console.log("clicked");
    $(this).trigger("reset");

    $.ajax({
      method: 'POST',
      url: '/players',
      dataType: 'json',
      data: formData,
      success: newPlayerSuccess,
      error: newPlayerError
    });
  });

  $('#players').on('click', '.deleteBtn', function(e) {
    console.log($(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/players/' + $(this).attr('data-id'),
      success: deleteSuccess,
      error: deleteError
    });
  });

});

function deleteSuccess(data) {
  console.log("deleted");
  var removedOldPlayer = $('div').find("[data-player-id=" + data._id + "]");
  console.log(removedOldPlayer);
  removedOldPlayer.remove();
}

function deleteError(data) {
  console.log('Delete player error!!');
}

function newPlayerSuccess(data) {
  console.log(data);
  renderPlayer(data);
  //$(this).trigger("reset");
}

function newPlayerError(err) {
  console.log('new Player error!!');
  console.log(err)
}

function handleSuccess(data) {
  data.forEach(function(value) {
    renderPlayer(value);
  });
}

function handleError(data) {
  console.log('GET ALL player error!!');
}

// this function takes a single player and renders it to the page
function renderPlayer(player) {
  //console.log('rendering player:', player);

  var playerHtml =
    "        <!-- one player -->" +
    "        <div class='row player' data-player-id='" + player._id + "'>" +
    "          <div class='col-md-10 col-md-offset-1'>" +
    "            <div class='panel panel-default'>" +
    "              <div id='playerTarget' class='panel-body'>" +
    "              <!-- begin player internal row -->" +
    "                  <div class='col-md-9 col-xs-12'>" +
    "                    <ul class='list-group'>" +
    "                      <li class='list-group-item'>" +
    "                        <h4 class='inline-header'>Player Name:</h4>" +
    "                        <span class='player-name'>" + player.name + "</span>" +
    "                      </li>" +
    "                      <li class='list-group-item'>" +
    "                        <h4 class='inline-header'>Player age:</h4>" +
    "                        <span class='artist-name'>" + player.age + "</span>" +
    "                      </li>" +
    "                    </ul>" +
    "                  </div>" +
    "                <input data-id='" + player._id + "' id='playerDeleteButton' type='button' class='deleteBtn btn btn-danger pull-right' value='Delete Player'></input>" +
    "                <input data-id='" + player._id + "' id='playerDeleteButton' type='button' class='btn btn-default pull-right' value='Update Player'></input>" +
    "                </div>" +
    "                <!-- end of player internal row -->" +

    "              </div>" + // end of panel-body
    "            </div>" +
    "          </div>" +
    "          <!-- end one player -->";

  // render to the page with jQuery
  $('#players').append(playerHtml);

}
