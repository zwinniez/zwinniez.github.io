// ghost img 
let ghost = document.getElementById('ghost');
let ghost_run = document.getElementById('ghost_run');
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

//audio media
const musicAudio = new Audio("assets/ES_Sunshine Song - The Waiting World.mp3");
musicAudio.volume = 0.2;
const statusAudio = new Audio("assets/statusbarUP.mp3");
const booTalksAudio = new Audio("assets/bootalks.mp3");
const heartAudio = new Audio("assets/heart.mp3");

//ghost name
//var ghost_name = 'MeiNa';

/////////////////////////////////////////////////////////////////

function upStatus() {
    statusCounter = statusCounter + 1;
    let ghost_name = sessionStorage.getItem("ghost_name");
    if (statusCounter == 0 || statusCounter == 5 || statusCounter == 10 || statusCounter == 15) {
        statusAudio.play();
    }
    if (0 <= statusCounter && statusCounter <= 4) {
        $(status_img).attr("src", "assets/redbar.PNG");
        $(textbox).html(ghost_name + "'s &nbsp;&nbsp;feeling &nbsp;&nbsp;lonely.");

    } else if (5 <= statusCounter && statusCounter <= 9) {
        $(status_img).attr("src", "assets/yellowbar.PNG");
        $(textbox).html(ghost_name + "&nbsp;&nbsp;wants &nbsp;&nbsp;to &nbsp;&nbsp;play &nbsp;&nbsp;more!");
        //setInterval(resetStatus, 5000);

    } else if (10 <= statusCounter && statusCounter <= 14) {     
        $(status_img).attr("src", "assets/greenbar.PNG");
        $(textbox).html(ghost_name + "&nbsp;&nbsp;is &nbsp;&nbsp;feeling &nbsp;&nbsp;happy!");
        //setInterval(resetStatus, 5000);

    } else {       
        $(status_img).attr("src", "assets/2greenbar.PNG");
        $(textbox).html(ghost_name + " &nbsp;&nbsp;loves &nbsp;&nbsp;your &nbsp;&nbsp;company!");
        //setInterval(resetStatus, 5000);
    } 
};

function resetStatus() {
    statusCounter = 0;
    let ghost_name = sessionStorage.getItem("ghost_name");
    if (statusCounter == 0) {
        $(textbox).html("You&nbsp;&nbsp; can't&nbsp;&nbsp;touch &nbsp;&nbsp;" + ghost_name + "!");
        $(status_img).attr("src", "assets/redbar.PNG");
    }
    //stop da music
    if(musicAudio.played) {
        musicAudio.pause();
    }
};

//timer to reset status bar 
statusInterval = setInterval(statusDown, 5000);
function statusDown() {
    statusCounter - 5;
}

//button functions 
$(document).ready(function() {
    $(love).click(function() {
        $(ghost_img).attr("src", "assets/heartboo.PNG");
        heartAudio.play();
        clearInterval(statusInterval);
        upStatus();
        //setInterval(statusDown, 5000);
    });
    
});

$(document).ready(function() {
    $(chat).click(function() {
        $(ghost_img).attr("src", "assets/chatboo.PNG");
        booTalksAudio.play();
        clearInterval(statusInterval);
        upStatus();
        //setInterval(statusDown, 5000);
    });
    
});

$(document).ready(function() {
    $(music).click(function() {
        $(ghost_img).attr("src", "assets/danceboo.PNG");

        // play or pause music by clicking on music
        if (musicAudio.paused) {
            musicAudio.play();
        } else {
            musicAudio.pause();
        }

        //move back and forth

        clearInterval(statusInterval);
        upStatus();
        //setInterval(statusDown, 5000);
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


//user name input 
let submit_name = document.getElementById("name_form_submit");

$(document).ready(function() {
    $("#nameForm").submit(function() {

        var ghost_name = $("#ghost_name").val();
        alert(ghost_name);
        sessionStorage.setItem("ghost_name", ghost_name);
    })
})

$(document).ready(function() {
    $(submit_name).click(function(){
        window.location.href = "main.html";
    })
})