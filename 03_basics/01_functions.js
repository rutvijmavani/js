

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("J");
    console.log("K");
    console.log("L");
}

//sayMyName()    // execute
// sayMyName //reference

// function addTwoNumbers(number1 , number2){
//     // number1 and number2 is called parameter at the time of function definition
//     console.log(number1 + number2);
// }

// addTwoNumbers(3 , 4)   //7   3 and 4 is called arguments when you call the function
// addTwoNumbers(3 , '4')  // 34
// addTwoNumbers(3 , null)  //3

//const result = addTwoNumbers(3 , 5)
//console.log(result);       // undefined

function addTwoNumbers(number1 , number2){
    // number1 and number2 is called parameter at the time of function definition
    //let result = number1 + number2
    return number1 + number2
}

const result = addTwoNumbers(3 , 5)
//console.log(result);

// function loginUserMessage(username) {
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))    // hitesh just logged in
// console.log(loginUserMessage());            // undefined just logged in

function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please enter a username");
        return     
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage());    // Please enter a username  undefined

function calculateCartPrice(...num1) {
    //above is called rest/spread operator
    return num1
}
console.log(calculateCartPrice(2));    // 2
console.log(calculateCartPrice(200 , 400 , 500))   // [ 200, 400, 500 ]

const user = {
    username : "hitesh",
    price : 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   
}
//handleObject(user)    //Username is hitesh and price is 199

const myNewArray = [200 , 400 , 100 , 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));     // 400
// console.log(returnSecondValue([100 , 200 , 800]));   //200
