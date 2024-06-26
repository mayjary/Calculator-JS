const display = document.getElementById("display");

function todisplay(input){
    display.textContent += input;
}

function clr(){
    display.textContent = "";
}

function calculate(){
    display.textContent = eval(display.textContent); 
}