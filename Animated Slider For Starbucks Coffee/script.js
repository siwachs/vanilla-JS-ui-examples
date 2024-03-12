const prev = document.getElementById("prev");
const next = document.getElementById("next");
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel .list .item");
const totalItems = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;

const changeSlide = () => {
  const prevActiveSlide = document.querySelector(
    ".carousel .list .item.active"
  );
  const other_1 = document.querySelector(".carousel .list .item.other_1");
  const other_2 = document.querySelector(".carousel .list .item.other_2");

  if (prevActiveSlide) prevActiveSlide.classList.remove("active");
  if (other_1) other_1.classList.remove("other_1");
  if (other_2) other_2.classList.remove("other_2");

  // Refresh Animation
  items.forEach((item) => {
    item.querySelector(".image img").style.animation = "none";
    item.querySelector(".image figcaption").style.animation = "none";
    item.offsetWidth; // Trigger reflow
    item.querySelector(".image img").style.animation = "";
    item.querySelector(".image figcaption").style.animation = "";
  });

  items[active].classList.add("active");
  items[other_1].classList.add("other_1");
  items[other_2].classList.add("other_2");
};

next.onclick = () => {
  carousel.classList.remove("prev");
  carousel.classList.add("next");
  active = active + 1 >= totalItems ? 0 : active + 1;
  other_1 = active - 1 < 0 ? totalItems - 1 : active - 1;
  other_2 = active + 1 >= totalItems ? 0 : active + 1;
  changeSlide();
};

prev.onclick = () => {
  carousel.classList.remove("next");
  carousel.classList.add("prev");
  active = active - 1 < 0 ? totalItems - 1 : active - 1;
  other_1 = active + 1 > totalItems ? 0 : active + 1;
  other_2 = active + 1 > totalItems ? 0 : active + 1;
  changeSlide();
};
