const student={
    name:"aman",
    marks:84,
    porp:this,
    getname:function(){
        return this.name;//global scope
    },
    getmarks:()=>{
        console.log(this);
        return this.name;//parents scope
    },
    getinfo1:function(){
        setTimeout(()=>
        {
            console.log(this);//student
        },2000);
    },
    getinfo2:function(){
        setTimeout(function()
        {
            console.log(this);//window
        },2000);
    },
};