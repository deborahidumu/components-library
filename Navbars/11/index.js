let linkFour = document.getElementById("dropdown");

linkFour.addEventListener("click", (e) => {
  e.preventDefault();
  let submenu = document.getElementById("drop-menu");
  submenu.classList.toggle("hover");
});
