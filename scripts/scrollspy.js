"use strict";

$(document).ready(function scrollspy() {
    // Get sections
    var sections = $(".content-section");

    // Highlight most visible section
    $(document).on("scroll", function scrollspyHighlight() {
        // Prepare array for ordered visible heights of sections
        var sections_visible_height = [];

        for(var i = 0 ; i < sections.length ; i++) {
            var visible_height;

            // Count visible height
            if($(document).scrollTop() <= sections.eq(i).offset().top)
                visible_height = $(document).scrollTop() + $(window).height() - sections.eq(i).offset().top;
            else
                visible_height = sections.eq(i).offset().top + sections.eq(i).height() - $(document).scrollTop();
            if(visible_height < 0)
                visible_height = 0;

            // Save visible height
            sections_visible_height.push(visible_height);
        }

        // Find the most visible section index
        var most_visible = sections_visible_height.indexOf(Math.max.apply(Math, sections_visible_height));

        // Reset all anchors and highlight anchor of most visible section
        $("nav ul").find("a").removeClass("active");
        $("nav ul").find("a").eq(most_visible).addClass("active");

        // Set address hash
        var hash = sections.eq(most_visible).attr("id");
        if(history.pushState)
            history.pushState(null, null, "#" + hash);
        else
            location.hash = "#" + hash;
    }).trigger("scroll");
});