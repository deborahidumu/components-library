let linkFour = document.getElementById("dropdown");

linkFour.addEventListener("click", (e) => {
  e.preventDefault();
  let submenu = document.getElementById("submenu");
  submenu.classList.toggle("hover");
});
