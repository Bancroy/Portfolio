"use strict";

$(document).ready(function stickyNav() {
    // Cancel scroll event on call
    function blockScroll() {
        return false;
    }

    // Get navigation components and save initial offset with height
    var nav = $("nav");
    var nav_breakpoint = nav.height() + parseInt(nav.css("top"));
    var nav_links = nav.find("a");
    var mobile_menu = nav.find(".mobile-menu");

    // Override anchor click behavior
    nav_links.on("click", function smoothAnchorScroll() {
        // Block mouse wheel scrolling and hover event
        $(document).on("mousewheel DOMMouseScroll", blockScroll);
        nav_links.css("pointer-events", "none");

        // Smoothly scroll document to anchor
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000, function unblock() {
            // Unblock mouse wheel scrolling and hover event
            $(document).off("mousewheel DOMMouseScroll", blockScroll);
            nav_links.css("pointer-events", "all");
        });

        // Cancel default events
        return false;
    });

    // Stick navigation when passing initial offset with height
    $(document).on("scroll", function checkNav() {
        if($(document).scrollTop() >= nav_breakpoint)
            nav.addClass("sticky");
        else
            nav.removeClass("sticky");
    }).trigger("scroll");

    // Show menu when clicking mobile button
    mobile_menu.on("click", function toggleMobileMenu() {
        $(this).toggleClass("active");
    });

    // Hide menu after clicking an anchor
    nav.find("a").on("click", function hideMobileMenu() {
        mobile_menu.toggleClass("active");
    });
});