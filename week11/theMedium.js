// ghost img 
let ghost = document.getElementById('ghost');
let ghost_img = document.getElementById("ghost_img");

//text
let textbox = document.getElementById('textbox');

//status img 
let status_img = document.getElementById("status_img");
var statusCounter = 0;
//0-4 sad, 5-9 yellow, 10-14 green, 15-19 green green

//game background 
let game_container = document.getElementById("game_container");
var isDaytime = false;

//action buttons 
let love = document.getElementById("love");
let chat = document.getElementById("chat");
let music = document.getElementById("music");
let clock = document.getElementById("clock");

//body 
let theBody = document.querySelector('body');

/////////////////////////////////////////////////////////////////

function upStatus() {
    statusCounter = statusCounter + 1;

    if (0 <= statusCounter && statusCounter <= 4) {
        $(status_img).attr("src", "assets/redbar.PNG");

    } else if (5 <= statusCounter && statusCounter <= 9) {
        $(status_img).attr("src", "assets/yellowbar.PNG");
        $(textbox).html("Boo &nbsp;&nbsp;wants &nbsp;&nbsp;to &nbsp;&nbsp;play &nbsp;&nbsp;more!");

    } else if (10 <= statusCounter && statusCounter <= 14) {
        $(status_img).attr("src", "assets/greenbar.PNG");
        $(textbox).html("Boo &nbsp;&nbsp;is &nbsp;&nbsp;feeling &nbsp;&nbsp;happy!");

    } else {
        $(status_img).attr("src", "assets/2greenbar.PNG");
        $(textbox).html("Boo &nbsp;&nbsp;loves &nbsp;&nbsp;your &nbsp;&nbsp;company!");

    } 
};

function resetStatus() {
    statusCounter = 0;
};

$(document).ready(function() {
    $(love).click(function() {
        $(ghost_img).attr("src", "assets/heartboo.PNG");
        upStatus();
    });
    
});

$(document).ready(function() {
    $(chat).click(function() {
        $(ghost_img).attr("src", "assets/chatboo.PNG");
        upStatus();
    });
    
});

const audio = new Audio("assets/ES_Sunshine Song - The Waiting World.mp3");

$(document).ready(function() {
    $(music).click(function() {
        $(ghost_img).attr("src", "assets/danceboo.PNG");

        // play or pause music by clicking on music
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }

        upStatus();
    });
    
});

// reset ghost to normal 
$(document).ready(function() {
    $(ghost_img).click(function() {
        $(ghost_img).attr("src", "assets/normalboo.PNG");
       
        resetStatus();
    });
});

// click clock to switch day/night background
$(document).ready(function() {
    $(clock).click(function() {
        if (isDaytime) {
            $(game_container).css({"background-image": "url('assets/night.PNG')"});
            isDaytime = false;
        } else {
            $(game_container).css({"background-image": "url('assets/day.PNG')"});
            isDaytime = true;
        }
    });
});

