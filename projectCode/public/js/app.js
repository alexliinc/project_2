// Document has to be ready
$(document).ready(function() {
  //console.log('app.js loaded!');
  // Moving list items

  function moveItems(origin, dest) {
    $(origin).find(':selected').appendTo(dest);
  }

  $('#left').click(function() {
    moveItems('#sbTwo', '#sbOne');
  });

  $('#right').on('click', function() {
    moveItems('#sbOne', '#sbTwo');
  });


  // Getting all stadiums
  $.ajax({
    method: 'GET',
    url: '/api/stadiums',
    dataType: 'json',
    success: handleSuccess,
    error: handleError
  });
});

function handleSuccess(data) {
  data.forEach(function(value) {
    renderStadium(value);
  });
}

function handleError(data) {
  console.log('GET ALL stadiums error!!');
}

// this function takes a single stadium and renders it to the page
function renderStadium(stadium) {
  var stadiumHtml =
    "        <!-- one stadium -->" +
    "        <div class='row'>" +
    "          <div class='col-md-10 col-md-offset-1'>" +
    "            <div class='panel panel-default'>" +
    "              <div class='panel-body'>" +
    "              <!-- begin stadium internal row -->" +
    "                <div class='row'>" +
    "                  <div class='col-md-3 col-xs-12 thumbnail stadium-art'>" +
    "                     <img src='" + "http://placehold.it/400x400'" + " alt='stadium image'>" +
    "                  </div>" +
    "                  <div class='col-md-9 col-xs-12'>" +
    "                    <ul class='list-group'>" +
    "                      <li class='list-group-item'>" +
    "                        <h4 class='inline-header'>stadium Name:</h4>" +
    "                        <span class='stadium-name'>" + stadium.title + "</span>" +
    "                      </li>" +
    "                    </ul>" +
    "                  </div>" +
    "                </div>" +
    "                <!-- end of stadium internal row -->" +
    "              </div>" + // end of panel-body
    "            </div>" +
    "          </div>" +
    "          <!-- end one stadium -->";

  // render to the page with jQuery
  $('#stadiums').append(stadiumHtml);
}
