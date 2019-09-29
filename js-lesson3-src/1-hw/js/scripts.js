window.addEventListener('load', function(e){

	let form = document.querySelector('.formAuth');
	let inputs = form.querySelectorAll('.check');

	form.addEventListener('submit', function(e){
		let isError = false;

		for(let i = 0; i < inputs.length; i++){
			let value = inputs[i].value.trim();

			if(value != ''){
				inputs[i].classList.remove('err');
			}
			else{
				inputs[i].classList.add('err');
				isError = true;
			}
		}

		if(isError){
			e.preventDefault();
			// alert('Заполните все поля!');
		}
	});

});
