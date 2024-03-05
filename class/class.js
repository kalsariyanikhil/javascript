// class

// class person{
//     constructor(name){
//         this.name=name;
//     }
//     display=function(){
//         return "hello"+this.name;
//     }
// };

// let obj = new person('john');

// console.log(obj);
// console.log(obj.name);
// console.log(obj.display);
// console.log(obj.display());

// call method

// let person={
//     print:function(city,state){
//         return this.name + "" + this.surename + "\n" + city + "\n" + state;
//     }
// };

// let viru = {
//     name: "nikhil",
//     surename: "Ahir",
// }
// let jay = {
//     name: "akshay",
//     surename: "Goti",
// }
// let gabbar = {
//     name: "Jayan",
//     surename: "Dudakiya",
// }
// console.log(person.print.call(viru,"surat"," gujrat"));
// console.log(person.print.call(jay,"rajkot"," gujrat"));
// console.log(person.print.call(gabbar,"vapi"," gujrat"));



// apply method

// let person = {
//     print: function (city, state) {
//         return this.name + "" + this.surename + "\n" + city + "\n" + state;
//     }
// };

// let viru = {
//     name: "nikhil",
//     surename: "Ahir",
    
// }

// console.log(person.print.call(viru, "surat", " gujrat"));
