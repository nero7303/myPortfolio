
  
  let homeInner_h2 = document.querySelector('.home-inner>h2');
  let homeInner_p = document.querySelector('.home-inner > p');
  let profile = document.querySelector('.profile');

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
    }
     if (scrollTop > section[1].offsetTop - window.innerHeight / 4) {
   
     section[1].classList.add('show');
     profile.classList.add('show');
       let h2 = document.querySelector('.about-section1>div>h2 ');
     h2.classList.add('show');
      document.querySelectorAll('.split>span').forEach((elem , index)=>{
        setTimeout(() => {
            elem.classList.add('show');
        }, 50 * index);
      });

    }
    if (scrollTop > section[2].offsetTop - window.innerHeight / 4 ) {
      section[2].classList.add('show');
    }
    if (scrollTop > section[3].offsetTop - window.innerHeight / 4 ) {
      section[3].classList.add('show');
      document.querySelectorAll('#contact>div>h2>span').forEach((elem,index)=>{
        setTimeout(() => {
          elem.classList.add('show');
        }, 50 * index);
      });
        let h2 = document.querySelector('#contact>div>h2');
        h2.classList.add('show');
        let strong = document.querySelector('#contact>div>strong');
        strong.classList.add('show');
        let p = document.querySelector('#contact>div>p');
        p.classList.add('show');

        };
      };
      window.addEventListener('scroll',scrollmove);


    








  



  



















  




  
  

  
   
   


  
  




   



















    
  




