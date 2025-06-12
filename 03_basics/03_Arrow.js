const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} ,  welcome to website!`);
        console.log(this);
        
    }

}

// user.welcomeMessage()    // hitesh ,  welcome to website!
 //user.username = "sam"
// user.welcomeMessage()   // sam ,  welcome to website!

//console.log(this);   // {}

function chai() {
    console.log(this);
}
chai() //output of this function call is written below!
{/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
} */}


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);   //undefined
// }

// chai()

// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);     // undefined as we can only use this keyword inside the object not inside the function.
// }

// chai()

// arrow function declare : () => {} and then save it to any const/let!

// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);    // undefined
// }
// chai()


// const chai = () => {
//     let username = "hitesh"
//     console.log(this);    // {}
// }
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3 , 4));     // 7

// const addTwo = (num1 , num2) => num1 + num2     // known as implicit return. remove brackets and dont need to write return!
// console.log(addTwo(3 , 4));     // 7

// const addTwo = (num1 , num2) => (num1 + num2)     // known as implicit return. remove brackets and dont need to write return!
// // no need to specify return in parenthesis. if you do curly braces then and then only you need to specify return!
// console.log(addTwo(3 , 4));     // 7

// const addTwo = (num1 , num2) => {username : "hitesh"}    // known as implicit return. remove brackets and dont need to write return!
// console.log(addTwo(3 , 4));     // undefined


const addTwo = (num1 , num2) => ({username : "hitesh"})    // you need to wrap the object inside parenthesis in order to return it!
console.log(addTwo(3 , 4));     // { username: 'hitesh' }

const myArray = [2, 5, 6, 7, 8]
myArray.forEach