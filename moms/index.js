"use strict";
/*
const beløp = "350";
const moms = "0.25";
momsBeløp(beløp, beløp * moms);
function momsBeløp(en, to) {
  console.log(`hvis beløpet er ${en} er momsen ${to}`);
}
*/

momsBeløp(300);

function momsBeløp(beloeb, moms = 25) {
  const beloebMedMoms = beloeb + (beloeb * moms) / 100;
  console.log(beloebMedMoms);
}
