const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    // Remove Current Class
    current.classList.remove('current');
    // Check for next slide
    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
} 

const prevSlide = () => {
    const current = document.querySelector('.current');
    // Remove Current Class
    current.classList.remove('current');
    // Check for prev slide
    if(current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
} 

// Button Events
next.addEventListener('click', e => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
});

// Auto slide
if(auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}