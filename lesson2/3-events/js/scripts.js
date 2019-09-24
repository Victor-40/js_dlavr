window.addEventListener('load', function(e){
	
	let links = document.querySelectorAll('nav a');
	let images = document.querySelectorAll('.gallery img');

	for(let i = 0; i < images.length; i++){
		images[i].addEventListener('contextmenu', imageCancel);
		images[i].addEventListener('mousedown', imageCancel);
	}

	for(let i = 0; i < links.length; i++){
		links[i].addEventListener('click', onLinkClick);
	}

	function onLinkClick(e){
		if(!confirm('Вы уверены?')){
			e.preventDefault();
		}
	}

	function imageCancel(e){
		e.preventDefault();
	}

});
