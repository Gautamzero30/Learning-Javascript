let arr=[1,4,53,3,43,5,8,5,5,6];
// let max=-1;
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];

//     }

    
// }
// console.log(max)

let max = arr.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }

});
console.log(max)