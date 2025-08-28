"use strict";

const toHigh = document.querySelector(".to_high");
const toLow = document.querySelector(".to_low");
const correct = document.querySelector(".correct");
const tryAgain = document.querySelector(".try_again");
const text = document.querySelector("h2");
const number = document.querySelector(".feedback");

let lowNum = 0;
let highNum = 100;
let guess;
let nrGuess;

startScreen();
function startScreen() {
  guess = "Guess a number between 1 and 100";
  tryAgain.addEventListener("click", computerGuess);

  nrGuess = 0;
  text.innerText = guess;
}

function computerGuess() {
  toHigh.classList.remove("hide");
  toLow.classList.remove("hide");
  correct.classList.remove("hide");
  tryAgain.classList.add("hide");

  toHigh.addEventListener("click", forHoyt);
  toLow.addEventListener("click", forLavt);
  correct.addEventListener("click", riktig);
  guess = Math.round((highNum + lowNum) / 2);
  text.innerText = guess;
  number.innerText = `Computer guesses:${nrGuess + 1}`;
}

function forLavt() {
  nrGuess++;
  lowNum = guess;
  computerGuess();
  number.innerText = `Computer guesses:${nrGuess + 1}`;
}
function forHoyt() {
  highNum = guess;
  nrGuess++;
  computerGuess();
  number.innerText = `Computer guesses:${nrGuess + 1}`;
}

function riktig() {
  tryAgain.classList.remove("hide");
  toHigh.classList.add("hide");
  toLow.classList.add("hide");
  correct.classList.add("hide");

  text.innerText = "Queen shit!!!";
  tryAgain.firstChild.innerText = "Try again!";
  lowNum = 0;
  highNum = 100;
  nrGuess = 0;
}
