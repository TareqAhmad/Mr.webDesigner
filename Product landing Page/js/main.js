
//Select Element 
let menuBtn = document.querySelector('.header #menu'); 
let navBar = document.querySelector('.header .navbar'); 

menuBtn.onclick = () => {
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("toggle-bar");
}
window.onload = () => {
    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("toggle-bar");
}

// Active section with scroll
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a'); 


window.onscroll = () => {

    menuBtn.classList.remove("fa-times");
    navBar.classList.remove("toggle-bar");
    
    section.forEach((sec)=>{

        let top = window.scrollY; 
        let height = sec.offsetHeight;
        let offset = sec.offsetTop- 200 ;
        let id = sec.getAttribute("id"); 

        if(top >= offset && top < offset + height){
            
            navLinks.forEach((links)=>{
            links.classList.remove("active");
            document.querySelector('.header .navbar a[href*='+ id +']').classList.add("active");
          });
       
        }

     });
}
