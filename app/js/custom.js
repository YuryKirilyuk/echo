$(window).on('load', function () {
	$('body').removeClass('loaded');
});


$(function(){

    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        //$(this).parent().addClass('active').siblings().removeClass('active');
        $('html, body').animate({scrollTop: $(target).offset().top - 70}, 300);
        $('#navToggle').prop('checked', false);
        return false;
    });

	
	/* components */

    if($('.fancybox').length) {
        $('.fancybox').fancybox({
            margin  : 10,
            padding  : 10
        });
    };


});


