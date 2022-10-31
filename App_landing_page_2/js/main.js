
let menuBtn = document.querySelector('.header #menu');
let navBar = document.querySelector('.header .navbar'); 
let btnUp = document.querySelector('.moveTop');



menuBtn.onclick = ()=>{
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("show");
}; 
window.onscroll = ()=>{
    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("show");

  if(window.scrollY > 300){
    btnUp.classList.add("show"); 
  }else {
    btnUp.classList.remove("show");
  }


}; 
window.onload = ()=>{
    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("show");
}; 

// Swiper code 

var swiper = new Swiper(".image-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
     loop:true,
     autoplay: {
        delay:2000,
        disableOnInteraction:false,
     }
    });






