$(document).ready(function() {
    $("#cv").on("click", function () {
        $("#wrapper").fadeOut(600, function () {
            $("canvas").css("opacity", "0.1");
            $(".content").fadeIn();
        });
    });
    $(".close").on("click", function () {
        $(".content").fadeOut(600, function () {
            $("#wrapper").css("display", "block");
            $("canvas").css("opacity", "1");
        });
    })
});