$(document).ready(function(){
  let index = 0;
  const slides = $('.slider img');
  function showSlide(i){
    slides.hide();
    $(slides[i]).show();
  }
  function nextSlide(){
    index = (index + 1) % slides.length;
    showSlide(index);
  }
  setInterval(nextSlide, 3000);
  showSlide(index);
});
