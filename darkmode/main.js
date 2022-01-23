const html = document.querySelector("html");
const checkbox = document.querySelector(".checkbox");
const box = document.querySelector(".box");

function setDarkMode() {
  if (checkbox.checked) {
    localStorage.setItem("dark-mode", true);
    html.classList.add("dark-mode");
    box.style.left = "200px";
  } else {
    localStorage.removeItem("dark-mode");
    html.classList.remove("dark-mode");
    box.style.left = "0px";
  }
}

checkbox.addEventListener("change", setDarkMode);

function applyDarkMode() {
  if (!localStorage.getItem("dark-mode")) {
    html.classList.remove("dark-mode");
  } else {
    checkbox.checked = true;
    html.classList.add("dark-mode");
    box.style.left = "200px";
  }
}
applyDarkMode();
