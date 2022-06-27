//How to accept user input
//replace print---console.log
//EASY way with a window prompt

//let username =window.prompt("What is your name?:");//replace-input----window.prompt
//console.log(username)

//Hard method using html
//print statement using html in js is --document.getElementById("myLabel").innerHTML 
let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;//assignment
    console.log(username);//printing in console not in Html
    document.getElementById("myLabel").innerHTML ="Hello "+username;
}