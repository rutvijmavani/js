//  Object literal!

const user = {
    username : "hitesh",  // username , loginCount , signedIn is known as properties!
    loginCount : 8,
    signenIn : true, 

    getUserDetails : function(){ // known as function or method
        // console.log("Got user details from database!")
        // console.log(`Username : ${this.username}`)
        // console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)


// Constructor function!

function User(username , loginCout , isLoggedIn){
    this.username = username,    //this.username is variable and username on the right is the value from parameter
    this.loginCount = loginCout,
    this.isLoggedIn = isLoggedIn,

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    // return this
}

const userOne = new User("hitesh" , 12 , true)
const userTwo = new User("chai" , 8 , true)
console.log(userOne.constructor)
console.log(userTwo)