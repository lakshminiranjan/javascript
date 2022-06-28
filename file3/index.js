
//console.log(x);//generates a random number between 1 nd 6
//console.log(y);
//console.log(z);

let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random()* 6) + 1;
    y = Math.floor(Math.random()* 6) + 1;
    z = Math.floor(Math.random()* 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}