
let menuBtn = document.querySelector("#menu");
let navBar = document.querySelector(".navbar");


menuBtn.onclick = function () { 
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('nav-toggle');
};

$(window).on('scroll load', function () {
    
    $('#menu').removeClass('fa-times');
    $('navbar').removeClass('nav-toggle');

    if ($(window).scrollTop() > 68) {
        $('header .header-2').addClass('header-active');
    } else {
        $('header .header-2').removeClass('header-active');
    }
    
});

window.onload = () => { 
    menuBtn.classList.remove('fa-times');
    navBar.classList.remove('nav-toggle');
    checkHeight();
    $('.home-slider').owlCarousel({

        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        loop:true,
    });
    
    $('.small-image img').click(function () { 

        $(this).addClass('image-active').siblings().removeClass('image-active');

        let image = $(this).attr('src');

        $('.big-image img').attr('src', image);
    });
    
};
window.onscroll = () => { 
    menuBtn.classList.remove('fa-times');
    navBar.classList.remove('nav-toggle');
    checkHeight();
    $('.home-slider').owlCarousel({

        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        loop:true,
    }); 

    $('.small-image img').click(function () { 

        $(this).addClass('image-active').siblings().removeClass('image-active');

        let image = $(this).attr('src');

        $('.big-image img').attr('src', image);
    });
     
    $('.gallery .btn').click(function () { 

        let filter = $(this).attr('data-filter');

        if (filter == 'all') {
            $('.gallery .box').show(400);
        } else {
            $('.gallery .box').not('.'+filter).hide(200);
            $('.gallery .box').filter('.'+filter).show(400);
        }
        $(this).addClass('button-active').siblings().removeClass('button-active');
    });


    
};


function checkHeight(){
    if (window.scrollY > 68) {
        document.querySelector(".header .header-2").classList.add('header-active');
    } else {
        document.querySelector(".header .header-2").classList.remove('header-active');
   }
};


$(window).on('scroll load', function () { 

    $('section').each(function () { 

        let height = $(this).height();
        let offset = $(this).offset();
        let top = $(window).scrollTop();
        let id = $(this).attr('id');

        if (top >= offset && top < offset + height) {
            
            $('.navbar ul li a').removeClass('active');
            $('navbar').find(`[href=#${id}]`).addClass('active');
        }

    });


});



let url1="elzero.org";
let url2="http://elzero.org";
let url3="https://elzero.org";
let url4="https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";


let re = /(https:\/\/|http:\/\/)?(wwww.)?\w+.org\b/ig;


console.log(url1.match(re))
console.log(url2.match(re))
console.log(url3.match(re))
console.log(url4.match(re))
console.log(url5.match(re))