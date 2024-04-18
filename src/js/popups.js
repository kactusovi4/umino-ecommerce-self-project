const shadow = document.querySelector(".page-shadow-popup");
const openButtons = document.querySelectorAll(".popup-open");
const closeButtons = document.querySelectorAll(".popup-close");

function openPopup(el) {
  el.classList.add("active");
  shadow.classList.add("active");
  shadow.classList.remove("pointer-events-none");
}

function closePopup(el) {
  el.classList.remove("active");
  shadow.classList.remove("active");
  shadow.classList.add("pointer-events-none");
}

openButtons.forEach((el) => {
  el.addEventListener("click", function () {
    const popup = document.querySelector(`#${el.dataset.target}`);
    openPopup(popup);
  });
});

closeButtons.forEach((el) => {
  el.addEventListener("click", function () {
    const popup = this.closest(".popup-content");
    // console.log("xd");
    closePopup(popup);
  });
});

shadow.addEventListener("click", function () {
  const popup = document.querySelector(".popup-content.active");
  closePopup(popup);
});
