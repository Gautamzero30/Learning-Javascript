let arr = [2,4,6]
let c = arr.every((el)=>
{ 
   return el%2==0

});
console.log(c);

let d = arr.some((el)=> el%2!=0)
console.log(d)