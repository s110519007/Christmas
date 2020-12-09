$(document).ready(function () {
    // snowman 1 in and out
    $('.snowman:nth-child(1)').addClass('out');
    $('.sock').addClass('sock_in');
    $('.sock').click(function() { 
        $('.snowman:nth-child(1)').toggleClass('out');
        $('.snowman:nth-child(1)').toggleClass('in');
        $('.sock').toggleClass('sock_out');
        $('.sock').toggleClass('sock_in');
    });
    // decorations hover shake
    $('.deco').hover(function () {
        $(this).css('animation', 'shake .5s linear 1.5 forwards');
        $(this).addClass('hover');
    }, function () {
        // reset animation
        $('.deco.click_fall.hover').css({
            'animation': 'click_fall 0s',
            'transform': 'translateY(-20px)'
        });
        $('.deco.fall.hover').css({
            'animation': 'fall 0s',
            'transform': 'translateY(-20px)'
        });
    });
    // decorations click fall
    $('.deco').addClass('fall');
    $('.deco').click(function () { 
        $(this).removeClass('hover');
        $(this).toggleClass('fall');
        $(this).toggleClass('click_fall');
        $('.fall').css('animation', 'fall .6s ease-in-out forwards');
        $('.click_fall').css({
            'animation': 'click_fall .6s ease-in-out forwards',
            'transform': 'translateY(-20px)'
        });
    });
    // loading page
    var w=$(window).width();
    function loading() {
        $('.loading').fadeOut(2000);
        $('.container').fadeIn(2000);
        $('.loading').hide();
    }
    function noloading() {
        $('.loading').hide();
        $('.container').show();
    }
    if (w>1024){
        noloading();
        $('.container').removeClass('m-container');
        $('.container').removeClass('s-container');
    }
    else if (w>767 && w<=1024) {
        setTimeout(loading,7500);
        $('.container').removeClass('s-container');
        $('.container').addClass('m-container');
        $('.loading').show();
        $('.container').hide();
    }
    else{
        setTimeout(loading,7500);
        $('.container').removeClass('m-container');
        $('.container').addClass('s-container');
        $('.loading').show();
        $('.container').hide();
    }
    // RWD
    $(window).resize(function () {
        var w=$(window).width();
        console.log(w);
        if (w>1024){
            $('.container').show();
            $('.loading').hide();
            $('.container').removeClass('m-container');
            $('.container').removeClass('s-container');
        }
        else if (w>767 && w<=1024) {
            noloading();
            $('.container').removeClass('s-container');
            $('.container').addClass('m-container');
        }
        else{
            noloading();
            $('.container').removeClass('m-container');
            $('.container').addClass('s-container');
        }
    });
});