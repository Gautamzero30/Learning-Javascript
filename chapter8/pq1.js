arr = [10,20,30,34,56,33]
let p = arr.every((el)=>
{
    return el%10==0;

});
console.log(p)

let min=arr.reduce ((min,el)=>
{
    if (min<el){
        return min;
      
    }  
    else { return el; 
            
        }

})
console.log(min);