import './index.html';
import './home.html';
import './index.scss';

const mult = (a, b) => a * b;

console.log(mult(4, 4));


const dots = document.querySelectorAll('.slider-dots .dot');
const slides = document.querySelectorAll('.slide');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const slideNum = dot.getAttribute('data-slide');

    slides.forEach(slide => {
      slide.classList.toggle('slide--active', slide.dataset.slide === slideNum);
    });

    dots.forEach(d => {
      d.classList.toggle('dot--active', d === dot);
    });
  });
});
