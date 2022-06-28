//useful string properties and methods

let userName = "      Niranjan Nizy    ";
let phoneNumber = "123-456-7890";

console.log(userName.length);

let firstLetter = userName.charAt(0);
console.log(firstLetter);
console.log(userName.indexOf("N"));//in python userName.index("N")  in java userName.indexOf().
console.log(userName.lastIndexOf("N"));//The last occurence of "N".strip() in python.
console.log(userName.trim());//Removes the spaces between the strings.
console.log(userName.toUpperCase());//same in java ,,, upper()
console.log(userName.toLowerCase());

console.log(phoneNumber.replaceAll("-","_"));//in java obj.replace('a','e') in python string.replace(old, new, count)
