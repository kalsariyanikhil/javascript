// javascript try.....catch statement 

// try{
//     body of try......
// }
// catch(error){
//     body of catch.......
// }

// exampel :-

// const numbeator=100; denominator=20;

// try{
//     console.log(numbeator/denominator);
//     // forgot to define variables a 
//     let a;
//     console.log(a);
//     console.log('helloo');
// }
// catch(error){
//     console.log('an error caught');
//     console.log('error message:'+error);
// }

// javascript try.....catch......finally statement 

 // try{
 //     body of try......
 // }
 // catch(error){
 //     body of catch.......
 // }
 // finally(){
 //     codes that gets executed anyway
 // }

    // exampel :-
    
// const numbeator=100; denominator=20;
// try{
//     console.log(numbeator/denominator);
//     console.log(a);
// }
// catch(error){
//     console.log('an error caught');
//     console.log('error message:'+error);
// }
// finally{
//     console.log('finally will executed every time');
// }


// javascript throw statement

// the syntax of throw statment is :-

// {
//     throw expression 
// }
// {
//     const number =5;
//     // throw number/0; generate an exception when divided by 0
// }

// javascript throw with try....catch

//  try{
//      body of try
//      throw exception
//  }
//  catch(error){
//      body of catch
//  }

// exampel :-

// try...catch...throw exampel

// const number = 100;

// try {
//     if(number>50){
//         console.log('success');
//     }
//     else{
//         // user define throw statment 
//         throw new error('the number is low');
//     }
//     // if throw executed,the below code dose not executed 
//     console.log('hello');
// }
// catch(error){
//     console.log('an error caught');
//     console.log('error message :'+error);
// }
 