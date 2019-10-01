$(function(){

	$('.ask').on('click', function(){
		$(this).nextAll('.answer').stop().slideToggle(500);
	});

});

// next()
// nextAll('.answer')
// parents('.item').find('.answer')