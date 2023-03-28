gsap.registerPlugin(Flip);

// const links = document.querySelectorAll(".nav-item a");
// const activeNav = document.querySelector(".active-nav");

// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     const state = Flip.getState(activeNav);

//     link.appendChild(activeNav);
//     Flip.from(state, {
//       duration: 0.5,
//       absolute: true,
//     });
//   });
// });

const projects = document.querySelectorAll(".project");

projects.forEach((project, index) => {
  project.addEventListener("click", () => {
    const state = Flip.getState(projects);

    const isProjectActive = project.classList.contains("active");
    projects.forEach((otherProjects, otherIndex, e) => {
      if (
        window.event.target.className !== "siteLinks" &&
        window.event.target.className !== "githubLinks" &&
        window.event.target.className !== "imgProject"
      ) {
        otherProjects.classList.remove("active");
      }
      otherProjects.classList.remove("is-inactive");
      if (!isProjectActive && index !== otherIndex) {
        otherProjects.classList.add("is-inactive");
      }
    });

    if (!isProjectActive) project.classList.add("active");

    Flip.from(state, {
      duration: 1,
      ease: "expo.out",
      absoluteOnLeave: true,
    });
  });
});

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

console.log("Caso voce esteja mexendo na responsividade vai precisar dar um F5 para ele mudar, esse comportamento acontece por eu utilizar o canvas")
