let hamburger = document.getElementById("hamburger");
let closebar = document.getElementById("close");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  let submenu = document.getElementById("drop-menu");
  submenu.classList.toggle("show-body");

  if (submenu.classList.contains("show")) {
    hamburger.classList.remove("show");
    closebar.classList.add("show");
  }
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
