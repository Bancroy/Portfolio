"use strict";

function blockScroll() {
    return false;
}

$(document).ready(function stickyNav() {
    var nav = $("nav");
    var nav_breakpoint = nav.offset().top + nav.height();

    nav.find("a").on("click", function smoothAnchorScroll() {
        var nav_links = $("nav li a");
        $(document).on("mousewheel DOMMouseScroll", blockScroll);
        nav_links.css("pointer-events", "none");

        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000, function unblock() {
            $(document).off("mousewheel DOMMouseScroll", blockScroll);
            nav_links.css("pointer-events", "all");
        });

        return false;
    });

    $(document).on("scroll", function checkNav() {
        if($(document).scrollTop() >= nav_breakpoint)
            nav.addClass("sticky");
        else
            nav.removeClass("sticky");
    });
});