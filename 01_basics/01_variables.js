const accountId = 144553
let accountEmail = "nut@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" 
let accountState;

// accountId = 2 // not allowed
accountEmail = "hc@hc.com"
accountPassword = "234223"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional block
*/

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])