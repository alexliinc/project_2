// Document has to be ready
$(document).ready(function() {
  console.log('favoriting.js loaded!');
  // Moving list items
  function moveItems(origin, dest) {
    $(origin).find(':selected').appendTo(dest);
  }
  $('#left').click(function() {
    moveItems('#visitedStadiums', '#allStadiums');
  });
  $('#right').on('click', function() {
    moveItems('#allStadiums', '#visitedStadiums');
  });

  // Getting all stadiums
  $.ajax({
    method: 'GET',
    url: '/api/stadiums',
    dataType: 'json',
    success: handleGetAllSuccess,
    error: handleGetAllError
  });

  // Getting users fav stadiums
  $.ajax({
    method: 'GET',
    url: '/api/stadiums',
    dataType: 'json',
    success: handleGetUserSuccess,
    error: handleGetUserError
  });
});

function handleGetUserSuccess(data) {
  data.forEach(function(value) {
    renderStadium(value);
  });
}

function handleGetUserError(data) {
  console.log('GET ALL stadiums error!!');
}

function handleGetAllSuccess(data) {
  data.forEach(function(value) {
    renderStadium(value);
  });
}

function handleGetAllError(data) {
  console.log('GET ALL stadiums error!!');
}

// this function takes a single stadium and renders it to the page
function renderStadium(stadium) {
  var stadiumHtml =
    "        <!-- one stadium -->" +
    "  <option>" + stadium.title + "</option>" +
    "        <!-- end one stadium -->";

  // render to the page with jQuery
  $('#allStadiums').append(stadiumHtml);
}
