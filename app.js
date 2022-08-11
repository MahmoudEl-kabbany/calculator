const screen = document.querySelector(".screen");
const insertButtons = document.querySelectorAll(".insert");
screen.textContent = "";
for (let i = 0; i < insertButtons.length; i++) {
  insertButtons[i].addEventListener("click", () => {
    screen.textContent += insertButtons[i].textContent;
  });
}
