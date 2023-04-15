const numberBtn = document.querySelectorAll(".number");
const currentCalc = document.querySelector("#current");
const previousCalc = document.querySelector("#previous");
const clear = document.querySelector("#reset");
const del = document.querySelector("#delete");
const equalBtn = document.querySelector("#equal");
const symbolBtn = document.querySelectorAll(".symbol");

// Calculator

// Numbers
for (let i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener("click", () => {
    if (currentCalc.innerText === "0") {
      currentCalc.innerText = numberBtn[i].innerText;
    } else if (
      numberBtn[i].innerText === "." &&
      currentCalc.innerText.includes(".")
    ) {
      return;
    } else {
      currentCalc.innerText += numberBtn[i].innerText;
    }
  });
}

// Symbols
for (let i = 0; i < symbolBtn.length; i++) {
  symbolBtn[i].addEventListener("click", () => {
    let symbols = symbolBtn[i].value;
    if (previousCalc.innerText === "") {
      previousCalc.innerText = `${currentCalc.innerText} ${symbols}`;
      currentCalc.innerText = "0";
    } else {
      let totalValue = `${previousCalc.innerText} ${currentCalc.innerText}`;
      previousCalc.innerText = `${eval(totalValue)} ${symbols}`;
      currentCalc.innerText = "0";
    }
  });
}

// Reset button
clear.addEventListener("click", () => {
  previousCalc.innerText = "";
  currentCalc.innerText = "0";
});

// Delete button
del.addEventListener("click", () => {
  let copyNumbers = currentCalc.innerText;
  copyNumbers = copyNumbers.slice(0, -1);
  if (currentCalc.innerText.length === 1) {
    currentCalc.innerText = "0";
  } else {
    currentCalc.innerText = copyNumbers;
  }
});

// Equal button
equalBtn.addEventListener("click", () => {
  let totalValue = `${previousCalc.innerText} ${currentCalc.innerText}`;
  currentCalc.innerText = eval(totalValue);
  previousCalc.innerText = "";
});
//

// Theme switcher

const circleBtn = document.querySelector("#circle");

const root = document.documentElement;

circleBtn.addEventListener("click", () => {
  if (circleBtn.className === "circle-styles first-action") {
    circleBtn.classList.toggle("second-action");
    // theme
    root.style.setProperty("--main-background", "hsl(0, 0%, 90%)");
    root.style.setProperty(
      "--toggle-background-keypad-background",
      "hsl(0, 5%, 81%)"
    );
    root.style.setProperty("--screen-background", "hsl(0, 0%, 93%)");
    root.style.setProperty("--key-background", "hsl(185, 42%, 37%)");
    root.style.setProperty("--key-shadow", "hsl(185, 58%, 25%)");
    root.style.setProperty("--Red-key-background-toggle", "hsl(25, 98%, 40%)");
    root.style.setProperty("--Dark-red-key-shadow", "hsl(25, 99%, 27%)");
    root.style.setProperty(
      "--Light-grayish-orange-key-background",
      "hsl(45, 7%, 89%)"
    );
    root.style.setProperty("--Grayish-orange-key-shadow", "hsl(35, 11%, 61%)");
    root.style.setProperty("--Very-dark-grayish-blue", "hsl(60, 10%, 19%)");
    root.style.setProperty("--top-section", "hsl(60, 10%, 19%)");
  } else if (
    circleBtn.className === "circle-styles first-action second-action"
  ) {
    circleBtn.classList.toggle("second-action");
    circleBtn.classList.toggle("third-action");
    // theme
    root.style.setProperty("--main-background", "hsl(268, 75%, 9%)");
    root.style.setProperty(
      "--toggle-background-keypad-background",
      "hsl(268, 71%, 12%)"
    );
    root.style.setProperty("--screen-background", "hsl(268, 71%, 12%)");
    root.style.setProperty("--key-background", "hsl(281, 89%, 26%)");
    root.style.setProperty("--buttons-background", "hsl(290, 83%, 38%)");
    root.style.setProperty("--key-shadow", "hsl(285, 91%, 52%)");
    root.style.setProperty(
      "--Red-key-background-toggle",
      "hsl(176, 100%, 44%)"
    );
    root.style.setProperty("--Dark-red-key-shadow", "hsl(177, 92%, 70%)");
    root.style.setProperty(
      "--Light-grayish-orange-key-background",
      "hsl(268, 47%, 21%)"
    );
    root.style.setProperty("--Grayish-orange-key-shadow", "hsl(290, 70%, 36%)");
    root.style.setProperty("--Very-dark-grayish-blue", "hsl(52, 100%, 62%)");
    root.style.setProperty("--top-section", "hsl(52, 100%, 62%)");
  } else {
    circleBtn.classList.toggle("third-action");
    // theme
    root.style.setProperty("--main-background", "hsl(222, 26%, 31%)");
    root.style.setProperty(
      "--toggle-background-keypad-background",
      "hsl(223, 31%, 20%)"
    );
    root.style.setProperty("--screen-background", "hsl(224, 36%, 15%)");
    root.style.setProperty("--key-background", "hsl(225, 21%, 49%)");
    root.style.setProperty("--buttons-background", "hsl(0, 0%, 100%)");
    root.style.setProperty("--key-shadow", "hsl(224, 28%, 35%)");
    root.style.setProperty("--Red-key-background-toggle", "hsl(6, 63%, 50%)");
    root.style.setProperty("--Dark-red-key-shadow", "hsl(6, 70%, 34%)");
    root.style.setProperty(
      "--Light-grayish-orange-key-background",
      "hsl(30, 25%, 89%)"
    );
    root.style.setProperty("--Grayish-orange-key-shadow", "hsl(28, 16%, 65%)");
    root.style.setProperty("--Very-dark-grayish-blue", "hsl(221, 14%, 31%)");
    root.style.setProperty("--top-section", "hsl(0, 0%, 100%)");
  }
});
