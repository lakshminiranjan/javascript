//constant- it is a variable that can't be changed-not necessary to make uppercase but it will be better if we
//adds sec to the code
//circumference of a circle = 2*pi*r
const PI = 3.14159;//const-keyword the pi value remains constant over the entire prgrm
let radius;
let circumference;

radius = window.prompt("Enter the radius : ");
radius = Number(radius);
circumference = 2 * PI * radius;
console.log("The circumference is",circumference);