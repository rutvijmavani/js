const score = 400
//console.log(score);   // 400


const balance = new Number(100)
//console.log(balance);  //[Number:100]

//console.log(balance.toString().length)  //3

//console.log(balance.toFixed(2)); //100.00

const otherNumber = 23.8966

//console.log(otherNumber.toPrecision(3));   //23.9

const otherNumber1 = 123.8966
//console.log(otherNumber1.toPrecision(3));  //124

const otherNumber2 = 1123.8966
//console.log(otherNumber2.toPrecision(3)); //1.12e+3

const hundreds = 1000000
//console.log(hundreds.toLocaleString());  //1,000,000
//console.log(hundreds.toLocaleString('en-IN'));  //10,00,000

// ++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));  //4
// console.log(Math.round(4.3)); //4
// console.log(Math.round(4.6)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(4,3,6,8));    //3
// console.log(Math.max(4,3,6,8));    //8

console.log(Math.random());  //generates random values between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // generates from 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //generates from 10 to 20