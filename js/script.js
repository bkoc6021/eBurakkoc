$(document).ready(function(){
  // Slider fonksiyonu
  let index = 0;
  const slides = $('.slider img');
  function showSlide(i) {
    slides.hide();
    $(slides[i]).show();
  }
  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }
  setInterval(nextSlide, 3000); // Her 3 saniyede bir slider geçişi
  showSlide(index);
});
