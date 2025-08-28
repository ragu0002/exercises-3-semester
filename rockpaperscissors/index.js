"use strickt";

let userGuess;
let computerGuess;

const steinBtn = document.querySelector(".rock");
const papirBtn = document.querySelector(".paper");
const saksBtn = document.querySelector(".scissors");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const lose = document.querySelector("#lose");
const win = document.querySelector("#win");
const draw = document.querySelector("#draw");

taKnapp();
function taKnapp() {
  steinBtn.addEventListener("click", steinKlikk);
  papirBtn.addEventListener("click", papirKlikk);
  saksBtn.addEventListener("click", saksKlikk);
}

function steinKlikk() {
  userGuess = "rock";
  pcGjett();
}
function papirKlikk() {
  userGuess = "paper";
  pcGjett();
}
function saksKlikk() {
  userGuess = "scissors";
  pcGjett();
}

function pcGjett() {
  const choice_arr = ["rock", "paper", "scissors"];
  const randomNr = Math.floor(Math.random() * 3);
  computerGuess = choice_arr[randomNr];
  console.log("randomNr", randomNr);
  console.log("computerGuess", computerGuess);
  animasjonStart();
}

function animasjonStart() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  console.log("shake hands");
  setTimeout(animasjonSlutt, 1800);
}

function animasjonSlutt() {
  player1.classList.remove("shake");
  player2.classList.remove("shake");
  console.log("animation over");
  if (userGuess === "rock") {
    player1.classList.add("rock");
  }
  if (userGuess === "paper") {
    player1.classList.add("paper");
  }
  if (userGuess === "scissors") {
    player1.classList.add("scissors");
  }
  if (computerGuess === "scissors") {
    player2.classList.add("scissors");
  }
  if (computerGuess === "rock") {
    player2.classList.add("rock");
  }
  if (computerGuess === "paper") {
    player2.classList.add("paper");
  }
  if (computerGuess === userGuess) {
    visSkjerm(draw);
  } else if ((computerGuess === "scissors" && userGuess === "rock") || (computerGuess === "rock" && userGuess === "paper") || (computerGuess === "paper" && userGuess === "scissors")) {
    visSkjerm(win);
  } else {
    visSkjerm(lose);
  }

  //evaluation
}
function visSkjerm(theScreen) {
  console.log(`skjermen er ${theScreen}`);
  theScreen.classList.remove("hidden");
}
