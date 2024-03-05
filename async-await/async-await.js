// javascript async/await

// async function fun_name(parameter1,parameter2,parameter3);{
//     statements
// }

// fun_name -> name of the function
// parameters -> parameter that are passed to tha function

// async

// async function exampel

// async function f(){
//     console.log('async function.');
//     return Promise.resolve(1);
// }
// f().then((data)=> console.log(data));


// this function return a Promise, you can use the chaining method then()

// async function f(){
//     console.log('async function.');
//     return Promise.resolve("skillqode");
// }
// f().then(function(result){
//     console.log(result);
// });


// javascript await keywords

// the Syntax to use await is 

// {
//     let result = await Promise
// }
// -----------------------------------------------------------------------
//  a Promise

// let Promise1 = new Promise(function(resolve,reject){
//     setTimeout(function (){
//         resolve('promise resolved')},4000);
// });

// // async function

// async function asyncfunc(){
//     let result = await Promise1;
//     console.log(result);
//     console.log('hello');
// }
// asyncfunc();


// let promise1 = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         resolve('promise 1 resolved')
//     },2000);
// });
// let promise2 = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         resolve('promise 2 resolved')
//     },3000);
// });
// let promise3 = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         resolve('promise 3 resolved')
//     },4000);
// });

// async function asyncfunc(){
//     let result1 = await promise1;
//     console.log(result1);

//     let result2 = await promise2;
//     console.log(result2);

//     let result3 = await promise3;
//     console.log(result3);
// }
// asyncfunc();