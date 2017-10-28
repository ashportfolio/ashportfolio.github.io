/* - JUST FOR ME - */
$(document).ready(function() {

  setTimeout(
    function() 
    {
      $("body").addClass("loop");
  }, 500);

  setTimeout(
    function() 
    {
      $(".loader").hide();
      $(".loader-bg").hide();
  }, 9000);

  $("#fast").click(function() {
    $(".loop").css("animation", "looper 3s infinite");
  });

  $("#slow").click(function() {
    $(".loop").css("animation", "looper 8s infinite");
  });

  $("#fsButton").click(function() {
    toggleFullScreen();
    $("body").removeClass("pos");
  });

});