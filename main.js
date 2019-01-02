const projectCards = document.querySelectorAll(".card-project");
const projectModals = document.querySelectorAll(".modal-project");

projectCards.forEach((projectCard, i) => {
  projectCard.addEventListener("click", () => {
    projectModals[i].classList.toggle("hide");
  });
});

const windowOnClick = event => {
  const modal = Array.from(projectModals).filter(
    projectModal => !projectModal.classList.contains("hide")
  )[0];
  if (event.target === modal) {
    modal.classList.toggle("hide");
  }
};

window.addEventListener("click", windowOnClick);
// console.log(projectModals);

const mobileNavIcon = document.querySelector(".main-header__mobile-nav-icon");
mobileNavIcon.addEventListener("click", function() {
  const navList = $(".main-header__nav");
  console.log(navList);
  navList.slideToggle(200);
  if (this.getAttribute("name") == "menu") {
    this.setAttribute("name", "close");
  } else {
    this.setAttribute("name", "menu");
  }
});
