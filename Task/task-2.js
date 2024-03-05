// 2. Write a JS function that returns a passed string with letters in alphabetical order.

function char(str){
    return str.split('').sort().join('');
}
console.log(char("edcba"));