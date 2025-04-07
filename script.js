let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("show");

  setTimeout(showSlides, 3000);
}

document.addEventListener("DOMContentLoaded", showSlides);
