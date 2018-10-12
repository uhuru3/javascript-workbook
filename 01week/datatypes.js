'use strict';
console.log('here');
//Write a JavaScript program that adds 2 numbers together.
const sumOfTwoNumbers=(num1, num2)=>{
    return num1+num2

}; 

sumOfTwoNumbers(3,2);

// Write a JavaScript program that only runs when 2 things are true.

// function that recieves two items, if those two things are true.
// methods: function, 2 arguments, if/ then statement

const evaluatesToTrue=(arg1, arg2)=> {
    if(arg1 && arg2){
        return 'both are true'
    }else{
        return 'nope'
    }
};

evaluatesToTrue(4, 6);
evaluatesToTrue(null, 6);

const oneArgumentIsTrue=(arg1, arg2)=> arg1 || arg2;