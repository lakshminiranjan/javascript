//arrow function = compact alternative to a traditional function expression.
//                  =>
/*const greeting = (userName) => {//can eleminate curly braces but if code inside the curly braces is more than 1 statement then we should use curly braces
    console.log(`hello ${userName}`);//As any how I am using curly braces over here.
}

greeting("Niranjan");*/
/*const percent = (x,y) => {
    return x/y *100;
}
console.log(`${percent(37,50)}%`);*/
//steps
//remove descending-func name first
//in grades.sort and in grades.forEach then
//copy and paste the function in place of func name
//now remove name "function" and then add "=>" this symbol
let grades = [100,50,90,60,80,70];

grades.sort( (x,y) =>{
    return y-x;
});
grades.forEach( (element) =>{
    console.log(element);
});



