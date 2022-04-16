// ghost img 
let ghost = document.getElementById('ghost');
let ghost_img = document.getElementById("ghost_img");

//status img 
let status = document.getElementById('status_bar');

//text
let text = document.getElementById('text');

//action buttons 
let love = document.getElementById("love");
let chat = document.getElementById("chat");
let music = document.getElementById("music");

//body 
let theBody = document.querySelector('body');

$(document).ready(function() {
    $(love).click(function() {
        $(ghost_img).attr("src", "assets/heartboo.PNG");
    });
});

$(document).ready(function() {
    $(chat).click(function() {
        $(ghost_img).attr("src", "assets/chatboo.PNG");
    });
});

$(document).ready(function() {
    $(music).click(function() {
        $(ghost_img).attr("src", "assets/danceboo.PNG");
    });
});

