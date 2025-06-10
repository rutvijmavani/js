// () => parenthesis
// [] => bracket
// {} => braces/curly braces

const myArr = [0 , 1 , 2 , 3 , 4 , 5]    // resizable , contain mix of data types , zero indexed

const myHeroes = ["shaktiman" , "naagraj"]

const myArr2 = new Array(1 , 2, 3, 4)
//console.log(myArr[0]);


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)   // adds element at leftmost side and shifts other elements to 1 step right. it is very time consming process.
//myArr.shift()    // removes the leftmost element

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(9));

const newArr = myArr.join()

//console.log(myArr);
//console.log(typeof newArr);  // string

// slice , splice

console.log("A " , myArr);    // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1 , 3)
console.log(myn1);     //     [ 1, 2 ]
console.log("B " , myArr);       // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1 , 3)
console.log(myn2);       // [ 1, 2, 3 ]
console.log("C " , myArr);    // [ 0, 4, 5 ]

