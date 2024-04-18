// ssm
function initMobile() {
  console.log("is-mobile");
}
function initTablet() {
  console.log("is-tablet");
}
function initDesktop() {
  console.log("is-desktop");
  // hover animation
  // TODO: complete this animation
  // document.addEventListener("DOMContentLoaded", function () {
  //   document.addEventListener("mouseout", function ({ target }) {
  //     if (!target.classList.contains("hover-flow")) {
  //       return;
  //     }
  //     target.classList.remove("animate__animated");
  //     target.classList.remove("animate__fadeInRight");
  //     target.classList.remove("animate__fadeInUp");
  //   });

  //   document.addEventListener("mouseover", function ({ target }) {
  //     if (!target.classList.contains("swiper-card")) {
  //       return;
  //     }
  //     target.classList.add("animate__animated");
  //     console.log("xd");
  //     if (target.classList.contains("hover-flow_right")) {
  //       target.classList.add("animate__fadeInRight");
  //     }
  //     if (target.classList.contains("hover-flow_up")) {
  //       target.classList.add("animate__fadeInUp");
  //     }
  //   });
  // });
}
ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 568px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 569px) and (max-width: 768px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desctop",
    query: "(min-width: 769px) and (max-width: 1024px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "large-desktop",
    query: "(min-width: 1025px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);

// mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#mobile-menu");
  const menuList = document.querySelector("#mobile-menu-list");
  const menuCategoriesList = document.querySelector("#mobile-menu-categories");

  menu.addEventListener("click", function ({ target }) {
    if (target.getAttribute("data-menu") == "main-list") {
      target.nextElementSibling.classList.add("opacity-60");
      target.classList.remove("opacity-60");
      menuList.classList.remove("hidden");
      menuCategoriesList.classList.add("hidden");
    } else if (target.getAttribute("data-menu") == "categories-list") {
      target.previousElementSibling.classList.add("opacity-60");
      target.classList.remove("opacity-60");
      menuList.classList.add("hidden");
      menuCategoriesList.classList.remove("hidden");
    }
  });
});

// elements fade (still needs development)
const target = document.querySelectorAll(".content-section");
function elFade(entries, observer) {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      gsap.fromTo(
        entry.target,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
        },
      );
    } else {
      gsap.fromTo(entry.target, { opacity: 1 }, { opacity: 0, duration: 0.3 });
    }
  });
}
function createObserver(target, callback) {
  const options = {
    root: null,
    threshold: 0.2,
  };
  const observer = new IntersectionObserver(callback, options);
  target.forEach((el) => observer.observe(el));
}
createObserver(target, elFade);

// top sale allert

//  closing alert
document.addEventListener("click", function ({ target }) {
  if (!target.classList.contains("top-sale-alert__close-button")) {
    return;
  }
  target.closest(".top-sale-alert").remove();
});
//  countdown
function getTimeRemaining(endtime) {
  const today = new Date();
  const total = Date.parse(endtime) - Date.parse(today);
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}
function updateTimeValue(span, value) {
  span.style.setProperty("--value", `${value}`);
}
function initializeClock(endtime) {
  const clockEls = document.querySelectorAll(".top-sale-alert .countdown span");
  const daysSpan = clockEls[0];
  const hoursSpan = clockEls[1];
  const minutesSpan = clockEls[2];
  const secondsSpan = clockEls[3];

  function updateClock() {
    let t = getTimeRemaining(endtime);

    updateTimeValue(daysSpan, t.days);
    updateTimeValue(hoursSpan, t.hours);
    updateTimeValue(minutesSpan, t.minutes);
    updateTimeValue(secondsSpan, t.seconds);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}
const todaay = new Date();
const endDate = new Date(todaay.getTime() + 120 * 60 * 1000 * 24);
// console.log(endDate);
initializeClock(endDate);

// elements interaction on scroll
document.addEventListener("DOMContentLoaded", function () {
  const documentHeight = document.documentElement.scrollHeight;

  function toggleElOnscroll(offset, cbShow, cbHide) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > offset) {
        cbShow();
      } else {
        cbHide();
      }
    });
  }

  function toggleClasses(classes, el, dir) {
    return function () {
      if (dir) {
        classes.forEach((c) => el.classList.add(c));
      } else {
        classes.forEach((c) => el.classList.remove(c));
      }
    };
  }

  // for header and mobile menu
  const stickyHeader = document.querySelector(".sticky-header");
  const headerClasses = ["sticky", "animate__slideInDown", "animate__animated"];
  const mobileMenu = document.querySelector("#mobile-bottom-menu");
  const mobileMenuClasses = ["translate-y-0", "opacity-100"];
  toggleElOnscroll(
    stickyHeader.offsetTop + stickyHeader.offsetHeight * 1.75,
    toggleClasses(headerClasses, stickyHeader, true),
    toggleClasses(headerClasses, stickyHeader, false),
  );
  toggleElOnscroll(
    stickyHeader.offsetTop + stickyHeader.offsetHeight * 1.75,
    toggleClasses(mobileMenuClasses, mobileMenu, true),
    toggleClasses(mobileMenuClasses, mobileMenu, false),
  );

  // for scroll up button
  const scrollUp = document.querySelector(".scroll-up-button");
  scrollUp.classList.add("hidden");
  const scrollUpFill = document.querySelector(".scroll-up-button__fill");
  window.addEventListener("scroll", function () {
    let scrollPrecentage =
      window.scrollY / (documentHeight - window.innerHeight);
    scrollUpFill.style.height = `${Math.round(scrollPrecentage * 100)}%`;
    if (scrollPrecentage > 0.1) {
      scrollUp.classList.remove("hidden");
      scrollUp.classList.add("animate__zoomIn", "animate__animated");
    } else {
      scrollUp.classList.add("hidden");
      scrollUp.classList.remove("animate__zoomIn", "animate__animated");
    }
  });
});

// login switchers
document.addEventListener("DOMContentLoaded", function () {
  const loginSwitchers = document.querySelectorAll(".login-switcher");
  const loginParts = document.querySelectorAll(".login-part");
  loginSwitchers.forEach((el) => {
    el.addEventListener("click", function () {
      loginParts.forEach((part) => {
        if (part.id === this.dataset.target) {
          part.classList.toggle("hidden");
        } else {
          if (!part.classList.contains("hidden")) {
            part.classList.add("hidden");
          }
        }
      });
    });
  });
});
