const name = "Rutvij"
const repoCount = 50

// console.log(name + repoCount + "Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('hitesh-hc-hgj')

//console.log(gameName[0])
//console.log(gameName.__proto__);
//console.log(gameName.length);
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-8 , 4)
console.log(anotherString); //ite

//slice(indexStart)
//slice(indexStart, indexEnd)
//indexStart
//The index of the first character to include in the returned substring.

//indexEnd Optional
//The index of the first character to exclude from the returned substring.

const newStringOne = "    hitesh     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "hhtps://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20' , '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
