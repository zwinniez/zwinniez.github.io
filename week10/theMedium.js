
let r = document.getElementById("red");
let g = document.getElementById("green");
let b = document.getElementById("blue");
let theBody = document.querySelector("body");

var randomColor = Math.floor(Math.random()*16777215).toString(16);


r.addEventListener('click', redButton);
// green.addEventListener("click", greenButton);
// blue.addEventListener("click", blueButton);

function redButton(){
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    
    r.style.backgroundColor = randomColor;
    console.log(randomColor);
}


