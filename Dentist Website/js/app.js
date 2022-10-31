
// [1] def variables 
let btnMenu = document.querySelector('#menu-btn'); 
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');

// [2] Add Event onClick on btnMenu 
btnMenu.onclick = () => { 
    // [2][1] Add fa-times class on btnMenu and active class on navbar 
    btnMenu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
// [3] Add Event onScroll on window 
window.onscroll = () => { 
    // [3][1] remove classes on btnMenu and navbar
    btnMenu.classList.remove('fa-times');
    navbar.classList.remove('active');

    //[3][2] check scrollY > 30 
    if (window.scrollY > 30) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
};