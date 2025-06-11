// singleton
//Object.create

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);   // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Hitesh",
            lastname : "choudhary"
        }
    }
}

// console.log(regularUser.fullname);  // { userfullname: { firstname: 'Hitesh', lastname: 'choudhary' } }
// console.log(regularUser.fullname.userfullname);   // { firstname: 'Hitesh', lastname: 'choudhary' }
// console.log(regularUser.fullname.userfullname.firstname);   // Hitesh

const obj1 = {
    1 : "a",
    2 : "b"
}

const obj2 = {
    3 : "c",
    4 : "d"
}

const obj3 = {obj1 , obj2}   
//console.log(obj3);   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign({} , obj1 , obj2)
//console.log(obj4);     // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const obj5 = {...obj1 , ...obj2}
//console.log(obj5);       // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "r@gmail.com"
    }
]

users[1].email

// console.log(tinderUser);   //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// console.log(Object.keys(tinderUser));    //[ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser));    // [ '123abc', 'Sammy', false ]

// console.log(Object.entries(tinderUser));    // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    // true

const course = {
    coursename : "JS",
    price : 999,
    courseInstructor : "Hitesh"
}

//console.log(course.courseInstructor)  // Hitesh

const {courseInstructor : instructor} = course    //object destructuring
//console.log(courseInstructor)      //Hitesh
console.log(instructor);   //Hitesh

