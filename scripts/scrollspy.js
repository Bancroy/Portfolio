"use strict";

$(document).ready(function scrollspy() {
    var sections = $(".content-section");

    $(document).on("scroll", function scrollspyHighlight() {
        var sections_visible_height = [];

        for(var i = 0 ; i < sections.length ; i++) {
            var visible_height;
            if($(document).scrollTop() <= sections.eq(i).offset().top)
                visible_height = $(document).scrollTop() + $(window).height() - sections.eq(i).offset().top;
            else
                visible_height = sections.eq(i).offset().top + sections.eq(i).height() - $(document).scrollTop();
            if(visible_height < 0)
                visible_height = 0;

            sections_visible_height.push(visible_height);
        }

        var most_visible = sections_visible_height.indexOf(Math.max.apply(Math, sections_visible_height));
        $("nav ul").find("a").removeClass("active");
        $("nav ul").find("a").eq(most_visible).addClass("active");

        var hash = sections.eq(most_visible).attr("id");
        if(history.pushState)
            history.pushState(null, null, "#" + hash);
        else
            location.hash = "#" + hash;
    }).trigger("scroll");
});