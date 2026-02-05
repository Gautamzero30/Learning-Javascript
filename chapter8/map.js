let num=[1,2,3,5,6];
let double=num.map((el)=>{
    return el*3
});
console.log(double)





let abc = [{
    name:"gautam",
    rollno:30,
    marks:96
},
{
    name:"rahul",
    rollno:"12",
    marks:93

},{
    name:"sampanna",
    rollno:13,
    marks:43
}]

let gpa=abc.map((el)=>
{
    return el.marks/10;

});
console.log(gpa)