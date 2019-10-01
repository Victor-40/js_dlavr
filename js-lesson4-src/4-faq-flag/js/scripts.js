$(function(){

	$('.ask').on('click', function(){
		let answer = $(this).nextAll('.answer');

		if(answer.hasClass('answer-blocked')){
			return;
		}

		answer.addClass('answer-blocked').slideToggle(500, function(){
			$(this).removeClass('answer-blocked');
		});
	});

});