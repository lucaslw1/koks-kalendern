let currentSlide = 0;

const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);
