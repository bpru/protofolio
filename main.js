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

// const resetNavColors = () => {
//   document.querySelectorAll(".main-header__nav-item a").forEach(elm => {
//     elm.setAttribute("style", "color: #fff");
//   });
// };

// const waypointHome = new Waypoint({
//   element: document.querySelector(".landing-text-box"),
//   handler: function() {
//     resetNavColors();
//     document.getElementById("nav-home").setAttribute("style", "color: #048dfd");
//   }
// });

// const waypointProjects = new Waypoint({
//   element: document.getElementById("section-projects"),
//   handler: function() {
//     resetNavColors();
//     document
//       .getElementById("nav-projects")
//       .setAttribute("style", "color: #048dfd");
//   },
//   offset: "20%"
// });

// const waypointAboutMe = new Waypoint({
//   element: document.getElementById("section-about-me"),
//   handler: function() {
//     resetNavColors();
//     document
//       .getElementById("nav-about-me")
//       .setAttribute("style", "color: #048dfd");
//   },
//   offset: "20%"
// });
// const waypointContactMe = new Waypoint({
//   element: document.getElementById("section-contact-me"),
//   handler: function() {
//     resetNavColors();
//     document
//       .getElementById("nav-contact-me")
//       .setAttribute("style", "color: #048dfd");
//   },
//   offset: "20%"
// });
