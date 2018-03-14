

/* Open */
function openNav() {
    "use strict";
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    "use strict";
    document.getElementById("myNav").style.height = "0%";
}

    var current_time = 0;
    var my_video = $("#about_video");
    var vers1 = $("#vers1");
    var vers2 = $("#vers2");
    var vers3 = $("#vers3");
    var vers4 = $("#vers4");
    var omkvade = $("#omkvade");

    var allAsides = $("aside");

    my_video.on("timeupdate", function () {

        current_time = my_video[0].currentTime;

        if(current_time < 8.75){
            allAsides.hide();
            vers1.show();

        }

        if(current_time > 47){
            allAsides.hide();
            vers2.show();

        }

        if(current_time > 69){
            allAsides.hide();
            omkvade.show();

        }

        if(current_time > 84){
            allAsides.hide();
            vers3.show();

        }

        if(current_time > 105){
            allAsides.hide();
            vers4.show();

        }

        if(current_time > 126){
            allAsides.hide();

        }

        if(current_time > 149){
            allAsides.hide();
            omkvade.show();

        }

    });
    
