$(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 120) {
        $("#bar").css("backgroundColor", "black");
      } else if ($(window).scrollTop() > 20){
        $("#bar").css("backgroundColor", "#181818");
      }
      else {
        $("#bar").css("backgroundColor", "transparent");
      }
    });
  });