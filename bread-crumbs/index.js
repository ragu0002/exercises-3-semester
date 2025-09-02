import { getRandomNum, getQ } from "../utils/utils.js";
("use strict");

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];
getQ("button").addEventListener("click", klikk);

function klikk() {
  let str = "";

  // str += "Hello";
  //console.log(str);
  //&nbsp er et mellomrom som ikke kan forsvinne
  bc.forEach((elm, i) => {
    if (i < 2) {
      str += `<a href="">${elm.name}</a>`;
      str += ` / `;
      getQ("ul").innerHTML = str;
      console.log("if,if", elm.link);
    }
    if (i === 2) {
      getQ("ul").innerHTML = str + elm.name;
      console.log("else,if");
    }
  });
}
//str += `<a href="">${elm.link}</a>`;
//console.log("elm", elm.link);
//getQ("ul").innerHTML = str;
