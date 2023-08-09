let hamburger = document.getElementById("hamburger");
let closebar = document.getElementById("close");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  let submenu = document.querySelector("nav");
  submenu.classList.toggle("show-nav");

  let dropmenu = document.getElementById("drop-menu");
  dropmenu.classList.toggle("show-body");
});

closebar.addEventListener("click", (e) => {
  e.preventDefault();
  let submenu = document.getElementById("drop-menu");
  submenu.classList.toggle("show-body");

  if (!submenu.classList.contains("show")) {
    hamburger.classList.add("show");
    closebar.classList.remove("show");
  }
});
