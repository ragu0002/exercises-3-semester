"use strict";

const screen = document.querySelector(".screen");
const countDown = document.querySelector("button");

startScreen();

function startScreen() {
  countDown.classList.add("count-down-bt");
  countDown.addEventListener("animationend", stopAnimation);
  document.addEventListener("mousemove", stopAnimation);
}

function stopAnimation() {
  const newBacgroundcolor = "rgb(33, 22, 230)";
  screen.style.setProperty("background-color", newBacgroundcolor);
  countDown.classList.remove("count-down-bt");
  countDown.classList.add("hide");
}
