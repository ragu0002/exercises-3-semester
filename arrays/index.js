"use strict";

/*let letters = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`];
console.log(letters[4]);

let newArr = letters;
newArr[4] = `*`;

console.log(letters[4]);

const people = ["Harry", "Ron", "Hermine"];
let result;

result = people.push("Draco");
console.log("people", people);
console.log("result", result);

result = people.pop();
console.log("people", people);
console.log("result", result);

result = people.push("Neville");
console.log("people", people);
console.log("result", result);

result = people.push("Luna");
console.log("people", people);
console.log("result", result);

result = people.slice(0, 3);
console.log("people", people);
console.log("result", result);

people[1] = "Ginny";
console.log("people", people);
console.log("result", result);

result = people.push("Fred", "George");
console.log("people", people);
console.log("result", result);

result = people.indexOf("Fred");
console.log("people", people);
console.log("result", result);

result = people.slice(result, 1);
console.log("people", people);
console.log("result", result);*/

const animals = [
  {
    name: "Mandu",
    type: "cat",
  },
  {
    name: "Winston",
    type: "cat",
  },
  {
    name: "Mira",
    type: "dog",
  },
  {
    name: "Speik",
    type: "dog",
  },
];

function isCat(animals) {
  if (animals.type === "cat") {
    return true;
  } else {
    return false;
  }
}
