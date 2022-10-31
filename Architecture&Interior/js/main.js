
let btnMenu = document.querySelector('.fa-bars'); 
let navBar = document.querySelector('.navbar'); 


btnMenu.onclick = () => { 
    btnMenu.classList.toggle('fa-times');
    navBar.classList.toggle('nav-toggle')
};

window.onload = () => { 
    btnMenu.classList.remove('fa-times');
    navBar.classList.remove('nav-toggle')
};
window.onscroll = () => { 
    btnMenu.classList.remove('fa-times');
    navBar.classList.remove('nav-toggle')
};


// let count = document.querySelectorAll('.count'); 

// count.forEach(div => { 
//     var isth = div,
//     countTo = div.getAttribute('data-count');
// });