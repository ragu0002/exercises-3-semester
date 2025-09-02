import { getRandomNum, getQ } from "../utils/utils.js";

const list = document.querySelector("ul");
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
    document.querySelector("li").remove();
  }
  console.log("sliced");
}
