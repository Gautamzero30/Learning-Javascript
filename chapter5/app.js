// const obj={
//     1:"a",
//     2:"b",
//     true:"c",
//     null:"d",
//     undefined:"e"
// }

const max = prompt("enter the max number");
const random=Math.floor(Math.random()*max)+1;

let guess = prompt("guess the number");
while(true){
    if(guess=='quit'){
        console.log("user quit")
        break;
    }
    if (guess==random){
        console.log("you are right! congrats!!");
        break;
    }
    else{
        guess =prompt("your guess was wrong , please try again ");
    }
}