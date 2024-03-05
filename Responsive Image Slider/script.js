const slides = document.querySelectorAll(".slider .list .item");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const thumbnails = document.querySelectorAll(".thumbnails .item");

const slidesCount = slides.length;
let activeSlide = 0;

// Auto Play slider
let refreshInterval = setInterval(() => {
  next.click();
}, 4500);

function showSlider() {
  const oldActiveSlide = document.querySelector(".slider .item.active");
  const oldActiveThumbnail = document.querySelector(".thumbnails .item.active");

  oldActiveSlide.classList.remove("active");
  oldActiveThumbnail.classList.remove("active");

  slides[activeSlide].classList.add("active");
  thumbnails[activeSlide].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 4500);
}

next.onclick = function () {
  activeSlide += 1;
  if (activeSlide >= slidesCount) {
    activeSlide = 0;
  }
  showSlider();
};

prev.onclick = function () {
  activeSlide -= 1;
  if (activeSlide < 0) {
    activeSlide = slidesCount - 1;
  }
  showSlider();
};

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    activeSlide = index;
    showSlider();
  });
});
