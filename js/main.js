//Adaptive functions
$(window).resize(function(event) {
    adaptive_function();
});
function adaptive_header (w,h) {
    var headerMenu=$('.header-menu');
    var headerLang=$('.header-top-lang');
    if(w<768) {
        if(!headerLang.hasClass('done')){
            headerLang.addClass('done').appendTo(headerMenu);
        }
    } else {
        if (headerLang.hasClass('done')) {
            headerLang.removeClass('done').prependTo($('.header-top'));
        }
    }

    if(w<768) {
        if(!$('.header-bottom-menu').hasClass('done')){
            $('.header-bottom-menu').addClass('done').appendTo(headerMenu);
        }
    } else {
        $.each($('.header-bottom-menu'), function(index, val) {
            if($(this).hasClass('header-bottom-menu--right')) {
                if ($(this).hasClass('done')) {
                    $(this).removeClass('done').prependTo($('.header-bottom__column').eq(2));
                }
            }else {
                if ($(this).hasClass('done')) {
                    $(this).removeClass('done').prependTo($('.header-bottom__column').eq(0));
                }
            }
        });
    }
}
function adaptive_function() {
    var w=$(window).outerWidth();
    var h=$(window).outerHeight();
    adaptive_header(w,h);
}

adaptive_function();

//Open and hide burger menu
$('.header-menu__icon').click(function(event) {
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    if ($(this).hasClass('active')) {
        $('body').data('scroll', $(window).scrollTop());
    }
        $('body').toggleClass('lock');
    if (!$(this).hasClass('active')) {
        $('body,html').scrollTop(parseInt($('body').data('scroll')));
    }
});