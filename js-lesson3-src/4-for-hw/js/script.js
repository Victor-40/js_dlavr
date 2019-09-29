window.addEventListener('load', function(){

	/* тестирование дз №1 */
	console.log('----- part 1 ------');

	let check = $('.checkbox');

	console.log(check.prop('checked')); // false
	check.prop('checked', true); // в браузере поставится галочка
	console.log(check.prop('checked')); // true
	check.prop('checked', false); // в браузере снимается галочка

	/* тестирование дз №2 */
	console.log('----- part 2 ------');
	
	let items = $('.items .item');
	
	items.css('color', 'red'); // all red
	console.log(items.css('color')); // first item red

	// /* применяются все указанные стили */
	// items.css({
	// 	display: 'inline-block',
	// 	background: '#f90',
	// 	cursor: 'pointer',
	// 	padding: '10px'
	// });

});