"use strict";

$(document).ready(function stickyNav() {
    var nav = $("nav");
    var nav_breakpoint = nav.offset().top + nav.height();

    nav.find("a").on("click", function smoothAnchorScroll() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);

        return false;
    });

    $(document).on("scroll", function checkNav() {
        if($(document).scrollTop() >= nav_breakpoint)
            nav.addClass("sticky");
        else
            nav.removeClass("sticky");
    });
});