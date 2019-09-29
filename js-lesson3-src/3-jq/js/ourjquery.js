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
}