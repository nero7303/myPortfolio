

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
// 
let screenY = this.pageYOffset
if ( screenY >=50) {
   header.classList.add("on");
}else{
header.classList.remove("on");
};
};






// Parallax 메뉴 이동
let menu = document.querySelectorAll("#header ul>li>a");
let section = document.querySelectorAll("body > section");
menu.forEach((navList,index)=>{
  navList.addEventListener('click',function (e) {
    e.preventDefault();
    window.scroll({top:section[index].offsetTop - 100, behavior : 'smooth'});
    section[index].classList.add('show');
    
  });
});

// Scroll로 나타내기
function scrollmove() {
  let scroll = window.scrollY;
  if (scroll > section[0].offsetTop - 105) {
 
   section[0].classList.add('show');
  }
   if (scroll > section[1].offsetTop - 105) {
 
   section[1].classList.add('show');
  }
  if (scroll > section[2].offsetTop - 105) {
 
   section[2].classList.add('show');
  }
  if (scroll > section[3].offsetTop - 105) {
 
   section[3].classList.add('show');
  }
   
 };
 window.addEventListener('scroll',scrollmove);
   
   


  
  




   



















    
  




