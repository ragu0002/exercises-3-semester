"use strict";
setInterval(getData, 1000);

async function getData() {
  const url = "https://kea-alt-del.dk/kata-distortion/";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    showNr(result);
  } catch (error) {
    console.error(error.message);
  }
}
const nr = document.querySelector("div");
function showNr(event) {
  console.log(event.inQueue);

  document.querySelector("h1").innerText = event.inQueue;
}
