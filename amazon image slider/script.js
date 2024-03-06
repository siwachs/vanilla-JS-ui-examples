const prev = document.getElementById("slide-btn-prev");
const next = document.getElementById("slide-btn-next");
const sliderImages = document.querySelectorAll(
  ".image-container .image-list .image-item"
);

let currentSlide = 0; // Initialize currentSlide to 0
const slidesCount = sliderImages.length - 1;

prev.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = slidesCount; // If at the first slide, go to the last one
  }
  const offset = -currentSlide * 100;
  sliderImages.forEach((slideImage) => {
    slideImage.style.transform = `translateX(${offset}%)`;
  });
});

next.addEventListener("click", () => {
  if (currentSlide < slidesCount) {
    currentSlide++;
  } else {
    currentSlide = 0; // Reset to the first slide if at the end
  }
  const offset = -currentSlide * 100;
  console.log(offset);
  sliderImages.forEach((slideImage) => {
    slideImage.style.transform = `translateX(${offset}%)`;
  });
});
