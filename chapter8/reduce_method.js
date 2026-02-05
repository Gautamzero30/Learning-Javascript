let nums= [1,2,4,6]
let finalvalue=nums.reduce((res,el)=>{
    console.log(el);
    console.log(res);
    return res+el;})
console.log(finalvalue)