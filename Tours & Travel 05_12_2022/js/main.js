$(document).ready(function(){

  $('.menu').click(function(){
     
       $('.navbar').toggle();
       $('.menu .fa-bars').toggleClass('fa-times');
       $('section').toggleClass('nav-toggle')

  });
  $(window).on('load scroll',function(){
    $('.navbar').hide();
       $('.menu .fa-bars').removeClass('fa-times');
       $('section').removeClass('nav-toggle')


  });


});