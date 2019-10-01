$(function(){

	$('.ask').on('click', function(){
		$(this).nextAll('.answer').slideToggle(500);
	});

});

// next()
// nextAll('.answer')
// parents('.item').find('.answer')