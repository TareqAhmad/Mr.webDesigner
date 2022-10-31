
let btnMenu = document.getElementById('menu'); 
let navBar = document.querySelector('header .navbar');
let btnShare =document.getElementById("share"); 

let section = document.querySelectorAll("section"); 
let eleLink = document.querySelectorAll(".navbar ul li a"); 



let slider = document.querySelector('.screenshot .screen-slider');

btnMenu.onclick =  ()=> {
     btnMenu.classList.toggle('fa-times');
     navBar.classList.toggle('nav-toggle');
};

window.onload =()=> {
    btnMenu.classList.remove('fa-times');
    navBar.classList.remove('nav-toggle');
    
};

window.onscroll = ()=>{
    btnMenu.classList.remove('fa-times');
    navBar.classList.remove('nav-toggle');

    section.forEach(ele =>{

        let top = window.scrollY; 
        let height = ele.offsetHeight; 
        let offset = ele.offsetTop - 200; 
        let id = ele.getAttribute('id'); 

        if(top >= offset && top < height + offset){
            
            eleLink.forEach(ele => {
                      ele.classList.remove("active"); 
                      document.querySelector('header .navbar ul li a[href*='+id+']').classList.add("active");
            });
        }


        if(top > 250){
          document.querySelector('.goTop').classList.add("show");
        }else {
          document.querySelector('.goTop').classList.remove("show");
        }

       

    }
)};

btnShare.onclick = ()=> {

    btnShare.classList.toggle("show"); 

}; 

// Swiper container Review
var swiper = new Swiper(".screen-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
  loop: true,
  breakpoints: {
    0: {
            slidesPerView :1,        
    },
    768: {
      slidesPerView :2, 
    },
  
    1200: {
      slidesPerView :3, 
    },
    },
}); 
  

// Swiper container Review
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
  loop: true,
  breakpoints: {
    0: {
            slidesPerView :1,        
    },
    710: {
      slidesPerView :2, 
    },

    1024: {
      slidesPerView :3, 
    },
    },
}); 
  