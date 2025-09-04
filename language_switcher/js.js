"use strict";
const superiorObject = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";
const selectElement = document.querySelector(".language");
const result = document.querySelector(".result");
showLanguage(superiorObject[1]);
console.log(superiorObject[locale]);

let qsl = superiorObject[locale].texts[0].location;
let two = superiorObject[locale].texts[1].location;
const texts = superiorObject[locale].texts;
// const changeHeader = document.querySelector(qsl);
// const changeFooter = document.querySelector(two);

selectElement.addEventListener("change", (event) => {
  locale = event.target.value;

  showLanguage(superiorObject[1]);
});
function showLanguage() {
  superiorObject[locale].texts.forEach((elm) => {
    console.log(elm.text);
    console.log(elm.location);
    console.log("***************");
    document.querySelector(elm.location).textContent = elm.text;
  });

  //  changeHeader.textContent = texts[0].text;
  // changeFooter.textContent = texts[1].text;
}
