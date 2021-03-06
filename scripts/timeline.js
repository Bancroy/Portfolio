"use strict";

$(document).ready(function timeline() {
    $(".timeline").addClass("progressive-enhancement");

    $(document).on("scroll", function checkTimeline() {
        $(".timeline li article").each(function check() {
            if($(this).offset().top <= $(document).scrollTop() + $(window).height() / 1.5)
                $(this).css("transform", "translate3d(0, 0, 0)").addClass("visible");
        });
    }).trigger("scroll");
});