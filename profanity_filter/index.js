"use strict";

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let text = (document.querySelector("p").innerText = "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning");
console.log("text", text);
const buttonChange = document.querySelector(".button");
//const searchTerm = " ";
//console.log("text", text);
let bad = "bad";
const badWord = curseWords;
buttonChange.addEventListener("click", filterWords);

console.log("badWord", badWord);

function filterWords() {
  console.log("button click");
  curseWords.forEach((curseWord) => {
    console.log("curseWord", curseWord);
    text = text.replaceAll(curseWord.bad, curseWord.good);
  });

  console.log("Done text", text);
  document.querySelector("p").innerText = text;
}

/*
const theText = "Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning";
const theTextArr = theText.split("var");
console.log(theTextArr);
console.log(theTextArr.join("const"));
*/
/*
const fullName = "Klaus Mandal Hansen";

const fullNameArr = fullName.split(" ");
console.log("fornavn er ", fullNameArr[1]);
*/
