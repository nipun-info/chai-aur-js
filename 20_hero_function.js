
function square(number){
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

function addAll(a, b, c, d, e){
    const total = a + b + c + d + e;
    // console.log(total);
}
addAll(5, 10, 25, 20, 30)
addAll(5, 10, 25, 20) // note: if you not value the result is NaN

// How to function works argument vs parameters

function doubleIt(number){
    const doubled = number * 2;
    // console.log(number, doubled);
}
// console.log("I will call the function");
doubleIt(15);
doubleIt(100);

function difference (num1, num2){
    const diff = num1 - num2;
    // console.log(`difference of two number is ${diff}`);
    // console.log(diff);
}
// difference(45, 20);
const fatherAge = 40;
const myAge = 10
difference(fatherAge, myAge);

function add(price1, price2){
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

*/

// for a given string tell me whether it has even number of characters or not
function evenSizedString(str){
    console.log(str);
}
evenSizedString('Dhaka')


