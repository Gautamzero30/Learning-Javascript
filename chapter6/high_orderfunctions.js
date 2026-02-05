let printmultimes=function(func,n){
    for (let i=1;i<=n;i++)
        func();

}
let greet = function(){
    console.log("hello,Namastey ji");
}
printmultimes(greet,5);