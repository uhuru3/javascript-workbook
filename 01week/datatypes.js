// 1. Write a JavaScript program to display the current day and time.
const today = new Date();
const day = today.getDay();    
    
// 2. Write a JavaScript program to convert a number to a string.
const num = 15;
const n = num.toString();

// 3. Write a JavaScript program to convert a string to the number.
const stingToNum = '10';
const s = parseInt();

// 4. Write a JavaScript program that takes in different datatypes and prints out whether they are a:
    // Boolean
    console.log(typeof true);
// expected output: "boolean"

    // Null
    const person = {firstName: 'Lawerence' , lastName: 'Williams'};
    person = null;

    // Undefined
    console.log(typeof variableNotDeclared);
// expected output: "undefined";

    // Number
    console.log(typeof 42);
// expected output: "number"

    // NaN
    isNaN();

    // String
    console.log(typeof 'dance');
// expected output: "string"

// 5. Write a JavaScript program that adds 2 numbers together.
const sumOfNums= (arg1, arg2)=>{
    return arg1 + arg2
    };

// 6. Write a JavaScript program that runs only when 2 things are true.
const sumOfNums= (arg1, arg2)=>{
    if (typeOf arg1 === typeOf 'number' && typeof 'number'){
    return arg1 + arg2
     }
    };

// 7. Write a JavaScript program that runs when 1 of 2 things are true.
    const bothTrue =(arg1, arg2)=>{
      if(arg1 && arg2){
        return 'true'
      }
    };

// 8. Write a JavaScript program that runs when both things are not true.
    const checkStrings=(a,b,c)=>{
      if(typeof a === 'string' && typeof b === 'string' && typeof c === 'string'){
        return 'awesome'
      }
    };
    checkStrings('hello', '7', 'no')