// swiper front face
const swiperFront = new Swiper(".front-face", {
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  // autoplay: {
  //   delay: 7000,
  // },
  fadeEffect: {
    crossFade: true,
  },
  breakpoints: {
    768: {
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-forward",
        prevEl: ".swiper-button-backward",
        clickable: true,
      },
    },
  },
});

// front face heading text flow
function textFlow(currentSlide) {
  const headerFlows = currentSlide.querySelectorAll(".header-flow div");

  for (let i = 0; i < headerFlows.length; i++) {
    const el = headerFlows[i];
    el.style.transform = "translateY(100%)";
    gsap.fromTo(
      el,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.4 + (i + 1) * 0.2,
        ease: "none",
        delay: 0.4,
      },
    );
  }
}
textFlow(swiperFront.slides[swiperFront.activeIndex]);
swiperFront.on("slideChange", () => {
  const currentSlide = swiperFront.slides[swiperFront.activeIndex];
  textFlow(currentSlide);
});

// swiper cards
const swiperCards = new Swiper(".swiper-cards", {
  slidesPerView: 2,
  spaceBetween: 20,
  mobilefirst: true,
  navigation: {
    nextEl: ".swiper-button-forward",
    prevEl: ".swiper-button-backward",
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

const arrows = document.querySelectorAll(
  ".swiper-arrow-container .swiper-button-backward, .swiper-button-forward",
);
arrows.forEach((arrow) => {
  arrow.addEventListener("DOMContentLoaded", function () {
    if (arrow.classList.contains("swiper-button-disabled")) {
      arrow.classList.add("opacity-50");
    } else {
      arrow.classList.remove("opacity-50");
    }
  });
  arrow.addEventListener("click", function () {
    // console.log("xd");
    arrows.forEach((arrow) => {
      if (arrow.classList.contains("swiper-button-disabled")) {
        arrow.classList.add("opacity-50");
      } else {
        arrow.classList.remove("opacity-50");
      }
    });
  });
});

// blog swiper
const swiperBlog = new Swiper(".swiper-blog", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-forward",
    prevEl: ".swiper-button-backward",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
