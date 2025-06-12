//var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    //console.log("Inner:" , a);  //10
    
}

//console.log(a);    //300
//console.log(b);
//console.log(c);

function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);  // error not defined
    
    two()
}

//one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);   //error
}
//console.log(username);   


// ++++++++++++++++ interesting +++++++++++++++++++++++++++++++
console.log(addone(5));    // no error. it prints 6.

function addone(num) {
    return num + 1
}

//addTwo(5)   // throws an error
const addTwo = function(num) {
    //it is called as expression
    return num + 2
}
addTwo(5)