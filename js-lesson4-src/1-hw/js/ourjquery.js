/*
	Принять нечто различное и вернуть 
	помошника, нацеленного на элементы DOM
	
	some (string) - селектор
	some (HTMLElement) - конкретный элемент DOM
*/
function $(some){
	let elems;

	if(some instanceof HTMLElement){
		elems = [some];
	}
	else if(typeof some === "function"){
		window.addEventListener('load', some);
	}
	else{
		elems = document.querySelectorAll(some);
	}
	 
	return new OurJquery(elems);
}


/*
	elems - (NodeList || Array) of DOM elements

*/
function OurJquery(elems){
	this.elems = elems;

	/*
		Добавить html-класс
		params:
			name (string) - имя класса
	*/
	this.addClass = function(name){
		for(let i = 0; i < this.elems.length; i++){
			this.elems[i].classList.add(name);
		}

		return this;
	}

	/*
		Удалить html-класс
		params:
			name (string) - имя класса
	*/
	this.removeClass = function(name){
		for(let i = 0; i < this.elems.length; i++){
			this.elems[i].classList.remove(name);
		}

		return this;
	}

	/*
		Проверить, если ли у первого элемента набора такой html-класс
		params:
			name (string) - имя класса
	*/
	this.hasClass = function(name){
		// надо бы проверить, что this.elems[0] существует
		return this.elems[0].classList.contains(name);
	}

	/*
		Добавить обратчик события
		params:
			name (string) - название события
			handler (function) - обработчик события
	*/
	this.on = function(name, handler){
		for(let i = 0; i < this.elems.length; i++){
			this.elems[i].addEventListener(name, handler);
		}

		return this;
	}

	/*
		Два варианта вызова

		params:
			name (string) - имя атрибута

			Получить значение атрибута для первого элемента набора

		params:
			name (string) - имя атрибута
			value (string) - значение атрибута

			Установить значение атрибута для всех элементов набора
	*/
	this.attr = function(name, value){
		if(value === undefined){
			return this.elems[0].getAttribute(name);
		}

		for(let i = 0; i < this.elems.length; i++){
			this.elems[i].setAttribute(name, value);
		}

		return this;
	}

	/*
		Два варианта вызова

		params:
			name (string) - имя свойства

			Получить значение свойства для первого элемента набора

		params:
			name (string) - имя атрибута
			value (string) - значение атрибута

			Установить значение свойства для всех элементов набора
	*/
	this.prop = function(name, value){
		if(value === undefined){
			return this.elems[0][name];
		}

		for(let i = 0; i < this.elems.length; i++){
			this.elems[i][name] = value;
		}

		return this;
	}

	/*
		param1 - str, param2 - не передан
		.css('color'); => вернуть style.color первого элемента набора

		param1 - str, param2 - str
		.css('color', 'red'); => всем элементам задаём style.color = 'red'

		param1 - object, param2 - не передан
			.css({
				color: '#fff',
				background: '#f90',
				cursor: 'pointer'
			}); => всем элементам задаём все пары
			style.color = '#fff'
			style.background = '#f90'
			style.cursor = 'pointer'
	*/

	this.css = function(param1, param2){
		if(typeof param1 === 'object'){
			for(let i = 0; i < this.elems.length; i++){
				for(let name in param1){
					this.elems[i].style[name] = param1[name];
				}
				//Object.assign(this.elems[i].style, param1);
			}
		}
		else if(param2 === undefined){
			return this.elems[0].style[param1];
		}
		else{
			for(let i = 0; i < this.elems.length; i++){
				this.elems[i].style[param1] = param2;
			}
		}

		return this;
	}
}

/*

let some = ['a', 'b', 'c'];
some[1]

let obj = {
	a: 1,
	b: 2
};

obj.a === obj['a']

let key = Math.random() > 0.5 ? 'a' : 'b';
//obj.key -> obj['key']
obj[key]
	-> obj['a']
	-> obj['b']

*/