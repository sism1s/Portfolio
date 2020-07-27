$(document).ready(function() {
    
    $('.js--section-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });


    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });



VanillaTilt.init(document.querySelectorAll(".dan"),{

    reverse:                true,  
    max:                    15,     
    startX:                 0,      
    startY:                 0,     
    perspective:            1000,
    scale:                  1.05,      
    speed:                  300,    
    transition:             true,   
    axis:                   null,   
    reset:                  true,   
    easing:                 "cubic-bezier(.03,.98,.52,.99)",   
    glare:                  false,  
      
    });

});