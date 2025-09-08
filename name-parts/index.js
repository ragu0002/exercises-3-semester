"use strict";

//const fullName = "Ragnhild Myrvang Gulbraar";
//const firstName = fullName.substring(0, 8);
//console.log("firstName", firstName);
//const middleName = fullName.substring(9, 16);
//console.log("middleName", middleName);
//const lastName = fullName.substring(16, 100);
//console.log("lastName", lastName);

const fullName = "Ragnhild Myrvang Gulbraar";
const searchTerm = " ";
const indexOfFirst = fullName.indexOf(searchTerm);
const indexOfSecond = fullName.indexOf(searchTerm) + 1;

const firstName = fullName.substring(0, indexOfFirst);
console.log("firstName", firstName);
const middleName = fullName.substring(indexOfFirst + 1, fullName.lastIndexOf(searchTerm));
console.log("middleName", middleName);

const lastName = fullName.substring(fullName.lastIndexOf(searchTerm) + 1);
console.log("lastName", lastName);

//const lastName = fullName.substring(indexOfSecond, fullName.indexOf(searchTerm, indexOfSecond + 1));
//console.log("lastName", lastName);
