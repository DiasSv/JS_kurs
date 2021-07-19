"use strict";


const str = "test";

console.log(str.length); // Считает сколько внутри чего либо

console.log(str.toUpperCase()); //Переводит буквы в верхний регистр
console.log(str.toLowerCase()); //Переводит буквы в нижний регистр

let fruit = "Some text";    //поиск подстроки
console.log(fruit.indexOf('me')); 

const logg = 'hello world'; 
console.log(logg.slice(7, 12)); // отрезание куска текста или чего либо
console.log(logg.substring(6, 11)); // то же самое, только не поддерживает отр.числа
console.log(logg.substr(6, 11)); // отличие в том, что второй аргумент, это сколько элементов нам нужно вырезать

const math = 1.5;
console.log(Math.round(math)); // округляет число

const pix = "12.2px";
console.log(parseInt(pix));
console.log(parseFloat(pix));