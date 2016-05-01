"use strict";

$(document).ready(function timeline() {
    // Progressive enhancement
    $(".timeline li article").css({
        opacity: "0",
        position: "relative"
    });
    $(".timeline li:odd article").css("left", "-100px");
    $(".timeline li:even article").css("left", "100px");

    // Slide in on checkpoint
    $(document).on("scroll", function checkTimeline() {
        $(".timeline li article").each(function check() {
            if($(this).offset().top <= $(document).scrollTop() + $(window).height() / 1.5)
                $(this).css({
                    left: "0",
                    opacity: "1"
                });
        });
    }).trigger("scroll");
});