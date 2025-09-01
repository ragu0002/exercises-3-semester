import { getRandomNum, getQ } from "../utils/utils.js";

const list = document.querySelector("ul");
const arr = [];

setInterval(getElement, 1000);

function getElement() {
  console.log("getElemt");
  const li = document.createElement("li");
  arr.push(getRandomNum);

  li.style.setProperty("--height", getRandomNum(100));
  list.appendChild(li);

  let result = [...arr, list.appendChild(li)];
  console.log(result);
  if (arr.length == 6) {
    arr.shift();
    document.querySelector("li").remove();
  }
  console.log("sliced");
}
