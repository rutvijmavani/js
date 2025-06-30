let myName = "hitesh"
// console.log(myName.length)

// console.log(myName.trueLength)

let myHeroes = ['thor' , 'spiderman']

let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',
    getSpiderPower : function(){
        // console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    // console.log(`Hitesh is present in all objects!`)
}

// heroPower.hitesh()

myHeroes.hitesh()

// inheritance

const User = {
    name : "user",
    email : "chai@google.com"
}


const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS Assignment', 
    fulltime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = User

// modern syntax for inheritance

Object.setPrototypeOf(teachingSupport , teacher)

let anotherUsername = "chaiaurcode      "

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"hitesh".trueLength()
'iceTea'.trueLength()