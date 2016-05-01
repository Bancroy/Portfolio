"use strict";

$(document).ready(function technologiesList() {
    function whichTransitionEvent() {
        var t;
        var el = document.createElement("fakeelement");
        var transitions = {
          transition: "transitionend",
          OTransition: "oTransitionEnd",
          MozTransition: "transitionend",
          WebkitTransition: "webkitTransitionEnd"
        };

        for(t in transitions){
            if(el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }

    $("#skills .list-block").removeAttr("hidden");
    $("#skills .results").attr("class", "column xs-14 offset-xs-1 sm-8 offset-sm-4 md-6 offset-md-2 lg-5 offset-lg-2 xl-4 offset-xl-2 font-lato results").css("overflow-x", "hidden");
    $("#skills .results li").hide().css("opacity", "0");

    $("#skills .list li").on("click", function showResult() {
        if($(this).hasClass("active"))
            return true;

        $("#skills .list-block li").removeClass("active");

        $(this).addClass("active");

        var index = $(this).index();

        $("#skills .results li.active").css("opacity", "0").on(whichTransitionEvent(), function hidden(event) {
            $(this).off(event);
            $(this).hide().removeClass("active");

            $("#skills .results").children().eq(index).show().css("opacity", "1").addClass("active");
        });
    });

    $("#skills .list-block li").eq(0).addClass("active");
    $("#skills .results li").eq(0).show().css("opacity", "1").addClass("active");
});