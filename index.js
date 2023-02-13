const openBtn = document.getElementById("open-btn");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", openMenu);

function openMenu() {
  menu.classList.remove("hidden");
}

closeBtn.addEventListener("click", closeMenu);

function closeMenu() {
  menu.classList.add("hidden");
}
