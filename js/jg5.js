$(document).ready(function(){
    
    $("a").click(function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollLeft: $(hash).offset().left
        }, 1000, function(){
          window.location.hash = hash;
        });
      } 
    });

    $('nav').mouseenter(function(){
        $('nav').stop().animate({left: '0px'}, "slow");
        
    });
    $('nav').mouseleave(function(){
        $('nav').stop().animate({left: '-200px'}, "slow");
        
    });
  });
