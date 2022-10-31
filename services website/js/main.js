
let menuBtn = document.querySelector('.fa-bars'); 
let navBar = document.querySelector('.navbar'); 



menuBtn.onclick = () => { 
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("nav-toggle");
};

window.onscroll = () => {
    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("nav-toggle");

};

    window.onload = () => {
        menuBtn.classList.remove("fa-times");
        navBar.classList.remove("nav-toggle");

      
    };

let span = document.querySelector('.accordion .accordion-header span'); 
let bodyAccordion = document.querySelectorAll('.accordion .accordion-body');
