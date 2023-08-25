function Calculate() {
    //Declaring vars
    var padding = "<br>";
    var inputOne, inputTwo, Op, ans;
    //Collecting inputs
    inputOne = document.getElementById("input1").value;
    inputTwo = document.getElementById("input2").value;
    Op = document.getElementById("input3").value;
    
    //Calculation
    
    if (Op === "+") {
       ans = parseFloat(inputOne) + parseFloat(inputTwo); 
    }else if (Op === "-"){
        ans = inputOne - inputTwo;
    }else if (Op === "*"){
        ans = inputOne * inputTwo;
    }else if (Op === "/") {
        ans = inputOne / inputTwo;
    }
    
    //Submit
    document.getElementById("test").innerHTML = padding + ans;
}

function Clear() {
    document.getElementById("test").innerHTML = "";
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";

}
