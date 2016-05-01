"use strict";

$(document).ready(function parallax() {
    var sections = ["home", "skills"];

    for(var i = 0 ; i < sections.length ; i++)
        $("#" + sections[i]).css("background", "none").parallax({
            imageSrc: "/images/backgrounds/" + sections[i] + ".png",
            overScrollFix: true
        });
});