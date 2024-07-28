
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
    console.log(number, doubled);
}
console.log("I will call the function");
doubleIt(15);
doubleIt(100);