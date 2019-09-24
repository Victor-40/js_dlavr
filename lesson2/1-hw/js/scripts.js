window.addEventListener('load', function(){
   
	let inp1 = document.querySelector('.inp1');
	let inp2 = document.querySelector('.inp2');
	let btn = document.querySelector('.go');
	let res = document.querySelector('.res');
	let oper = document.querySelector('.operation');

	btn.addEventListener('click', function(){
		let total;
		let num1 = parseInt(inp1.value);
		let num2 = parseInt(inp2.value);

		switch(oper.value){
			case 'sum':
				total = num1 + num2;
				break;
			case 'sub':
				total = num1 - num2;
				break;
			case 'mult':
				total = num1 * num2;
				break;
			case 'div':
				total = num1 / num2;
				break;
			default:
				total = 'Undefined operation';
		}

		res.innerHTML = total;
		btn.disabled = true;
	});

	// [inp1, inp2, oper].forEach(...)
	inp1.addEventListener('input', btnEnable);
	inp2.addEventListener('input', btnEnable);
	oper.addEventListener('input', btnEnable);

	inp1.addEventListener('input', prepareInput);
	inp2.addEventListener('input', prepareInput);

	function btnEnable(){
		btn.disabled = false;
	}

	function prepareInput(){
		this.value = this.value.replace(/[^0-9]/g, '');
	}

});

