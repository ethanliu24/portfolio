window.addEventListener("scroll", () => {
  const navBar = document.querySelector(".nav-bar");
  console.log(navBar)
  if (window.scrollY > 10) {
    navBar.classList.add("not-on-top");
  } else {
    navBar.classList.remove("not-on-top");
  }
});
