
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Hitesh",
    "full name" : "Hitesh Choudharys",
    [mySym] : "mykey1",
    age : 18,
    location : "Jaipur", 
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]
}

//console.log(JsUser.email)   // hitesh@google.com
//console.log(JsUser[email]);  // throws an error. js stores each key as string!

//console.log(JsUser["email"]);    // hitesh@google.com
//console.log(JsUser[mySym]);   // mykey1

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)      // you can't make changes after freezing the object
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User")
}

//console.log(JsUser.greeting);   // [Function (anonymous)]
console.log(JsUser.greeting());   // Hello JS User undefined

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)      //string interpolation
}

console.log(JsUser.greetingTwo());   // vHello JS User, Hitesh undefined
