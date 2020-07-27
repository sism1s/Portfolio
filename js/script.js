$(document).ready(function() {
    

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