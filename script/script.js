

window.onload = ()=>{
    // on 클래스 추가
let header = document.getElementById('header');
window.addEventListener('scroll',function () {
  let scrollY = this.scrollY
if (scrollY >= 50) {
    header.classList.add("on");
}else{
header.classList.remove("on");
};
});

};


$(function () {
  // 패럴렉스 메뉴 이동
  let menu = $("#header ul>li");
 let section = $("body > section");

 menu.on('click',function (event) {
event.preventDefault();
  let index = $(this).index();
 let nav = $(section).eq(index).offset().top;
 $(menu).removeClass("active");
$(this).addClass("active");


 $("html ,body").animate({scrollTop : nav - 100},600);

 });
 
  
});














    
  




