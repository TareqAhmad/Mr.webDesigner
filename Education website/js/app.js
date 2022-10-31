
let menuBtn = document.querySelector(".fa-bars"); 
let navBar = document.querySelector(".navbar"); 
let header = document.querySelector(".header"); 
let section = document.getElementsByTagName("section");

menuBtn.onclick = function () {
    menuBtn.classList.toggle("fa-times"); 
    navBar.classList.toggle("nav-toggle");
}; 


window.onload = function () { 
    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("nav-toggle");

};
window.onscroll = () => { 

    if (window.scrollY > 30 ) {
    
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
};

section.forEach(ele => {
    var top = window.scrollTop(); 
    
     ele
});


