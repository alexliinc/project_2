// Document has to be ready
$(document).ready(function() {
  console.log('app.js loaded!');
  $('form').on('submit', function(e) {
    e.preventDefault();

    let formData = $(this).serialize();
    console.log(formData);
    console.log("clicked");
    $(this).trigger("reset");

    $.ajax({
      method: 'POST',
      url: '/players',
      dataType: 'json',
      data: formData,
      success: newAlbumSuccess,
      error: newAlbumError
    });
  });

});
