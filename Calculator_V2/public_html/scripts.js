var Display, hold = 0, Op;


//Runs after every number press to update display with the value for calculating.
function Calculation() {
    
    Display = document.getElementsByClassName("display");
    var x = document.getElementsByClassName("display");
    
    if (Op === "+") {
        hold = parseFloat(hold) +  parseFloat(x[0].innerHTML);
    } else if (Op === "-"){
        hold = parseFloat(hold) -  parseFloat(x[0].innerHTML);
    } else if (Op === "*") {
        hold = parseFloat(hold) *  parseFloat(x[0].innerHTML);
    } else if (Op === "/") {
        hold = parseFloat(hold) /  parseFloat(x[0].innerHTML);
    } else {
        Display[0].innerHTML = "No Operator Used!";
        hold = "0";
    }
    Display = document.getElementsByClassName("display");
    Display[0].innerHTML = hold;  
    
    
    
    
    console.log("Ans: " + hold);
}
function ConcatDisplay(x) {
    Display = document.getElementsByClassName("display");
    Display[0].innerHTML += x;
    console.log(Display[0].innerHTML);
}
//Saves the display and stores the displayed number into holding for later calculation. Only runs on +-/*=
function SaveDisplay (){
    Display = document.getElementsByClassName("display");
    if (Display[0].innerHTML === ""){
        hold = 0;
        hold = Display[0].innerHTML; 
    } else {
    
    hold = Display[0].innerHTML;    
    }
    console.log("Holding: " + hold);
}
function Clear(){
    SaveDisplay();
    //getElementsByClassName retuns an array. Hence x[0]
    var x = document.getElementsByClassName("display");
    x[0].innerHTML = "";
    console.log("Display Cleared");
}
function Add(){
    Op = "+";
    console.log(Op);
    Clear();
}
function Subtract(){
    Op = "-";
    console.log(Op);
    Clear();
}
function Multiply(){
    Op = "*";
    console.log(Op);
    Clear();
    
}
function Divide(){
    Op = "/";
    console.log(Op);
    Clear();
}


