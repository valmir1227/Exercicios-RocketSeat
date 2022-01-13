const menuBtn = document.querySelector(".menu-btn");
const sideBar = document.querySelector(".side-bar");
const searchBtn = document.querySelector(".search");

menuBtn.addEventListener("click", () => {
  sideBar.classList.toggle("closed");
});

searchBtn.addEventListener("mouseenter", () => {
  sideBar.classList.remove("closed");
});

searchBtn.addEventListener("mouseleave", () => {
  sideBar.classList.add("closed");
});
