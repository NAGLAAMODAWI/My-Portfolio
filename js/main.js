$(function(){
    'use strict';
 
    //Chang The Tours
$('.Tours_info p').on('click',function(){
  console.log($(this).next().attr('src'));
  $('.Main_image , .Main-Tours iframe').hide();
  $('.Main-Tours img').attr('src',$(this).next().attr('src')).show();
  $('.Main-Tours img').attr('src',$(this).next().attr('src'))
})
$(' .Other-Tours img').hide();
  $('.Main-Tours button ').click(function(){
      $('.Main_image , .Main-Tours img').hide();

      $('.Main-Tours iframe').show();
  });

   //Scroall To Spacific TOurs
   $('.Tours_info .only p').click(function(){

      $('html ,body').animate({ 
          scrollTop: $("#" +$(this).data('scroll')).offset().top 
      },1000)
});


//Start Window 
$(window).scroll(function(){//Start Window
       
    //Scroall To Top Function
    var scrolToTop =  $('.sroal');
    if($(window).scrollTop() >= 800){
        scrolToTop.fadeIn(500);
    }
    else{
        scrolToTop.fadeOut(500);
    }
       //ServicesData Appear
    if($(window).scrollTop() >= 1000){
        $('.Services .ServicesData').slideDown(2000);
    };
});//End Window

});

 
$(window).load(function(){
    $("body").css("overflow","auto");
$(".loading-overlay .spinner").fadeOut(1000,function(){
$(this).parent().fadeOut(1000,function(){
    $(this).remove();
})
});
});