$(document).ready(function () {

    /* Sticky navigation */
    $(".js--section-about").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");

        } else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: '60px;'
    });


    /* Navigation scroll */

    $('a[href*="#"]')

        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {

            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {

                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {

                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });



    /* Mobile navigation */

    $(".js--nav-icon").click(function () {
        var nav = $(".js--main-nav");
        var icon = $(".js--nav-icon i");

        nav.slideToggle(200);

        if (icon.hasClass("ion-md-menu")) {
            icon.addClass("ion-md-close");
            icon.removeClass("ion-md-menu");
        } else {
            icon.addClass("ion-md-menu");
            icon.removeClass("ion-md-close");
        }


    });

});
