 homeInner_h2 = document.querySelector('.home-inner>h2');
let homeInner_p = document.querySelector('.home-inner > p');
let profile = document.querySelector('.profile');
let h2 = document.querySelector('.about-section1>div>h2 ');
window.onload = ()=>{
  
  // on 클래스 추가
  let header = document.getElementById('header');
  window.addEventListener('scroll',function () {
  let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    
if (scrollTop >= 50) {
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













// Parallax Effect 메뉴 이동
let menu = document.querySelectorAll("#header ul>li>a");
let section = document.querySelectorAll("body > section");
menu.forEach((navList,index)=>{
  navList.addEventListener('click',function (e) {
    e.preventDefault();
    window.scroll({top:section[index].offsetTop - 100, behavior : 'smooth'});
    section[index].classList.add('show');
      homeInner_h2.classList.add('show');
      homeInner_p.classList.add('show');
  });
});

//  Parallax Effect Scroll로 나타내기
function scrollmove() {
  let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > section[0].offsetTop - 105) {
    section[0].classList.add('show');
    homeInner_h2.classList.add('show');
      homeInner_p.classList.add('show');
  }
   if (scrollTop > section[1].offsetTop - 105) {
 
   section[1].classList.add('show');
   profile.classList.add('show');
   h2.classList.add('show');
 
  }
  if (scrollTop > section[2].offsetTop - 105) {
 
   section[2].classList.add('show');
  }

};
window.addEventListener('scroll',scrollmove);

//  Parallax Effect Text효과 나타내기

let text = document.querySelector('.split').innerText;

let split = text.split('').join('</span><span aria-hidden = "true">');
split = '<span aria-hidden ="true">' + split + '</span>';
document.querySelector('.split').innerHTML = split;
document.querySelector('.split').setAttribute("aria-label",text);

window.addEventListener('scroll',()=>{
  let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > section[1].offsetTop - 105) {
    document.querySelectorAll('.split span').forEach((el, index)=>{
      setTimeout(()=>{
        el.classList.add('visible');
      }, 50 * index );
    });
  }
});
  
  
   
  
  

  
   
   


  
  




   



















    
  




