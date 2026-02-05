function sum(...args){
    for (let i=0;i<args.length;i++){
        console.log(`you gave us : 🫵🏻${args[i]}`);
    }
}

sum(3,5,6.7)

function min(){
    console.log(arguments.length);

}
min(1,2,3,4)


function summ(...args){
    a=args.reduce((sum,el)=>sum+el);
    console.log(a)
}
summ(1,2,3,4,5,4)

function min(msg,...args)
{    console.log(msg);
    return args.reduce((min,el)=>
    {
        if (min<el){
            return min;
        }else{
            return el;
        }
    })
    
   
};

x=min("hello_mithilanchal",12,43,45,56,6,7,343,3,4);
console.log(x)
