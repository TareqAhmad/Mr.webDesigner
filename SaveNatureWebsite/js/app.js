
let menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('show');
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navBar.classList.remove('show');
}



let chosen = 1; 

let myFriends = [
    { titleL: "osama", age: 39, available: true, skills: ["html", "css"] },
    { titleL: "Ahmed", age: 35, available: false, skills: ["python", "Django"] },
    { titleL: "Ahmed", age: 33, available: true, skills: ["php", "laravel"] },
];



console.log(myFriends[0][1]);
