// function (whats is function) => perform to specific task

function squre(a , b){
    console.log(a*b);
}
squre(10 ,5)


// basic function

function add(a, b) {
    return a + b;
}
// console.log(add(5, 15));
let z = add(10, 15)
console.log(z);


// anonymous function

let product = function (x , y){
    return x *  y;
};
console.log(product(100,2));


// IIFE  => full form ( Immediately Invoked Function Expression )

let x = (function hellow (a , b)
{
    return (a - b);
})( 100 , 50);
console.log(x);