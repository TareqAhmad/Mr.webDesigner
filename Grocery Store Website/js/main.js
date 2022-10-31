let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');

searchBtn.onclick = function () { 
    searchForm.classList.toggle('show-form');
    shoppingCart.classList.remove('show-cart');
    formLogin.classList.remove('show-log');
    document.querySelector('.navbar').classList.remove('active');  
    menuBtn.classList.remove('fa-times');

};

let cartBtn = document.querySelector('#cart-btn');
let shoppingCart = document.querySelector('.shopping-cart'); 

cartBtn.onclick = function () { 
    shoppingCart.classList.toggle('show-cart');
    searchForm.classList.remove('show-form');
    formLogin.classList.remove('show-log');
    document.querySelector('.navbar').classList.remove('active');  
    menuBtn.classList.remove('fa-times');
};

let loginBtn = document.querySelector('#login-btn'); 
let formLogin = document.querySelector('.login-form'); 

loginBtn.onclick = function () { 
    formLogin.classList.toggle('show-log');
    shoppingCart.classList.remove('show-cart');
    searchForm.classList.remove('show-form');
    document.querySelector('.navbar').classList.remove('active');  
    menuBtn.classList.remove('fa-times');

};

let menuBtn = document.querySelector('#menu-btn'); 

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    document.querySelector('.navbar').classList.toggle('active');  
    formLogin.classList.remove('show-log');
    shoppingCart.classList.remove('show-cart');
    searchForm.classList.remove('show-form');

    
}

window.onscroll = () => {
    formLogin.classList.remove('show-log');
    shoppingCart.classList.remove('show-cart');
    searchForm.classList.remove('show-form');
    document.querySelector('.navbar').classList.remove('active'); 
    menuBtn.classList.remove('fa-times');
};

window.onload = () => {
    formLogin.classList.remove('show-log');
    shoppingCart.classList.remove('show-cart');
    searchForm.classList.remove('show-form');
    document.querySelector('.navbar').classList.remove('active'); 
    menuBtn.classList.remove('fa-times');
};

// Swiper js 
var swiper = new Swiper(".product-slider", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
// Swiper js 
var swiper = new Swiper(".review-slider", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });