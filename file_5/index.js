/*
switch = statements that examines a value
         for a match agianst many case clauses
         More efficient that many "else if" statements.
*/
let grade = (window.prompt("Enter the marks of the grade: "));
grade = Number(grade);
console.log(grade,typeof grade);

switch(true){
    case grade >= 90:
        console.log("You did great");
        break;
    case grade >= 80:
        console.log("You did good");
        break;
    case grade >= 70:
        console.log("You did okay");
        break;
    case (grade >= 60):
        console.log("You passed...!");
        break;
    case grade < 60:
        console.log("Better luck next time");
        break;
    default:
        console.log(grade," is not present in the grade");
}