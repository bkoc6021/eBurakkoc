let index = 0;
const slides = document.querySelectorAll('.slider img');

function showSlide(i) {
  slides.forEach(s => s.style.display = 'none');
  slides[i].style.display = 'block';
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 3000);
showSlide(index);
