$(function(){
  $(".content").mousewheel(function(event, delta) {
    this.scrollLeft -= (delta * 50);
    event.preventDefault();
    if(delta > 0 && this.scrollLeft < 1 )
    {
      $('body,html').animate({scrollTop: $("body").offset().top},"slow");
    }
  });
  $('#menu-me').click(function(){
console.log("verga");
	  	$('.scrollX').animate({scrollTop: $(".me").offset().top},"slow");

	 });
});
