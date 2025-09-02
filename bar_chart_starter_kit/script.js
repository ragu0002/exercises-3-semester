import { getRandomNum, getQ } from "../utils/utils.js";

const list = getQ("ul");
const arr = [];

setInterval(getElement, 1000);

function getElement() {
  console.log("getElemt");
  const li = document.createElement("li");
  arr.push(getRandomNum(100));

  li.style.setProperty("--height", getRandomNum(100));
  list.appendChild(li);

  if (arr.length == 21) {
    arr.shift();
    getQ("li").remove();
  }
  console.log("sliced");
}

//i get element fungsjonen blir den oppdatert hvert sekund på grunn av set intervall.
// For hver gang den blir oppdatert kommer det et nytt random nr inn i arrayet.
// På samme tid blir det lagt til et nytt li elemtent.
// Det er på denne måten arrayet vet når det har kommet nr man setter som length i
// arrayet at den skal fjerne li elementene fra starten!!! ahhhh
