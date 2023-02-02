var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body");
var cssStyle = document.querySelector("h3");
var btn = document.getElementById("generateBtn");

cssStyle.textContent = getComputedStyle(body).backgroundImage;

function changeColor(){
    body.style.background = "linear-gradient(to right," + color1.value + ",  " + color2.value  + ")";
    cssStyle.textContent = body.style.background;
}

function randomColors() {
    color1.value =  '#' + Math.floor(Math.random() * 16777215).toString(16);
    color2.value =  '#' + Math.floor(Math.random() * 16777215).toString(16);
    body.style.background = "linear-gradient(to right," + color1.value + ",  " + color2.value  + ")";
    cssStyle.textContent = body.style.background;
    return body.style.background;
  }


btn.addEventListener("click", randomColors);
color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);

