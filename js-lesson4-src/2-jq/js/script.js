$(function(){

	/* тестирование дз №1 */

	let check = $('.checkbox');

	console.log(check.prop('checked')); // false
	check.prop('checked', true); // в браузере поставится галочка
	console.log(check.prop('checked')); // true
	check.prop('checked', false); // в браузере снимается галочка

	/* тестирование дз №2 */

	let items = $('.items .item');

	items.css('color', 'white'); // побелеют
	console.log(items.css('color')); // red

	/* применяются все указанные стили */
	items.css({
		display: 'inline-block',
		background: '#f90',
		cursor: 'pointer',
		padding: '10px'
	});

});