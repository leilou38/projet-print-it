const slides = [
	{
		"image":"images/slideshow/slide1.jpg",
		"tagLine":"<p>Impressions tous formats <span>en boutique et en ligne</span></p>"
	},
	{
		"image":"images/slideshow/slide2.jpg",
		"tagLine":"<p>Tirages haute définition grand format <span>pour vos bureaux et events</span></p>"
	},
	{
		"image":"images/slideshow/slide3.jpg",
		"tagLine":"<p>Grand choix de couleurs <span>de CMJN aux pantones</span></p>"
	},
	{
		"image":"images/slideshow/slide3.jpg",
		"tagLine":"<p>Autocollants <span>avec découpe laser sur mesure</span></p>"
	}
]

/// Mettre un event Listener sur les flèches /// 
const arrowLeft = document.querySelector ('#banner .arrow_left');
arrowLeft.addEventListener('click', (e) => {
	console.log('aller à gauche'); //// flèche gauche 
})

const arrowRight = document.querySelector ('#banner .arrow_right');
arrowRight.addEventListener('click', (e) => {
	console.log('aller à droite'); /// flèche droite 
})

/// Mettre des points sur le banner pour le défilement des images /// 
/// J'ai tenter ce code mais je n'ai pas bien compris pourquoi il ne fonctionnait pas // 

/*
document.addEventListener('DOMContentLoaded', function (){
	const carousel = document.querySelector('banner');
	const dotsContainer = document.querySelector ('banner-dots');

	const img = document.querySelectorAll ('banner img');
	const totalImg = img.length;

	let currentIndex = 0;

	for (let i = 0; i < totalImg; i++){
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dotsContainer.appendChild(dot);
	}

	dot.addEventListener('click', () => {
		setCurrentIndex(i);
		updateCarousel();
	})
})
*/ 

const dotsSlider = document.querySelector("div .dots");
const bulletSlider = "<div class='dot'></div";

for (let slide of slides) {
	dotsSlider.insertAdjacentHTML('afterbegin', bulletSlider);
}

