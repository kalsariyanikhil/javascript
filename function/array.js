// const arr =[1,2,3,4, 'skill',true,false];
// console.log(arr);
// console.log(arr[4]);
// console.log(arr.length);


// ==> Array methods

// const data =[11,22,33,44,55];

// ==> Push method

// data.push(66,77,88);
// console.log(data);

// ==> pop methods
// data.pop()
// data.pop()
// console.log(data);

// ==> shift and unshift

// data.unshift(100);
// data.unshift(200,300,400);
// console.log(data);

// data.shift()
// data.shift()
// data.shift()
// console.log(data);


// ==> concat method

// let arr = ['skill','Qode']
// console.log(data.concat([99,88,77,66],['hello','world'],arr));


// ==> revers method

// console.log(data.reverse());


// ==> sort method

// let txt = [88,266,11,133,44,22,155,99];

// console.log(txt.sort((a,b)=>a-b));

// let txt = ['world','qode','skill',"hello"];
// console.log(txt.sort());

// ==> maximum minimum

// console.log(Math.max.apply(null,txt));
// console.log(Math.min.apply(null,txt));

// ==> slice method

// console.log(txt.slice(2,6));
// console.log(txt.splice(2,6));


// ==> high order method

// let data = [88,266,11,133,44,22,155,99];

// ==> every

// let result =data.every((val,index) => {
//     return val>50;
// })
// console.log(result);

// ==> Some

// let result =data.some((val,index) => {
//     return val>50;
// })
// console.log(result);

// ==> filter

// let result =data.filter((val,index) => {
//     return val>50;
// })
// console.log(result);

// ==> Find

// let result =data.find((val,index) => {
//     return val>90;
// })
// console.log(result);

// ==> FindIndex

// let result =data.findIndex((val,index) => {
//         return (val>10 && val<=20);
//     })
//     console.log(result);
    
// ==> map

// let result =data.map((val,index) => {
//         return val + 1;
//     })
//     console.log(result);

//  ==> reduce

// let txt="";
// let result = data.reduce((total,val)=>{
//     return total + val;
// },0)
// console.log(result);

// ==> reduceright

// let result = data.reduceRight((total,val)=>{
//         return total + val;
//     })
//     console.log(result);


// ==> entries

// let aa = data.entries();
// console.log(aa.next().value);
// console.log(aa.next().value);
// console.log(aa.next().value);
// console.log(aa.next().value);
// console.log(aa.next().value);

// ==> includes

// console.log(data.includes(88));
// console.log(data.includes(880));

// ==> Copy within

// let data = [88,266,11,133,44,22,155,99];

// // let result =data.copyWithin(3,0,2);
// let result =data.copyWithin(3,0);

// console.log(result);