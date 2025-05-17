  'use strict';

window.onload = ()=>{
let header = document.getElementById('header');
window.addEventListener('scroll',function () {
  let scrollY = this.scrollY
if (scrollY >= 50) {
    header.classList.add("on");
}else{
header.classList.remove("on");
};
  });


// let menu = document.querySelectorAll("#header ul>li>a");
// let section = document.querySelectorAll("body > section");
// menu.forEach((nav,index)=>{
//   nav.addEventListener('click',function (event) {
//     event.preventDefault();
//     let sectionBox = section[index].offsetTop;

//     window.scroll(0,sectionBox);
// //   });
// });






};
    
$(function () {
  let menu = $("#header ul>li");
 let section = $("body > section");

 menu.on('click',function (event) {
event.preventDefault();
  let index = $(this).index();
 let nav = $(section).eq(index).offset().top;
 console.log(nav);
 
 $("html ,body").animate({scrollTop : nav - 100},600);
  
 });
 
  
});
  




