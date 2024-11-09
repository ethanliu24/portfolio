window.addEventListener("scroll", () => {
  const navBar = document.querySelector("#nav-bar");
  if (window.scrollY > 10) {
    navBar.classList.add("not-on-top");
  } else {
    navBar.classList.remove("not-on-top");
  }
});

window.addEventListener("resize", () => {
  const links = document.querySelectorAll("#links li")
  if (window.innerWidth >= 790) {
    links.forEach((elem) => {
      elem.style.display = "block"
    })
  } else {
    links.forEach((elem) => {
      elem.style.display = "none"
    })
  }
})
