("use strict");

const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

function erElektrisk(vehicle) {
  if (vehicle.isElectric) {
    return true;
  }
}
function moreThanTwo(vehicle) {
  if (vehicle.passengers > 2) {
    return true;
  }
}
function ownedByJonas(vehicle) {
  if (vehicle.ownedBy === "Jonas") {
    return true;
  }
}
function rugBrød(vehicle) {
  if ((vehicle.fuel === "Rugbrød") & (vehicle.passengers > 1)) {
    return true;
  }
}

const rugBrødOverOne = vehicles.filter(rugBrød);
const ownedByOnlyJonas = vehicles.filter(ownedByJonas);
const moreThanTwoPassangers = vehicles.filter(moreThanTwo);
const onlyElectricVehicles = vehicles.filter(erElektrisk);
console.log(onlyElectricVehicles);

const allButton = document.querySelector("#all");
const electricButton = document.querySelector("#electric");
const overTwoButton = document.querySelector("#over_two");
const rugBrødButton = document.querySelector("#rugbrød");

allButton.addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(vehicles);
});
electricButton.addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(onlyElectricVehicles);
});

overTwoButton.addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(moreThanTwoPassangers);
});
rugBrødButton.addEventListener("click", () => {
  tbodyPointer.innerHTML = "";
  showTheseVehicles(rugBrødOverOne);
});

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    if (!each.fuel) {
      each.fuel = "";
    }
    if (!each.stops) {
      each.stops = " ";
    }
    if (!each.ownedBy) {
      each.ownedBy = " ";
    }
    if (!each.isElectric) {
      each.isElectric = "";
    }
    if (!each.isTandem) {
      each.isTandem = " ";
    }
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });
}
