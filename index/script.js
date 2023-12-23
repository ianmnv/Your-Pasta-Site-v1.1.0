"use strict";

// CAROUSEL

// Elements selection
const btns = document.querySelectorAll(".btn");
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");

const boloCar = document.querySelector(".bolo-car");
const pastaCar = document.querySelector(".pasta-car");
const alfCar = document.querySelector(".alf-car");

const allCarousels = document.querySelectorAll(".car"); // Nodelist (array)

btnRight.addEventListener("click", () => {
  if (!pastaCar.classList.contains("hidden")) {
    pastaCar.classList.add("hidden");
    alfCar.classList.remove("hidden");
  } else if (!alfCar.classList.contains("hidden")) {
    alfCar.classList.add("hidden");
    boloCar.classList.remove("hidden");
  } else if (!boloCar.classList.contains("hidden")) {
    boloCar.classList.add("hidden");
    pastaCar.classList.remove("hidden");
  }
});

btnLeft.addEventListener("click", () => {
  if (!pastaCar.classList.contains("hidden")) {
    pastaCar.classList.add("hidden");
    boloCar.classList.remove("hidden");
  } else if (!boloCar.classList.contains("hidden")) {
    boloCar.classList.add("hidden");
    alfCar.classList.remove("hidden");
  } else if (!alfCar.classList.contains("hidden")) {
    alfCar.classList.add("hidden");
    pastaCar.classList.remove("hidden");
  }
});
/*

// function to switch car components
const switchCars = function (firstCar, secondCar) {
  firstCar.classList.add("hidden");
  secondCar.classList.remove("hidden");
};

// Bolognese element
const btnRBol = document.querySelector(".btn-r-bol");
const btnLBol = document.querySelector(".btn-l-bol");

btnRBol.addEventListener("click", () => {
  // boloCar.classList.add("hidden");
  // difTypeCar.classList.remove("hidden");

  switchCars(boloCar, difTypeCar);
});

btnLBol.addEventListener("click", () => {
  // boloCar.classList.add("hidden");
  // alfCar.classList.remove("hidden");

  switchCars(boloCar, alfCar);
});

// Pasta element
const difTypeCar = document.querySelector(".type-pas-car");
const btnRPas = document.querySelector(".btn-r-pas");
const btnLPas = document.querySelector(".btn-l-pas");

btnRPas.addEventListener("click", () => {
  // difTypeCar.classList.add("hidden");
  // alfCar.classList.remove("hidden");

  switchCars(difTypeCar, alfCar);
});

btnLPas.addEventListener("click", () => {
  // difTypeCar.classList.add("hidden");
  // boloCar.classList.remove("hidden");

  switchCars(difTypeCar, boloCar);
});

// Alfredo element
const alfCar = document.querySelector(".alf-car");
const btnRAl = document.querySelector(".btn-r-al");
const btnLAl = document.querySelector(".btn-l-al");

btnRAl.addEventListener("click", () => {
  // alfCar.classList.add("hidden");
  // boloCar.classList.remove("hidden");

  switchCars(alfCar, boloCar);
});

btnLAl.addEventListener("click", () => {
  // alfCar.classList.add("hidden");
  // difTypeCar.classList.remove("hidden");

  switchCars(alfCar, difTypeCar);
});

*/

//  END OF CAROUSEL
