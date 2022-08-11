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

const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".insert-number");
const operatorButtons = document.querySelectorAll(".insert-operator");
const clearAllButton = document.getElementById("clear-all");
const clearOneButton = document.getElementById("clear-one");
screen.textContent = "";

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    screen.textContent += numberButtons[i].textContent;
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", () => {
    screen.textContent += operatorButtons[i].textContent;
  });
}

clearAllButton.addEventListener("click", () => {
  screen.textContent = "";
});

clearOneButton.addEventListener("click", () => {
  let screenText = screen.textContent;
  let newScreenText = screenText.slice(0, screenText.length - 1);
  screen.textContent = newScreenText;
});
