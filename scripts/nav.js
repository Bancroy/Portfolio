"use strict";

$(document).ready(function stickyNav() {
    function blockScroll() {
        return false;
    }

    var nav = $("nav");
    var nav_breakpoint = nav.height() + parseInt(nav.css("top"));
    var nav_links = nav.find("a");
    var mobile_menu = nav.find(".mobile-menu");

    nav_links.on("click touch", function smoothAnchorScroll(event) {
        event.stopPropagation();
        event.preventDefault();

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
    }).trigger("scroll");

    mobile_menu.on("click touch", function toggleMobileMenu(event) {
        event.stopPropagation();
        event.preventDefault();

        $(this).toggleClass("active");
    });

    nav.find("a").on("click touch", function hideMobileMenu(event) {
        event.stopPropagation();
        event.preventDefault();

        mobile_menu.toggleClass("active");
    });
});