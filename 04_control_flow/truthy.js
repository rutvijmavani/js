const userEmail = "h@hitesh.ai"

if (userEmail) {
    console.log("got user email");
} else {
    console.log("don't have email");
}


//falsy values

//false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy values

// "0" , 'false' , " " , [] , {} , function(){} 

// if (userEmail.length === 0) {
//     console.log("array is empty!");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}

// false == 0 , false == '' , 0 == ''   // all the statements are true!

// Nullish Coalescing Operator (??) : null undefined

let val1;
//val1 = 5 ?? 10        // always returns value on left
//console.log(val1);   //5
//val1 = null ?? 10      // 10
//val1 = undefined ?? 15   // 15

val1 = null ?? 10 ?? 20     //10
console.log(val1);     


// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");  //greater than 80
