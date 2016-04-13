$(document).ready(function () {
    // Progressive enhancement
    $("#skills .list-block").removeAttr("hidden");
    $("#skills .results").attr("class", "column xs-14 offset-xs-1 sm-8 offset-sm-4 md-6 offset-md-2 lg-5 offset-lg-2 xl-4 offset-xl-2 font-lato results").css("overflow-x", "hidden");
    $("#skills .results li").hide().css("opacity", "0");

    // List click shows connected element in result box
    $("#skills .list-block li").on("click", function showResult() {
        // Cancel if already active
        if($(this).hasClass("active"))
            return true;

        // Deactivate all elements in list
        $("#skills .list-block li").removeClass("active");
        
        // Activate clicked element in list
        $(this).addClass("active");

        // Save index of result
        var index = $(this).index();

        // Hide all results
        $("#skills .results li").css("opacity", "0").on("transitionend webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd", function hidden(event) {
            $(this).off(event);
            $(this).hide();

            // Show associated element
            $("#skills .results").children().eq(index).show().css("opacity", "1");
        });
    });

    // Activate the first element
    $("#skills .list-block li").eq(0).addClass("active");
    $("#skills .results li").eq(0).show().css("opacity", "1");
});