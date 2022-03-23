$(document).ready(function () {
    $("#video").css("display", "none"); //HIDE THE VIDEO INITIALLY
    $(".thumbnail").hover(function () 
            {
            $(".cover-img").css("display", "none");
            $("#video").css("display", "block"); //SHOW THE VIDEO ON HOVER
            $(this).children("video")[0].play();
            }, 

    function () {
        var el = $(this).children("video")[0];
        el.pause();
        $("#video").css("display", "none");
        $(".cover-img").css("display", "block");
    });
});