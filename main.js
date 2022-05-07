import "./style.css";

// proměneé

const ikonkaPocasi = document.querySelectorAll("#weather-icon");
const teplota = document.querySelectorAll("#temperature span");
const input = document.querySelectorAll("#input");
const tlacitko = document.querySelectorAll(".tlacitko");

// Funkce pro debug

const debug = (error) => {
  return console.log(error);
};
