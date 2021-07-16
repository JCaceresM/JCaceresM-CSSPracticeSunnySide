const menu = document.getElementById("menuId"),
  menuContent = document.getElementById("navMenu")

menu.addEventListener("click", (e) => {
  menuContent.classList.toggle("navList")
  menuContent.classList.toggle("navListMobile")
  menuContent.classList.toggle("active")
})
window.addEventListener("resize", function () {
  if (window.innerWidth > 1440) {
    menuContent.classList.add("navList")
    menuContent.classList.remove("navListMobile")
  }
  if (
    window.innerWidth < 1440 &&
    menuContent.classList.value.includes("active")
  ) {
    menuContent.classList.remove("navList")
    menuContent.classList.add("navListMobile")
  }
})
