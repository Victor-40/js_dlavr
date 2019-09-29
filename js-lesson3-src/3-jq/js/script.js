window.addEventListener('load', function(){

	$('.check')
		.addClass('shadow')
		.on('focus', function(){
			$(this).addClass('focus');
		})
		.on('blur', function(){
			$(this).removeClass('focus');
		})

	$('.items .item').on('click', function onClick(){
		$(this).addClass('strong');
	});

	console.log($('form').hasClass('test'));
	console.log($('form').hasClass('other'));

});

/*

	let items = document.querySelectorAll('.items .item');

	for(let i = 0; i < items.length; i++){
		items[i].addEventListener('click', onClick);
	}

	function onClick(){
		this.classList.add('strong');
	}

	let inputs = document.querySelectorAll('.check');

	for(let i = 0; i < inputs.length; i++){
		inputs[i].addEventListener('focus', onFocus);
		inputs[i].addEventListener('blur', onBlur);
	}

	function onFocus(){
		this.classList.add('focus');
	}

	function onBlur(){
		this.classList.remove('focus');
	}

	for(let i = 0; i < inputs.length; i++){
		inputs[i].classList.add('shadow');
	}

	*/