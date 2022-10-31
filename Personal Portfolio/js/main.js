
let btnMenu = document.querySelector('.fa-bars');
let navBar = document.querySelector('.navbar'); 
let header = document.querySelector('.header'); 



btnMenu.onclick = () => {
    btnMenu.classList.toggle('fa-times'); 
    navBar.classList.toggle('nav-toggle');
};

window.onload = () => {
    btnMenu.classList.remove('fa-times');
    navBar.classList.remove('nav-toggle');
    // header.classList.add('hide');
};

window.onscroll = () => {
    btnMenu.classList.remove('fa-times');
    navBar.classList.remove('nav-toggle');
    // if (window.scrollY > 25) {
    //     header.classList.add('hide');
    // } else {
    //     header.classList.remove('hide')
    // }
};



let buttons = document.querySelectorAll('.portfolio .controls .buttons'); 

buttons.onclick = () => { 
    var filter = buttons.getAttribute('data-filter');
    if (filter == "all") {
        document.querySelector('.filter-image').show();
    }
}; 