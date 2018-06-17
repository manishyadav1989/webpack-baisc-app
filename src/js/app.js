import {showButton, hideButton} './dom-loader';
var p = document.querySelector('#text');
p.textContent = "This is text Content";

function showText (){
    p.style.display = 'block';
}

function hideText(){
    p.style.display = 'none';
}

showButton.addEventListener('click',showText);
hideButton.addEventListener('click',hideText);
