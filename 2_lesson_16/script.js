"use strict";

function showFirstMessage(text) {
    console.log(text);
    let num = 20;
}

showFirstMessage('kiss you');


function calc(a, b) {
    return(a +b);
}

console.log(calc(4, 3));
console.log(calc(5, 3));
console.log(calc(1, 3));


function ret() {    //function declaration
    let num = 50;
    //
    return num;
}

const anotherNum =  ret();
console.log(anotherNum);


const logger = function() {  //function expression
    console.log('hello');
};


const calcu = (a, b) => a + b;  //Стрелочная функция
console.log(calcu(4, 3));

