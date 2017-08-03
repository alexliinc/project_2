// Document has to be ready
$(document).ready(function() {
  console.log('app.js loaded!');
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
});
