// Primitive(call by value) 
// 7 types: String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id);        //Symbol(123)
//console.log(anotherId)  //Symbol(123)

//console.log(id === anotherId); //false


// Non Primitive (Reference type)
// Array , Objects , Functions

const heroes = ["shaktiman" , "naagraj" , "doga"]

let myObj = {
    name : "rutvij",
    age : 22,
} 

const myFunction = function(){
    //console.log("Hello world");
    
}

//console.log(typeof myFunction); //function

// type of non primitive datatype is object. type of function is object function.


//Memory Allocation

// Stack (Primitive), Heap (Non Primitive)

let myYoutubename = "hiteshchaudhary"
let anohtername = myYoutubename
anohtername = "chaiaurcode"

//console.log(myYoutubename)  //hiteshchaudhary
//console.log(anohtername);   //chaiaurcode

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);  //hitesh@google.com
console.log(userTwo.email)   //hitesh@google.com
