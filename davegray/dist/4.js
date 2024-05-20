"use strict";
let userName;
userName = 'Amy';
const add = (a, b) => {
    return a + b;
};
const logMessage = (str) => {
    console.log(str);
};
logMessage('Hello<S-F1');
logMessage(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMessage(multiply(2, 2));
// optional params
const addAll = (a, b, c) => {
    if (c !== undefined)
        return a + b + c;
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen');
};
