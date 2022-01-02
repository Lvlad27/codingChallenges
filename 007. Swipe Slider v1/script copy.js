// Defines the div span that contains the image.
const slides = document.getElementById('slides');
// console.log(slides);

// Defines an array like nodelist that contains
const allSlides = document.querySelectorAll('.slide');
// console.log(allSlides);

/*
1. allSlides[0] represents the first element from the allSlides array, which is the first slide.
2. offsetWidth is the width of the element, which in this case is the width of the image: 992px in this case.
*/
const slideWidth = allSlides[0].offsetWidth;
// console.log(slideWidth);

// This variable is used to track the last and first slide.
let index = 0;

let canISlide = true;

// Defines the left and right arrows.
const next = document.getElementById('next');
const prev = document.getElementById('prev');

/*
The variables defined below are meant to be used so that when the slider reaches either the end of the beggining, the first slide becomes the last slide and viceversa. We have a transition effect that takes place when the images slide. We will call a function named checkIndex that will be called when the transition ends. 
Basically we click left until we reach the first image. We click left again and we meet the last image. Transition effects ends and we jump to the clone of the first image that is positioned at the end of the slider. This gives the illusion that we are still at the beginning. Same process is happening if we keep clicking right. This is how we obtain the effect of infinite loop through the images, no matter which direction we click to slide.
*/
// Defines first slide
const firstSlide = allSlides[0];
// Defines last slide
const lastSlide = allSlides[allSlides.length - 1];
// Defines clone of first slide
const cloneFirstSlide = firstSlide.cloneNode(true);
// Defines clone of last slide;
const cloneLastSlide = lastSlide.cloneNode(true);
// Adds the clone of the first slide to the end of the slider
slides.appendChild(cloneFirstSlide);
// Adds the clone of the last slide to the end of the slider
slides.insertBefore(cloneLastSlide, firstSlide);

// Adds click event listeners for the arrows. Upon the click event, the function switchSlide is called, which accepts one argument.
next.addEventListener('click', () => switchSlide('next'));
prev.addEventListener('click', () => switchSlide('prev'));

//
slides.addEventListener('transitionend', checkIndex);

// switchSlide function definition. Accepts one argument.
function switchSlide(arg) {
	// This adds a 'transition' class to the slides div when the images are translated. The transition class has a transition effect to make the images slide smoother.
	slides.classList.add('transition');

	if (canISlide) {
		// If the argument is equal to 'next', it means that the anchor with the class of 'next' was clicked. Else the anchor with the class of 'prev' was clicked.
		if (arg == 'next') {
			/*
		Before first click, offsetLeft is equal to 0. 
			offsetLeft is the distance from the top corner of the selected element to the left side of the current parent element. 
		After first click, offsetLeft gets a negative value equal to width of image, and then adds incrementally after every click, always getting a negative value.
		slideWidth is always constant.
		*/
			slides.style.left = `${slides.offsetLeft - slideWidth}px`;
			// incrementing the index keeps track of the slides and the slide direction
			index++;
			// console.log(index);
		} else {
			// Here the opposite happens. offsetLeft gets a positive value, always being added to slideWidht, thus moving the images to the left a distance equal at first to an image width, but then adding the image width with every click.
			slides.style.left = `${slides.offsetLeft + slideWidth}px`;
			// decrementing the index keeps track of the slides and the slide direction
			index--;
			// console.log(index);
		}
	}
	canISlide = false;
}

function checkIndex() {
	// we remove the transition effect so that the slider instantly goes to the end or start of the slider where the clones are positioned.
	slides.classList.remove('transition');

	/*
	1. When we refresh the page, index = 0.
	2. If the left arrow is cliked, index is decremented, so index == -1.
	3. In this case we move the slider 4 images (which is the length of allSlides array) times the image width. This takes us to the cloneFirstSlide position at the end of the slider.
	4. index then takes the value of the last image position. Why? Because we are now at the last image, if someone clicks the left arrow until reaching the first image, the index 

	There needs to be a way of managing the index value so that we can keep under control the position of the slides. By having index = allSlides.length -1  and 0 we can always revert to control values if someone for example clicks lots of times in only one direction. Or fi someone clicks left on the first slide and then immediatly right on the last slide.
	*/
	if (index == -1) {
		slides.style.left = `-${allSlides.length * slideWidth}px`;
		index = allSlides.length - 1;
	}

	if (index == allSlides.length) {
		slides.style.left = `-${slideWidth}px`;
		index = 0;
	}

	canISlide = true;
}
