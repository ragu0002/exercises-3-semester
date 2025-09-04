"use strict";

const naMe = "RAGNHILD";
console.log("name", naMe);
const nameToLower = naMe.toLowerCase();
console.log("nameToLower", nameToLower);
const nameToUpper = naMe.toUpperCase();
console.log("nameToUpper", nameToUpper);

const someLetters = naMe.substring(0, 2).toLowerCase() + naMe.substring(2, 8);
console.log("someLettersLower", someLetters);
const middleLetters = naMe.substring(0, 2) + naMe.substring(2, 3).toLowerCase() + naMe.substring(3, 8);
console.log("middleLetters", middleLetters);
