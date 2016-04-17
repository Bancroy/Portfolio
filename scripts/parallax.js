"use strict";

$(document).ready(function parallax() {
    // Set section names
    var sections = ["home", "skills"];

    // Apply parallax as progressive enhancement
    for(var i = 0 ; i < sections.length ; i++)
        $("#" + sections[i]).css("background", "none").parallax({
            imageSrc: "/images/backgrounds/" + sections[i] + ".png",
            overScrollFix: true
        });
});