
function Carousel () {
	var btnNext = null;
	var btnPrevious = null;
	var panelsArray = null;


	this.bindEvents = function () {
		btnNext = document.querySelector('.js-next');
		btnPrevious = document.querySelector('.js-prev');
		panelsArray = document.getElementsByClassName('js-carousel-panel');

		btnNext.addEventListener('click', function () {
			
		}, false);
		
		btnPrevious.addEventListener('click', function () {
			console.log('prev');
		}, false);
	};
}



var testimonialsCarousel = new Carousel;
testimonialsCarousel.bindEvents();