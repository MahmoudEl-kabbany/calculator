const screen = document.querySelector(".screen");
const insertButtons = document.querySelectorAll(".insert");
const clearAllButton = document.getElementById("clear-all");
const clearOneButton = document.getElementById("clear-one");
screen.textContent = "";

for (let i = 0; i < insertButtons.length; i++) {
  insertButtons[i].addEventListener("click", () => {
    screen.textContent += insertButtons[i].textContent;
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
