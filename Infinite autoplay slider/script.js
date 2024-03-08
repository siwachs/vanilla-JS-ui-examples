const slideContainer = document.querySelector(".container");
const slidesContainer = document.querySelector(".container .slides");
const prevBtn = document.getElementById("slide-prev-btn");
const nextBtn = document.getElementById("slide-next-btn");

let slides = document.querySelectorAll(".container .slides .slide");
let index = 1;

let firstSlideClone = slides[0].cloneNode(true); // Deep copy clone child too
let lastSlideClone = slides[slides.length - 1].cloneNode(true);

firstSlideClone.id = "first-slide-clone";
lastSlideClone.id = "last-slide-clone";

slidesContainer.append(firstSlideClone);
slidesContainer.prepend(lastSlideClone);
