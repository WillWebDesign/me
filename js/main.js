$(function(){
  //scrollTop converter to scrollLeft in content
  $(".content").mousewheel(function(event, delta) {
    this.scrollLeft -= (delta * 50);
    event.preventDefault();
    // console.log(this.scrollLeft);
  });
  //control scroll for content sections
  $('.menu-a').click(function(event){
      event.preventDefault();
      var ancla= $(this).attr("href");

      var posicion = ($(ancla).offset().left)+($('.content').scrollLeft()-($(window).width()*12.5/100));

      $('.content').animate({scrollLeft: posicion},"slow");
   });
});
