const screen = document.querySelector(".screen");
const insertButtons = document.querySelectorAll(".insert");
const clearAllButton = document.getElementById("clear-all");
screen.textContent = "";

for (let i = 0; i < insertButtons.length; i++) {
  insertButtons[i].addEventListener("click", () => {
    screen.textContent += insertButtons[i].textContent;
  });
}

clearAllButton.addEventListener("click", () => {
  screen.textContent = "";
});
