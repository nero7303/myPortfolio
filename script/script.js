
  
  let homeInner_h2 = document.querySelector('.home-inner>h2');
  let homeInner_p = document.querySelector('.home-inner > p');
  let profile = document.querySelector('.profile');
  let headerNav = document.querySelector('#header');
  //텍스트 쪼개기 - .about-section2>div>h3
  let Content = document.querySelector('.split').innerText;
   let txt = Content.split('').join('</span><span>');
   document.querySelector('.split').innerHTML = '<span>' + txt + '</span>';

  //텍스트 쪼개기 - #contact>div>h2
 let contact = document.querySelector('#contact>div>h2');
 let text = contact.innerText.split('').join('</span><span>');
document.querySelector('#contact>div>h2').innerHTML = '<span>' + text + '</span>';


  
  // on 클래스 추가
  let header = document.getElementById('header');
  window.addEventListener('scroll',function () {
  let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    
  if (scrollTop >= 50) {
    header.classList.add("on");
  }else{
  header.classList.remove("on");
  };
  if (window.screenY >=50) {
    header.classList.add("on");
  }
  });


  
  // Parallax Effect 메뉴 이동
  let menu = document.querySelectorAll("#header ul>li>a");
  let section = document.querySelectorAll("body > section");
  menu.forEach((navList,index)=>{
    navList.addEventListener('click',function (e) {
      e.preventDefault();
      window.scroll({top:section[index].offsetTop - 100, behavior : 'smooth'});
  
        
    });
  });
  
  //  Parallax Effect Scroll로 나타내기
  function scrollmove() {
    let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop >section[0].offsetTop - window.innerHeight ) {

      section[0].classList.add('show');    
      homeInner_h2.classList.add('show');
        homeInner_p.classList.add('show');
      headerNav.classList.add('show');
    }
     if (scrollTop > section[1].offsetTop - window.innerHeight / 4) {
   gsap.to(".section3-inner > ul > li", {
  duration: 1,
  rotation: 360,
  opacity: 1, 
  delay: 1, 
  stagger: 0.2,
  ease: "sine.out", 
  force3D: true
});
     section[1].classList.add('show');
     profile.classList.add('show');
       let h2 = document.querySelector('.about-section1>div>h2 ');
     h2.classList.add('show');
      document.querySelectorAll('.split>span').forEach((elem , index)=>{
        setTimeout(() => {
            elem.classList.add('show');
        }, 50 * index);
      });
    };

    if (scrollTop > section[3].offsetTop - window.innerHeight / 10) {
      section[3].classList.add('show');
      document.querySelectorAll('#contact>div>h2>span').forEach((elem,index)=>{
        setTimeout(() => {
          elem.classList.add('show');
        }, 50 * index);
      });
       document.querySelectorAll(".header-inner a").forEach(el=>{
        el.style.color = "#fff";
        
      });
        let h2 = document.querySelector('#contact>div>h2');
        h2.classList.add('show');
        let strong = document.querySelector('#contact>div>strong');
        strong.classList.add('show');
        let p = document.querySelector('#contact>div>p');
        p.classList.add('show');
      let link = document.querySelector('.link>a');
      link.classList.add('show');
        }else{
            document.querySelectorAll(".header-inner a").forEach(el=>{
        el.style.color = "#0118D8";
        
      });
        }
      };
      window.addEventListener('scroll',scrollmove);


 
//  리빌효과
const scrollreveal = function () {
  let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  const reveal = document.querySelectorAll('.reveal');
 reveal.forEach((el)=>{
   if (scrollTop + window.innerHeight / 2 >= el.offsetTop + 1500 ) {
      el.classList.add('show');
  };
 });
};

      window.addEventListener('scroll',scrollreveal);

      const scrollvisual = function () {
  let scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  const visual = document.querySelectorAll('.visual');
  const h2 = document.querySelector('.work-inner>h2');
  if (scrollTop + window.innerHeight / 1 >= h2.offsetTop + 2000) {
    h2.classList.add('show');
 }
 visual.forEach((el)=>{
   if (scrollTop + window.innerHeight / 2 >= el.offsetTop + 2500 ) {
      el.classList.add('show');
    
     
      
  };
 });
 
};
      window.addEventListener('scroll',scrollreveal);
      window.addEventListener('scroll', scrollvisual);


 
    





  



  



















  




  
  

  
   
   


  
  




   



















    
  




