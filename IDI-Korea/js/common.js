$(function () {
  document.querySelector('.button1').addEventListener('click',function(){
    document.querySelector('.slide-wrap').style.transform = 'translate(0vw)';
    document.querySelector('.button1').style.color = 'white';
    document.querySelector('.button2').style.color = '#33272a';
    document.querySelector('.button3').style.color = '#33272a';
  });
document.querySelector('.button2').addEventListener('click',function(){
  document.querySelector('.slide-wrap').style.transform = 'translate(-100vw)';
  document.querySelector('.button1').style.color = '#33272a';
  document.querySelector('.button2').style.color = 'white';
  document.querySelector('.button3').style.color = '#33272a';
});
document.querySelector('.button3').addEventListener('click',function(){
  document.querySelector('.slide-wrap').style.transform = 'translate(-200vw)';
  document.querySelector('.button1').style.color = '#33272a';
  document.querySelector('.button2').style.color = '#33272a';
  document.querySelector('.button3').style.color = 'white';
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

});
