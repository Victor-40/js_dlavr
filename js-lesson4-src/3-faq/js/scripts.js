$(function(){

	$('.ask').on('click', function(){
		$(this).nextAll('.answer').slideToggle(500);
		$(this).parent().siblings().children('.answer').slideUp();
	});

});

// next()
// nextAll('.answer')
// parents('.item').find('.answer')