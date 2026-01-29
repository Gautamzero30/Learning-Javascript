  
const favmovie="avtar";
let guess=prompt("what is your favourite movie");

while(guess!=favmovie){
    if (guess=="quit"){
        console.log("you quit");
        break;
    }
    guess=prompt("wrong guess,please try again");
    

}

if(guess==favmovie){
    console.log("congrats!!");  
}