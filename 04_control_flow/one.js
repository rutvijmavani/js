// if
const isUserloggedIn = true

if (isUserloggedIn){

}

// < , > , <= , >= , == , != , === , !== 

if (2 === "2"){
    console.log("executed");
}

// const balance = 1000

// //if (balance > 500) console.log("test");  // test


// //if (balance > 500) console.log("test") , console.log("test2");     //test test2

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false 
const loggedInFromEmail = true
 
if (userLoggedIn && debitCard && 2 == 2) {
    console.log("allow to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user loggedin!");
}