const slider = document.querySelector(".slider");
const carousel = document.querySelector(".carousel");
const prev = document.querySelector(".arrow-prev");
const next = document.querySelector(".arrow-next");
let direction;

next.addEventListener("click", () => {
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = "translate(-20%)";
});

slider.addEventListener("transitionend", () => {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
  } else {
    slider.prepend(slider.lastElementChild);
  }

  slider.style.transition = "none";
  slider.style.transform = "translate(0)";
  setTimeout(() => {
    slider.style.transition = "all 0.5s";
  });
});

prev.addEventListener("click", () => {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
    direction = 1;
  }
  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translate(20%)";
});
