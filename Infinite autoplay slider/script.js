const slideContainer = document.querySelector(".container");
const slidesContainer = document.querySelector(".container .slides");
const prevBtn = document.getElementById("slide-prev-btn");
const nextBtn = document.getElementById("slide-next-btn");

let slides = document.querySelectorAll(".container .slides .slide");
let index = 1;
let firstSideClone = slides[0].cloneNode(true);
let lastSlideClone = slides[slides.length - 1].cloneNode(true);
