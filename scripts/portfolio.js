"use strict";

$(document).ready(function portfolio() {
    $("#portfolio .omnibox-fallback").remove();
    $("#portfolio .reload").show();

    $("#portfolio .omnibox").chosen({ width: "100%" }).on("change", function updateIframe(event, params) {
        $("#portfolio iframe").attr("src", "http://" + params.selected);
    });

    $("#portfolio .addressbar .chosen-single").prepend(
        "<img class='plus' src='/images/other/portfolio-plus.png' alt='Plus'>" + 
        "<img class='separator' src='/images/other/portfolio-separator.png' alt='Separator'>");

    $("#portfolio .addressbar .reload").on("click touch", function reloadBrowser(event) {
        event.stopPropagation();
        event.preventDefault();

        $("#portfolio iframe").attr("src", $("#portfolio iframe").attr("src"));
        $("#portfolio .omnibox").trigger("chosen:close");
    });
});