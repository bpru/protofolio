$(document).ready(function () {

    // use waypoint to create sticky navigation
    var waypoint = new Waypoint({
        element: $('.js--section-features')[0],
        handler: function (direction) {
            if (direction == 'down') {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        },
        offset: '60px'
    });

    // scroll on buttons
    $('.js--goto-plan').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plan').offset().top
        }, 1000);
    });

    $('.js--goto-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    })

    // animation
    var waypoint1 = new Waypoint({
        element: $('.js--wp-1')[0],
        handler: function () {
            $('.js--wp-1').addClass('animated bounceIn');
        },
        offset: '50%'
    });

    var waypoint2 = new Waypoint({
        element: $('.js--wp-2')[0],
        handler: function () {
            $('.js--wp-2').addClass('animated slideInUp');
        },
        offset: '50%'
    });

    var waypoint3 = new Waypoint({
        element: $('.js--wp-3')[0],
        handler: function () {
            $('.js--wp-3').addClass('animated zoomIn');
        },
        offset: '50%'
    });

    var waypoint4 = new Waypoint({
        element: $('.js--wp-4')[0],
        handler: function () {
            $('.js--wp-4').addClass('animated lightSpeedIn');
        },
        offset: '50%'
    });

    var waypoint5 = new Waypoint({
        element: $('.js--wp-5')[0],
        handler: function () {
            $('.js--wp-5').addClass('animated flash');
        },
        offset: '50%'
    });

    // mobile nav icon
    $('.mobile-nav-icon').click(function () {
        var nav = $('.main-nav');
        var icon = $('.js--nav-icon ion-icon');
        nav.slideToggle(200);
        if (icon.attr('name') == 'menu') {
            icon.attr('name', 'close');
        } else {
            icon.attr('name', 'menu');
        }
    });
});
