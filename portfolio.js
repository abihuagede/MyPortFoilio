document.querySelector(".logo").textContent = "<Abihu></Code>";

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  const ul = document.querySelector("ul");
  ul.style.display = ul.style.display === "block" ? "none" : "block";
  ul.style.top = "50px";

  const ulparent = document.querySelector(".ulparent");
});

const chat = document.querySelector(".iconWa");
chat.addEventListener("click", (even) => {
  even.preventDefault();
  const formParent = document.querySelector(".formParent");
  formParent.style.display =
    formParent.style.display === "block" ? "none" : "block";
});

let slideIndex = 0;
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].offsetWidth; // Get the width of a single slide

function updateSlider() {
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

document.querySelector("nav").addEventListener("scroll", (e) => {
  e.preventDefault();
  document.querySelector("nav").style.boxShadow = "5px 5px 5px white";
});

