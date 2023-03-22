let value1El = document.getElementById("first-value");
let unit1El = document.getElementById("first-unit");
let value2El = document.getElementById("second-value");
let unit2El = document.getElementById("second-unit");
let btnEl = document.getElementById("convert-btn");

//fonctions

const convertValue = () => {
  let value1 = value1El.value;
  let unit1 = unit1El.value;
  let unit2 = unit2El.value;

  let value1InLegalUnit;
  let convertedValue;

  switch (unit1) {
    case "km":
      value1InLegalUnit = value1 * 1000;
      break;
    case "cm":
      value1InLegalUnit = value1 / 100;
      break;
    case "mm":
      value1InLegalUnit = value1 / 1000;
      break;
    default:
      value1InLegalUnit = value1;
      break;
  }

  switch (unit2) {
    case "km":
      convertedValue = value1InLegalUnit / 1000;
      break;
    case "cm":
      convertedValue = value1InLegalUnit * 100;
      break;
    case "mm":
      convertedValue = value1InLegalUnit * 1000;
      break;
    default:
      value1InUnit = value1InLegalUnit;
      break;
  }
  value2El.value = convertedValue;
};

//evenement
btnEl.addEventListener("click", convertValue);
unit1El.addEventListener("change", () => {
  value2El.value = "";
});
