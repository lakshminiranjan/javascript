//spread operator = allows an iterable such as an
//                  array or string to be expanded
//                  in places where zero or more 
//                  arguments are expected
//                  (unpacks the elements.)
//let name = "Lakshmi Niranjan";
/*let numbers = [1,2,3,4,5,6,7,8,9];
//console.log(...name);
let max = Math.max(...numbers);//need to enter "..."  important.
console.log(max);*/

let class1 = ["nizy","sudheer","ramana"];
let class2 = ["pawan","uday","venky"];

//class1.push(class2);This gives just array kept in an array.
class1.push(...class2);//This gives detailed array complete one.
console.log(...class1);
