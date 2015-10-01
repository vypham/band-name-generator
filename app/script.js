$(function() {
  $("button").click(function() {
    //$("#adjective").text(“hello, world”);
    $.get('adjective', function(response) {
        var adjective = response.word;
        $("#adjective").text(adjective);
      });
  });
});
