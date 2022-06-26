//variable- it is a container which sores the vaue of an data-type
//it behaves as if it was the value that it contains
//Two Steps:
/*1.Declaration  (var,let,const)
2.Assignment (-asssignment operator)
*/ 

let age = 27;//datatype-int
let name= "Niranjan";//data-tpe-str
let student = true //data-type-bool

age = age+1;
//this will print the text in console
console.log("Hello",name);
console.log("You are ,",age,"years old");
console.log("is Student?",student);
//this will print in the main html 
document.getElementById("p1").innerHTML = "Hello " + name;
document.getElementById("p2").innerHTML = "You are " + age +" years old";
document.getElementById("p3").innerHTML = "isStudent?: "+student;