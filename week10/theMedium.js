
let r = document.getElementById('red');
let g = document.getElementById('green');
let b = document.getElementById('blue');
let theBody = document.querySelector('body');


r.addEventListener('click', redButton);
g.addEventListener("click", greenButton);
b.addEventListener('click', blueButton);

function redButton(){
    document.body.style.backgroundImage = "url('red_room.gif')";
}

function blueButton() {
    document.body.style.backgroundImage = "url('blue_room.gif')";
}

function greenButton() {
    document.body.style.backgroundImage = "url('green_room.gif')";
}