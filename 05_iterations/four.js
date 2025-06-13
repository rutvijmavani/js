// for in

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    RB : "Ruby",
    swift : "Swift by apple"
}

for (const key in myObject) {
    //console.log(key);
    //console.log(myObject[key]);
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js" , "ruby" , 'python' , 'java' , "cpp"]

for (const key in programming) {
    //console.log(key);
    //console.log(programming[key]);
}


// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('FR' , "France")

// for (const key in map) {
//     console.log(key);   // it prints nothing and is not showing any error as it is not iteratable!
// }