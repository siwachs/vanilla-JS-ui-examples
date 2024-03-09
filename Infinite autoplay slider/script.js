const slideContainer = document.querySelector(".container");
const slidesContainer = document.querySelector(".container .slides");
const prevBtn = document.getElementById("slide-prev-btn");
const nextBtn = document.getElementById("slide-next-btn");
let sliderInterval;
const interval = 3600;

const getSlides = () => document.querySelectorAll(".container .slides .slide");

let slides = getSlides();
let index = 1;

let firstSlideClone = slides[0].cloneNode(true); // Deep copy clone child too
let lastSlideClone = slides[slides.length - 1].cloneNode(true);

firstSlideClone.id = "first-slide-clone";
lastSlideClone.id = "last-slide-clone";

slidesContainer.append(firstSlideClone);
slidesContainer.prepend(lastSlideClone);
slides = getSlides();

const slideWidth = slides[index].clientWidth;
slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;

const autoPlaySlides = () => {
  sliderInterval = setInterval(() => {
    index++;
    slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
    slidesContainer.style.transition = "transform 0.3s";
  }, interval);
};

slidesContainer.addEventListener("transitionend", () => {
  slides = getSlides();
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

slidesContainer.addEventListener("mouseenter", () => {
  clearInterval(sliderInterval);
});
slideContainer.addEventListener("mouseleave", autoPlaySlides);
autoPlaySlides();

nextBtn.addEventListener("click", () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
  slidesContainer.style.transition = "transform 0.3s";
});

prevBtn.addEventListener("click", () => {
  if (index <= 0) return;
  index--;
  slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
  slidesContainer.style.transition = "transform 0.3s";
});
