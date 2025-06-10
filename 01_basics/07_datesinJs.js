// Dates

let myDate = new Date()   //mili second values from 1/1/1970
//console.log(myDate);   //2025-06-10T17:17:02.734Z

// console.log(myDate.toString());  //Tue Jun 10 2025 17:18:30 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());   //Tue Jun 10 2025
//  console.log(myDate.toISOString())    //2025-06-10T17:43:30.776Z
//  console.log(myDate.toJSON());        //2025-06-10T17:43:30.776Z
//  console.log(myDate.toLocaleDateString());  //6/10/2025
//  console.log(myDate.toLocaleString());      //6/10/2025, 5:43:30 PM

// console.log(typeof myDate);     //object

// let myCreatedDate = new Date(2025 , 0 , 23)    //Thu Jan 23 2025
//let myCreatedDate = new Date(2025 , 0 , 23 , 15 , 3)    // 1/23/2025, 3:03:00 PM
let myCreatedDate = new Date("2025-01-14")
//console.log(myCreatedDate.toLocaleString());    // 1/14/2025, 12:00:00 AM

let myTimeStamp = Date.now()
//console.log(myTimeStamp);     // 1749577771617  time in milisecond
//console.log(myCreatedDate.getTime());    //1736812800000 time in milisecond
//console.log(Math.floor(Date.now() / 1000));  // 1749578734 time in second

let newDate = new Date()
// console.log(newDate);      //2025-06-10T18:06:51.454Z
// console.log(newDate.getMonth() + 1);    //6 returns month. js by default counts month from 0.
// console.log(newDate.getDate());      // 10

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default' , {
    weekday: "short", 
}))     // Tue