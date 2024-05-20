"use strict";
console.log('five');
let a = 'hello';
let b = a;
let c = a;
let d = 'world';
let e = 'world';
let f = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
let numVal = addOrConcat(2, 2, 'add');
let numVal2 = addOrConcat(2, 2, 'concat');
10;
// the DOM
