// variables
const accountId = 144553
let accountEmail = "nasihul@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);

/**
 * prefer not to use var because of issue in block scope and functional scope
 * https://tc39.es/ecma262/#sec-intro
 * */ 

// datatypes and ECMA standards
/**
 * naumber => 2 to power 53
 * bigint
 * boolean => true / false 
 * null => standalone value
 * undefined
 * symbol => unique

 * */ 

console.log(typeof null);
// https://tc39.es/ecma262/#sec-numbers-and-dates

let isLoggedIn = ""

let booleanLoggedIn = Boolean(isLoggedIn)
console.log(booleanLoggedIn);

// true = 1; false = 0; "hitesh" = true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ***************** Operations **************
let value = 3
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
let gameCounter = 100
gameCounter++
console.log(gameCounter);