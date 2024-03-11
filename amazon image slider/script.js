const prev = document.getElementById("slide-btn-prev");
const next = document.getElementById("slide-btn-next");
const imageContainer = document.querySelector(".slider .image-container");
const sliderImageList = document.querySelector(
  ".slider .image-container .image-list"
);
let direction = -1;

prev.addEventListener("click", () => {
  direction = 1;
  sliderImageList.style.transform = "translateX(100%)";
});

next.addEventListener("click", () => {
  direction = -1;
  sliderImageList.style.transform = "translateX(-100%)";
});

sliderImageList.addEventListener("transitionend", () => {
  if (direction === -1) {
    sliderImageList.append(sliderImageList.firstElementChild);
  } else {
    sliderImageList.prepend(sliderImageList.lastElementChild);
  }

  sliderImageList.style.transition = "none";
  sliderImageList.style.transform = "translateX(0)";
  setTimeout(() => {
    sliderImageList.style.transition = "transform 0.3s";
  });
});
