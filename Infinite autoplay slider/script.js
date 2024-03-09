const slideContainer = document.querySelector(".container");
const slidesContainer = document.querySelector(".container .slides");
const prevBtn = document.getElementById("slide-prev-btn");
const nextBtn = document.getElementById("slide-next-btn");

const getSlides = () => document.querySelectorAll(".container .slides .slide");

let slides = getSlides();
let index = 1;

// Deep copy clone all the child nodes also
const firstSlideClone = slides[0].cloneNode(true);
const lastSlideClone = slides[slides.length - 1].cloneNode(true);

firstSlideClone.id = "first-slide-clone";
lastSlideClone.id = "last-slide-clone";

slidesContainer.append(firstSlideClone);
slidesContainer.prepend(lastSlideClone);

const slideWidth = slides[index].clientWidth;
slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
slides = getSlides();

slidesContainer.addEventListener("transitionend", () => {
  if (slides[index]?.id === firstSlideClone.id) {
    slidesContainer.style.transition = "none";
    index = 1;
    slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index]?.id === lastSlideClone.id) {
    slidesContainer.style.transition = "none";
    index = slides.length - 2;
    slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

nextBtn.addEventListener("click", () => {
  if (index >= slides.length - 1) return;
  index++;
  slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
  slidesContainer.style.transition = "transform 0.3s ease-out";
});

prevBtn.addEventListener("click", () => {
  if (index <= 0) return;
  index--;
  slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
  slidesContainer.style.transition = "transform 0.3s ease-out";
});
