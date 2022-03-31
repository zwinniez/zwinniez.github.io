
let theButton = document.getElementById("button1");
let CButton = document.getElementById("Cbtn");
let OButton = document.getElementById("Obtn");
let DButton = document.getElementById("Dbtn");
let EButton = document.getElementById("Ebtn");
let theBody = document.querySelector("body");

var randomColor = Math.floor(Math.random()*16777215).toString(16);

theButton.addEventListener('click', buttonOne);
CButton.addEventListener('click', buttonTwo);
OButton.addEventListener('click', buttonThree);
DButton.addEventListener('click', buttonFour);
EButton.addEventListener('click', buttonFive);


function buttonOne(){
    randomColor = Math.floor(Math.random()*65000).toString(16);
    theBody.style.backgroundColor = randomColor;
}
function buttonTwo() {
    randomColor = Math.floor(Math.random() * 85000).toString(16);
    CButton.style.backgroundColor = randomColor;
}
function buttonThree() {
    randomColor = Math.floor(Math.random() * 80000).toString(16);
    OButton.style.backgroundColor = randomColor;
}
function buttonFour() {
    randomColor = Math.floor(Math.random() * 75000).toString(16);
    DButton.style.backgroundColor = randomColor;
}
function buttonFive() {
    randomColor = Math.floor(Math.random() * 70000).toString(16);
    EButton.style.backgroundColor = randomColor;
}

