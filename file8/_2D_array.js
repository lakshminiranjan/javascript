//2Darray  == an array of arrays
let names = ["nizy","sudheer","ramana"];
let gfs = ["bujii","sree","kanna"];
let love = ["bad","bad","bad"];

let loveCal = [names,gfs,love];

loveCal[2][2] = "good";
for(let list of loveCal){
    for(let friend of list){
        console.log(friend);
    }
}