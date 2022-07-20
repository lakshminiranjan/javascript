//function - Define code ones,and use it many times.
//           to perform some code,call the function name

//functions have access to global variables,A "global variable" is a variable thats declared outside of any function.

function startProgrm(){
    let username = "Nizy";
    let age = 21;

    happyBirthday(username,age);
}

function happyBirthday(username,age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday dear ",username);
    console.log("Happy Birthday to you!");
    console.log("You are",age," years old.");
}
startProgrm();