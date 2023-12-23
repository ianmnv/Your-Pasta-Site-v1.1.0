"use strict";

// START CAROUSEL

// Elements selection
const btnRight = document.querySelector(".btn-right");
const btnLeft = document.querySelector(".btn-left");

const boloCar = document.querySelector(".bolo-car");
const pastaCar = document.querySelector(".pasta-car");
const alfCar = document.querySelector(".alf-car");

const switchCarousel = function (car1, car2) {
  car1.classList.toggle("hidden");
  car2.classList.toggle("hidden");
};

btnRight.addEventListener("click", () => {
  if (!pastaCar.classList.contains("hidden")) {
    switchCarousel(pastaCar, alfCar);
  } else if (!alfCar.classList.contains("hidden")) {
    switchCarousel(alfCar, boloCar);
  } else if (!boloCar.classList.contains("hidden")) {
    switchCarousel(boloCar, pastaCar);
  }
});

btnLeft.addEventListener("click", () => {
  if (!pastaCar.classList.contains("hidden")) {
    switchCarousel(pastaCar, boloCar);
  } else if (!boloCar.classList.contains("hidden")) {
    switchCarousel(boloCar, alfCar);
  } else if (!alfCar.classList.contains("hidden")) {
    switchCarousel(alfCar, pastaCar);
  }
});

//  END OF CAROUSEL
