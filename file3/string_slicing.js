//slice() extracts a section of the strings
//            and returns it as a new string
//            without modifying the original string.

let full_name = "Niranjan Nizy";

let first_name;
let last_name;

first_name = full_name.slice(0,full_name.indexOf(" "));
last_name = full_name.slice(full_name.indexOf(" ")+ 1);
//first_name = full_name.slice(0,8);
//console.log("first_name: ",first_name,"last_name: ",last_name);
console.log(last_name);
console.log(first_name);