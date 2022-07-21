//array.filter() = creates a new array with all elements
//                 that pass the text provided by a function
let ages = [10,16,21,17,19,90];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element){
    return element >= 18;
}
function print(element){
    console.log(element);
}