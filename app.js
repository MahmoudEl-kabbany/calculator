const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function () {
  let onlyNumbers = true;
  let screenText = screen.textContent;

  for (let i = 0; i < screenText.length; i++) {
    if (operators.includes(screenText[i])) {
      onlyNumbers = false;
    }
  }

  if (operators.includes(screenText[screenText.length - 1])) {
    console.log("There must be a number at the end");
  } else if (onlyNumbers === true) {
    console.log(screenText);
  } else {
    console.log("correct");
  }
};

const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".insert-number");
const operatorButtons = document.querySelectorAll(".insert-operator");
const clearAllButton = document.getElementById("clear-all");
const clearOneButton = document.getElementById("clear-one");
const equalButton = document.getElementById("equal");
screen.textContent = "0";

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["÷", "+", "−", "x"];

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    if (screen.textContent == "0") {
      screen.textContent = numberButtons[i].textContent;
    } else {
      screen.textContent = screen.textContent + numberButtons[i].textContent;
    }
    for (let i = 0; i < operatorButtons.length; i++) {
      operatorButtons[i].removeAttribute("disabled", "");
    }
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", () => {
    screen.textContent += operatorButtons[i].textContent;
    for (let i = 0; i < operatorButtons.length; i++) {
      operatorButtons[i].setAttribute("disabled", "");
    }
  });
}

clearAllButton.addEventListener("click", () => {
  screen.textContent = "0";
  for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].removeAttribute("disabled", "");
  }
});

clearOneButton.addEventListener("click", () => {
  let screenText = screen.textContent;
  if (operators.includes(screenText[screenText.length - 1])) {
    for (let i = 0; i < operatorButtons.length; i++) {
      operatorButtons[i].removeAttribute("disabled", "");
    }
  }
  if (operators.includes(screenText[screenText.length - 2])) {
    for (let i = 0; i < operatorButtons.length; i++) {
      operatorButtons[i].setAttribute("disabled", "");
    }
  }
  let newScreenText = screenText.slice(0, screenText.length - 1);
  if (newScreenText === "") {
    screen.textContent = "0";
  } else {
    screen.textContent = newScreenText;
  }
});

equalButton.addEventListener("click", operate);
