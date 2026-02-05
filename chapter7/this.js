const student={
    name:"Gautam",
    rollno:30,
    physics:91,
    chemistry:91,
    biology:91,
    getavg(){
        let avg =(this.physics+this.chemistry+this.biology)/3;
        console.log(`the student ${this.name} got ${avg} marks `);
    }
}

function getavg(){
   console.log(this)
}
getavg()