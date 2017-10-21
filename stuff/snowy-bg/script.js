/* - JUST FOR ME - */
$(document).ready(function() {

  $("body").addClass("loop");

  setTimeout(
    function() 
    {
      $("loader").hide();
      $("body").css("background-position", "0% 13%");
  }, 5000);

  $("#fast").click(function() {
    $("loop").css("animation", "looper 3s infinite");
  });

  $("#slow").click(function() {
    $("loop").css("animation", "looper 8s infinite");
  });

  $("#cosy").click(function() {
    $("#cosy-cover").css("opacity", "0.5");
  });

});