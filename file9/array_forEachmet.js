//array.forEach() = executes a provided callback function 
//                  once for each array element.
let names = ["nizy","sudheer","ramana"];
names.forEach(capitalize);
names.forEach(print);

function capitalize(element, index, array){
    array[index] = element[0].toUpperCase()+element.substring(1);
}
//console.log(names[0]);
function print(element){
    console.log(element);
}