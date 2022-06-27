/*
let a = window.prompt("Enter the a value:");
let b = window.prompt("Enter the b value ");
let result;

a = Number(a);
b = Number(b);
result = a**2 + b**2;
hypotenus = Math.sqrt(result);
console.log(hypotenus)//forget to print print the function after declaring*/

document.getElementById("submitButton").onclick = function(){
    let a =document.getElementById("aTextbox").value;
    //let b = window.prompt("Enter the b value ");
    let b =document.getElementById("bTextbox").value;
    let result;

    a = Number(a);
    b = Number(b);
    result = a**2 + b**2;
    hypotenus = Math.sqrt(result);
    //console.log(hypotenus)//forget to print print the function after declaring
    document.getElementById("cLabel").innerHTML = "Hypotenuse : " + result;
}
