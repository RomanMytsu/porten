const openMenu = document.querySelector(".open-mob-menu");
const mobMenu = document.querySelector("#mob-menu");
const closeMenu = document.querySelector(".close-mob-menu");

openMenu.addEventListener("click", onOpenMobMenu);
closeMenu.addEventListener("click", onCloseMobMenu);
window.addEventListener("resize", windowWidth);

document.removeEventListener("keydown", escCloseHandler);

function onOpenMobMenu() {
  mobMenu.style.display = "block";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  document.addEventListener("keydown", escCloseHandler);
}

function onCloseMobMenu() {
  mobMenu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "block";
}

function escCloseHandler(e) {
  if (e.key === "Escape") {
    onCloseMobMenu();
  }
}

function windowWidth() {
  if (window.innerWidth >= 768) {
    openMenu.style.display = "none";
  } else {
    openMenu.style.display = "block";
  }
}
windowWidth();
