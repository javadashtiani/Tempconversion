let inputData = document.getElementById("data");
let title = document.querySelector(".temp-title");
let result = document.querySelector(".result");
let convertBtn = document.getElementById("convert");
let ResetBtn = document.getElementById("reset");
let changeBtn = document.getElementById("change");

// Convert----------------------------------------------------
convertBtn.addEventListener("click", () => {
  let inputDataValue = inputData.value;
  // isNaN = Not a Number//
  if (inputDataValue === "" || isNaN(inputDataValue)) {
    result.innerHTML = "Insert correct value !";
    result.style.color = "#dc2626";
  } else {
    if (title.innerHTML === "Converter °C to °F") {
      let formula = (inputDataValue * 9) / 5 + 32; //°C to °F
      result.innerHTML = "Convert temp is : " + formula + " °F ";
      result.style.color = "#06b6d4";
    } else {
      let farFormula = ((inputDataValue - 32) * 5) / 9; //°F to °C
      result.innerHTML = "Convert temp is : " + farFormula.toFixed(2) + " °C ";
      result.style.color = "#f97316";
    }
  }
  // Focus-----------------------------------------------------
  inputData.addEventListener("focus", (inp) => {
    result.innerHTML = "";
    inp.target.value = "";
  });
});
//   Reset ----------------------------------------------------
ResetBtn.addEventListener("click", () => {
  inputData.value = "";
  result.innerHTML = "";
});
//   Change ---------------------------------------------------
let flag = 1;
changeBtn.addEventListener("click", () => {
  inputData.value = "";
  result.innerHTML = "";
  if (flag % 2) {
    title.innerHTML = "Converter °F to °C";
    inputData.setAttribute("placeholder", "°F");
    document.title = "Converter °F to °C"; //title is changed
  } else {
    title.innerHTML = "Converter °C to °F";
    inputData.setAttribute("placeholder", "°C");
    document.title = "Converter °C to °F"; //title is changed again
  }
  flag++;
});
