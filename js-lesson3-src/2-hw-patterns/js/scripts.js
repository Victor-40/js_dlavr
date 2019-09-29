window.addEventListener('load', function(e){

	let form = document.querySelector('.formAuth');
	let inputs = form.querySelectorAll('.check');

	let patterns = {
		notEmpty: /.+/,
		phone: /^[0-9]{7,15}$/,
		email: /^.+@.+\..+/
	};

	form.addEventListener('submit', function(e){
		let isError = false;

		for(let i = 0; i < inputs.length; i++){
			let value = inputs[i].value.trim();
			let validation = inputs[i].dataset.validation;
			let pattern = patterns[validation];

			if(pattern.test(value)){
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

/*
let color = '#f90';
let colorWord = '';

if(color == '#f90'){
	colorWord = 'золотистый';
}
else if(color == '#ff0'){
	colorWord = 'жёлтый';
}
else if(color == '#0f0'){
	colorWord = 'зелёный';
}


let colors = {
	'#f90': 'золотистый',
	'#ff0': 'жёлтый',
	'#0f0': 'зелёный'
};

let color = '#f90';
let colorWord = colors[color];
*/