$(function() {
  $('button').on('click', function() {
    $.get("/adjective", function(response) { 
      $('span').html(response.word);
    });
  })
});