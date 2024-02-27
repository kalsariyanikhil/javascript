// // function (whats is function) => perform to specific task

// function squre(a , b){
//     console.log(a*b);
// }
// squre(10 ,5)


// // basic function

// function add(a, b) {
//     return a + b;
// }
// // console.log(add(5, 15));
// let z = add(10, 15)
// console.log(z);


// // anonymous function

// let product = function (x , y){
//     return x *  y;
// };
// console.log(product(100,2));


// // IIFE  => full form ( Immediately Invoked Function Expression )

// let x = (function hellow (a , b)
// {
//     return (a - b);
// })( 100 , 50);
// console.log(x);


// function hello(a,b,c){
//     return arguments.length;
// }
// console.log(1,2,3);


// Add function


// function add(...args){
//     let sum = 0;
//     for(let i=0;i<args.length;i++)
//     sum = sum + args[i];

//     return sum;
// };
// console.log(1,2,3,4);


// function add(){
//         let sum = 0;
//         for(let i=0;i<arguments.length;i++)
//         sum = sum + arguments[i];
    
//         return sum;
//     };
//     console.log('11','12','13',14,15,16);



// generator


// function* hello()
// {
//     yield 11;
//     yield 12;
//     yield 13;
//     yield 14;
//     return 15;
// }
// let data = hello();
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);
// console.log(data.next().value);

// slice method (strat , end)

// let data = 'javascript is at ext-based programming language the basic language java '

// // let str = data.slice(5, 15)
// // let str = data.slice(-15, -5)
// let str = data.slice(5)
// console.log(str);


// subsrting method (start,end)

// let str = data.substring(4,15)
// let str = data.substring(4)
// let str = data.substring(-24)

// console.log(str);


// substr method ()

// let str = data.substr(1,15);;
// let str = data.substr(4);
// console.log(str);


// concat() method

// let txt ="hello nikhil kalsariya";

// console.log(txt.concat(data));


// charAt () method

// console.log(data.charCodeAt(1));
// console.log(data.charCodeAt(5));



