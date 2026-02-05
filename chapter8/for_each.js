let arr = [1,2,3,4,5];
    let print=function(el){

        console.log(el);
    }
arr.forEach(print); 

// let arr = [1,2,3,5,6,7]; 
// arr.forEach(function(el){
//     console.log(el);
// })
arr.forEach(function(el){
    console.log(el);
});
arr.forEach((el)=>{
    console.log(el); 

})

let abc = [{
    name:"gautam",
    rollno:30
},
{
    name:"rahul",
    rollno:"12"

},{
    name:"sampanna",
    rollno:13
}]

abc.forEach((student)=>{console.log(student)})