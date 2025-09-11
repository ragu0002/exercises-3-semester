"use strict";

const color = document.querySelector("body");

function moveListener(event) {
  console.log("clientX: " + event.clientX);

  console.log("clientY: " + event.clientY);
  const value1 = 233;
  const value2 = event.clientX % 256;
  const value3 = event.clientY % 256;
  const colorString = `rgb(${value1}, ${value2}, ${value3})`;
  const newBacgroundcolor = colorString;
  color.style.setProperty("background-color", newBacgroundcolor);
}

document.addEventListener("mousemove", moveListener);
