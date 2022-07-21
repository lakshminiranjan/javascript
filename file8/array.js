//array = think of it as a  varaiable
//        that can store multiple values.

let names=["nizy","sudheer","ramana"];
/*
names[0]= "niranjan";
console.log(names);
names.push("lemon");//add an element.
names.pop();    //removes last element
names.unshift("nizy");//add element to start
names.shift();//removes element from beginning

let length = names.length;

let index = names.indexOf("nizy");
console.log(index);*/

//looping in arrays
/*for(let i=0; i< names.length;i+=1){---print in a linear format
    console.log(names[i]);
}*/
//printing in backward
//for(let i = names.length - 1;i >=0; i-=1){
 //   console.log(names[i]);
//}
/*or(let name of names){//in prints index number,of prints the element
    console.log(name);
}*/



//sorting an array of string

//names = names.sort();    //prints in alphabatical order
names = names.sort().reverse();                      //prints in reverse alphabatical order
for(let name of names){
    console.log(name);
}