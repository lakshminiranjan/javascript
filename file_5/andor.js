/*
Gives us the ability to check more than 1 condition concurrently
&& AND (Both conditions must be true)
|| OR (Both conditions can be true)
*/
let temp = window.prompt("Enter the weather in celcius : ");
temp = Number(temp);
if(temp > 0 && temp < 30){
    console.log("The weather is good");
}
else if(temp < 0 || temp < -100){
    console.log("It is too cold.Better don't go outside");
}
else if(temp > 30 || temp < 90){
    console.log("It is too hot over outside.Pls aviod going outside");
}
else{
    console.log("The weather is bad");
}