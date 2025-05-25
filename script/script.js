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
      profile.classList.add('show');
      h2.classList.add('show');
      section[1].classList.add('show');
      
  });
});

//  Parallax Effect Scroll로 나타내기
function scrollmove() {
  let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > section[0].offsetTop - window.innerHeight ) {
    section[0].classList.add('show');
    homeInner_h2.classList.add('show');
      homeInner_p.classList.add('show');
  }
   if (scrollTop > section[1].offsetTop - window.innerHeight / 3) {
 
   section[1].classList.add('show');
   profile.classList.add('show');
   h2.classList.add('show');
 
  }
  if (scrollTop > section[2].offsetTop - window.innerHeight ) {
 
   section[2].classList.add('show');
  }

  if (scrollTop > section[4].offsetTop - window.innerHeight / 4  ) {
      let h2 = document.querySelector('#contact>div>h2');
      h2.classList.add('show');
        let strong = document.querySelector('#contact>div>strong');
        strong.classList.add('show');
        let p = document.querySelector('#contact>div>p');
        p.classList.add('show');
        let link = document.querySelector('#contact>div>.link>ul');
        link.classList.add('show');
  }

};
window.addEventListener('scroll',scrollmove);

  





  
   
  
  

  
   
   


  
  




   



















    
  




