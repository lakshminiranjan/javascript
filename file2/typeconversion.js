//type_conversion is the ability to change the datatype of a value to another
//      (str,Number,bool)
/*
let age = window.prompt("How old are you?:");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age +=1

console.log("You are",age,"years old");
*/
let x,y,z;

x = Number("3.14");//replace "3.14" with "nizy" result will be NaN
console.log(x,typeof x);//print(type(x))

y = String(3.14);
console.log(y,typeof y);

z = Boolean("");//This will give us false,If any input is given then true
console.log(z,typeof z);

