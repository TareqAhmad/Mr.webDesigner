
// Section header with login Form 

let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginForm = document.querySelector(".login-form-container");
let formClose = document.querySelector("#form-close");
let menuBtn = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");


searchBtn.addEventListener("click", () => { 
    searchBtn.classList.toggle("fa-times"); 
    searchBar.classList.toggle("active");
});

window.onscroll = function () { 
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menuBtn.classList.remove("fa-times"); 
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
};

menuBtn.addEventListener("click", () => { 
    menuBtn.classList.toggle("fa-times"); 
    navbar.classList.toggle("active");
});

formBtn.addEventListener("click", () => { 
    loginForm.classList.add('active')
});

formClose.addEventListener("click", () => { 
    loginForm.classList.remove('active')
});


// Section home

let videoBtn = document.querySelectorAll(".vid-btn");

videoBtn.forEach(ele => { 
    ele.addEventListener("click", () => { 
        document.querySelector(".controls .active").classList.remove("active");
        ele.classList.add("active");
        let src = ele.getAttribute("data-src");
        document.querySelector("#video-slider").src = src;
    });
});

var swiper = new Swiper(".review-slider ", {

    spaceBetween = 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },

});
var swiper = new Swiper(".brand-slider ", {

    spaceBetween = 5,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        991: {
            slidePerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },

});