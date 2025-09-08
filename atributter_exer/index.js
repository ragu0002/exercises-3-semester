"use strict";

document.querySelector("button").addEventListener("click", klikk);

function klikk(evt) {
  console.log(evt.target);
  if (document.querySelector("h1").dataset.filter === "bat") {
    document.querySelector("h1").dataset.filter = "fox";
  } else {
    document.querySelector("h1").dataset.filter = "bat";
  }
}
