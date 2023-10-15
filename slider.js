const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
const slide = document.querySelector(".slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

const images = document.querySelectorAll(".slide");
const imageWidth = images[0].clientWidth;
let currentIndex = 0;

function slideNext() {
  if (currentIndex === 6) {
    currentIndex = 0 % images.length;
    slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  } else {
    currentIndex = (currentIndex + 1) % images.length;
    slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }
}

function slidePrev() {
  currentIndex = (currentIndex - 3 + images.length) % images.length;
  slider.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

nextButton.addEventListener("click", slideNext);
prevButton.addEventListener("click", slidePrev);

let autoSlideInterval = setInterval(slideNext, 3000); // Automatically slide every 3 seconds
sliderContainer.addEventListener("mouseover", () => {
  clearInterval(autoSlideInterval);
});

sliderContainer.addEventListener("mouseout", () => {
  autoSlideInterval = setInterval(slideNext, 3000);
});
