$(document).ready(function(){


  //Scroll Unternehmen
  $('.scrollUnternehmen').click( function() {
       $('html, body').animate({
            scrollTop: $('#scrollToUnternehmen').offset().top
       }, 400);
  });

  $('.scrollPortfolio').click( function() {
       $('html, body').animate({
            scrollTop: $('#scrollToPortfolio').offset().top
       }, 400);
  });

  $('.scrollKontakt').click( function() {
       $('html, body').animate({
            scrollTop: $('#scrollToKontakt').offset().top
       }, 400);
  });











  // Endscroll
  if ($('.scrollToTop')[0]){
       $('.scrollToTop').click(function(){
            $('html,body').animate({ scrollTop: 0 }, 400);
       });
  }



});
