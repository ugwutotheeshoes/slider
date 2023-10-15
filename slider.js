const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;
const slideWidth = slides[0].clientWidth;
const totalSlides = slides.length;

function goToSlide(index) {
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }

  slider.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

let autoSlideInterval = setInterval(nextSlide, 3000);

sliderContainer.addEventListener("mouseover", () => {
  clearInterval(autoSlideInterval);
});

sliderContainer.addEventListener("mouseout", () => {
  autoSlideInterval = setInterval(nextSlide, 3000);
});
