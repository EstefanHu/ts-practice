"use strict";
console.log('Dave Grey');
// Tuple
let myTuple = ['dave', 32, true];
let evh = {
    name: 'eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
const greetGuitarist = (gutarist) => {
    return `Hello ${gutarist.name}`;
};
console.log(greetGuitarist(evh));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
