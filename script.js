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

/// Mettre les bullets points sur le banner /// 
const dotsSlider = document.querySelector("div .dots");
const bulletSlider = "<div class='dot'></div";

for (let slide of slides) {
	dotsSlider.insertAdjacentHTML('afterbegin', bulletSlider);
	dotsSlider.style.background = "black";
}

document.addEventListener('DOMContentLoaded', function() {
    const dot = document.querySelectorAll('.dot');

    listItems.forEach(function(item) {
        const dotsSlider = document.createElement('span');
        dot.classList.add('custom-dot');
        item.insertBefore(dotsSlider, dot.firstChild);
    });
});

let numero = 0;
function nextSlide (sens){
	numero = numero + sens; 
	imgSlide.src ="img/slideshow" + slides[numero].img;
}

