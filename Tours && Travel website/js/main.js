
let menuBtn = document.querySelector(".fa-bars"); 
let navBar = document.querySelector(".navbar"); 
let header = document.querySelector("header");
let section = document.querySelectorAll("section");
let links = document.querySelectorAll(".navbar ul li a");

menuBtn.onclick = ()=>{
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("nav-toggle");
};
 
window.onscroll = () => {
    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("nav-toggle");
    if (window.scrollY > 30) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active")
    }

    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 200;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
           
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header .navbar ul li a[href*=' + id + ']').classList.add('active');
            });
        };

 
    });

};
