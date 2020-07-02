window.onload = function(){ 
	// add the animation when document is ready
	let backgrounds = document.getElementsByClassName('intro__bg');
	let texts = document.getElementsByClassName('intro__text');

	// assume # of backgrounds = # of texts elements 
	for (let i = 0; i < backgrounds.length; i++) {
		backgrounds[i].style.animation = 'fade-in-out 3.5s ' + 0.2 * i + 's ease-in-out';
		texts[i].style.animation = 'black-and-white 3.5s ' + 0.2 * i + 's ease-out';
	};	
}