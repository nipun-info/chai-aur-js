
function square(number) {
    // console.log("Value of the number parameter", number)
    // console.log(number * number);
}
// console.log("Value of the number parameter", number)

/**
 * function parameter variable only use inside the function 
 * other it is show variabale is not defined
 * */

square(4);
square(9);

function addAll(a, b, c, d, e) {
    const total = a + b + c + d + e;
    // console.log(total);
}
addAll(5, 10, 25, 20, 30)
addAll(5, 10, 25, 20) // note: if you not value the result is NaN

// How to function works argument vs parameters

function doubleIt(number) {
    const doubled = number * 2;
    // console.log(number, doubled);
}
// console.log("I will call the function");
doubleIt(15);
doubleIt(100);

function difference(num1, num2) {
    const diff = num1 - num2;
    // console.log(`difference of two number is ${diff}`);
    // console.log(diff);
}
// difference(45, 20);
const fatherAge = 40;
const myAge = 10
difference(fatherAge, myAge);

function add(price1, price2) {
    const total = price1 + price2;
    return total;
}
const bill = add(5, 80);
// console.log(bill);

/* 
// -----------------------
function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const mult = sum * diff;
    const result = mult / 2;
    return result;
}

console.log(doMath(100, 50));

// ----------------------
 
function isEven(number){
    if (number % 2 === 0){
        return true;
    }
    return false;
}

console.log(isEven(8));

// -------short-cut-1
function isEven(number){
    if (number % 2 === 0) return true;
    return false;
}

console.log(isEven(8));
console.log(isEven(9));

// ---------------------

function isOdd(number){
    if (number % 2 === 1) 
        return true;
    return false;
}

console.log(isOdd(8));
console.log(isOdd(9));

// for a given string tell me whether it has even number of characters or not
function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);
    if (size % 2 === 0)
        console.log("Str is even!!");
    console.log("Str is Odd!!");
}
evenSizedString('Dhaka');
evenSizedString('Bangladesh');

// ------------------------

function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}

console.log(doubleOrTriple(2, true));
console.log(doubleOrTriple(8, false));


// ------------short-cut -------------
function doubleOrTriple(number, doDouble) {
    if (doDouble === true)
        return result = number * 2;
    return result = number * 3;

}

console.log(doubleOrTriple(2, true));
console.log(doubleOrTriple(8, false));

*/

/**
 * Objective: write a function to give me the sum of all numbers in an array
 * step-1: declare a function
 * step-2: call check whether the function is called properly
 * step-3: parametrs
 * step-4: pass the parameters, check whether parameter is passed in a proper format 

// --------------Sum of the Array Numbers---------------
const numbs = [55, 65, 60, 50];
function sumOfNumbers(numbers){
    let sum = 0
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;
}

// const result = sumOfNumbers(numbs);
// console.log("Sum of number is", result);
console.log("Sum of number is",sumOfNumbers(numbs));

// --------------Find even Number Only---------------
const scores = [25, 15, 20, 17, 3, 10]
function evenNumbersOnly(numbers){
    const evens = [];
    for(number of numbers){
        if(number % 2 === 0){
            evens.push(number)           
        }
    }
    return evens;
}

console.log("Even Score Only", evenNumbersOnly(scores));

// --------------Sum of even Number Only ---------------
const scores = [25, 15, 20, 17, 3, 10, 50]
function sumOffEvenNumbers(numbers) {
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            sum = sum + number
        }
    }
    return sum;
}
console.log("Sum of the Even Number is ", sumOffEvenNumbers(scores));


 */

// -------------Summary of function in JS --------------
/**
 * 
 * A block of code
 * A set of statements that performs a task  when it is called
 * Maintains a relationship whit input and output
 * 
 * practice tasks
 * Task-1: Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result
 * 
 * Task-2: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values
 * 
 * Task-3: Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1 ) as parameter and count how many 0's are there in that string.
 * 
 * Task-4: Write a function called_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.
 * */

// Task-4:
function called_even(number) {
    if (number % 2 === 0) return "Even";
    return "Odd";
}

console.log(called_even(9));
console.log(called_even(8));


// Task-3


// 


