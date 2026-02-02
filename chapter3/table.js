const prompt = require("prompt-sync")();
let n =prompt("what is your numbers: ");
n = parseInt(n);
for(let i = n;i<=n*10;i=i+n){
    console.log(i);
}