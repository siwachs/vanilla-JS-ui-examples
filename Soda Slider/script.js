const listItems = document.querySelectorAll(".carousel .list .item");
const carousel = document.querySelector(".carousel");
const dots = document.querySelectorAll(".carousel .dots li");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let lastItemPostition = listItems.length - 1;
let active = 0;
let zIndexOfActiveItem = 2;

next.onclick = () => {
  const newActive = active + 1 > lastItemPostition ? 0 : active + 1;
  setActiveItem(newActive, showSlider);
};

prev.onclick = () => {
  const newActive = active - 1 < 0 ? lastItemPostition : active - 1;
  setActiveItem(newActive, showSlider);
};

const setActiveItem = (newActive, showSlider) => {
  if (newActive === active) return;
  const actionType = newActive > active ? "next" : "prev";
  active = newActive;
  showSlider(actionType);
};

let removeEffect;

const showSlider = (actionType) => {
  const oldActiveItem = document.querySelector(".carousel .list .item");
  if (oldActiveItem) {
    oldActiveItem.classList.remove("active");
    zIndexOfActiveItem++;
    listItems[active].style.zIndex = zIndexOfActiveItem;
    listItems[active].classList.add("active");
  }

  // Add a animation while switching slides
  carousel.classList.add("effect");

  const oldActiveDot = document.querySelector(".carousel .dots li.active");
  if (oldActiveDot) {
    oldActiveDot.classList.remove("active");
    dots[active].classList.add("active");
  }

  removeEffect = setTimeout(() => {
    carousel.classList.remove("effect");
  }, 1500);
};
