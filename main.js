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
  if (modal) {
    const closeIcon = modal.querySelector(".close-icon");
    const closeButton = modal.querySelector(".btn-close");
    const target = event.target;
    if (target === modal || target === closeButton || target === closeIcon) {
      modal.classList.toggle("hide");
    }
  }
};

window.addEventListener("click", windowOnClick);
// console.log(projectModals);

const mobileNavIcon = document.querySelector(".main-header__mobile-nav-icon");
mobileNavIcon.addEventListener("click", function() {
  const navList = $(".main-header__nav");
  navList.slideToggle(200);
  if (this.getAttribute("name") == "menu") {
    this.setAttribute("name", "close");
  } else {
    this.setAttribute("name", "menu");
  }
});

// nav effects
const navItems = $(".main-header__nav a");

$(window).scroll(function() {
  const curPos = $(window).scrollTop();
  navItems.each(function() {
    const section = $($(this).attr("href"));
    const pos = section.position().top;
    const offset = window.innerHeight / 3;
    if (pos <= curPos + offset && pos + section.height() > curPos + offset) {
      $(this).removeClass("active");
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});
