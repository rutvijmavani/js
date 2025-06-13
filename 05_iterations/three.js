// for of

//["","",""]   string array
//[{},{},{}]   object

const arr = [1, 2 ,3 , 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}


// Maps

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('FR' , "France")

//console.log(map);

for (const key of map) {
    //console.log(key);
}

for (const [key , value] of map) {
    // console.log(key , ':-' , value);
}

const myObject = {
    'game1' : 'nfs',
    'game2' : 'spiderman'
}

// for (const [key , value] of myObject) {
//     //console.log(key , ':-' , value);    //throws an error as object is not iterable
// }