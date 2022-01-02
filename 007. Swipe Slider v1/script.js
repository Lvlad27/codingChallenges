let slideIndex = 1;
const slides = document.getElementsByClassName('mySlides');
const dots = document.getElementsByClassName('dot');

const next = document.getElementById('next');
const prev = document.getElementById('prev');

showSlides(slideIndex);

next.addEventListener('click', () => plusSlides(1));
prev.addEventListener('click', () => plusSlides(-1));

function plusSlides(n) {
	showSlides((slideIndex += n));
	console.log(`arrow is clicked so plusSlides function is called so slideIndex= ${slideIndex} and n=${n}`);
}

function currentSlide(n) {
	showSlides((slideIndex = n));
	console.log(`Dot was clicked so currentSlide function is called so slideIndex= ${slideIndex} and n=${n}`);
}

function showSlides(n) {
	let i;
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
	console.log(`showSlides function is called so slideIndex= ${slideIndex} and n=${n}`);
}

/*
When page is refreshed or opened for the first time:

When no arrow is clicked:
1. Declare slideIndex = 1
2. Call function showSlides.
	1. Declare i
	2. Declare slides
	3. Declare dots
	4. if (1 > 3) false
	5. if (3 < 1) false
	6. for (i = 0; i < 3)
		1. slides[0].style.display = 'none' & i=0+1=1
		2. slides[1].style display = 'none' & i=1+1=2
		3. slides[2].style.display = 'none & i=2+1=3
		4. slides[3].style.display = 'none' 
		5. STOP
	7. for (i = 0; i < 3)
		1. dots[0].className = dots[0].className.replace('active', '')
		2. dots[1].className = dots[1].className.replace('active', '')
		3. dots[2].className = dots[2].className.replace('active', '')
		4. dots[3].className = dots[3].className.replace('active', '')
		5. STOP
	8. slides[0].style.display = 'block';
	9. dots[0].style.display = 'active';
3. call plusSlides(n)
	no argument given
4. call currentSlides(n)
	no argument given
*/

/*
When right arrow is clicked one time:
1. Call function showSlides(1).
	1. Declare i;
	2. Declare slides;
	3. Declare dots;
	4. if (1 > 3) false;
	5. if (3 < 1) false;
	6. for (i = 0; i < 3)
		1. slides[0].style.display = 'none' & i=1
		2. slides[1].style display = 'none' & i=2
		3. slides[2].style.display = 'none & i=3
		4. slides[3].style.display = 'none' & i=4
		5. STOP
	7. for (i = 0; i < 3)
		1. dots[0].className = dots[0].className.replace('active', '')
		2. dots[1].className = dots[1].className.replace('active', '')
		3. dots[2].className = dots[2].className.replace('active', '')
		4. dots[3].className = dots[3].className.replace('active', '')
		5. STOP
	8. slides[0].style.display = 'block';
	9. dots[0].style.display = 'active';

2. call plusSlides(1)
	Call function showSlides (slideIndex = 2).
	1. Declare i;
	2. Declare slides;
	3. Declare dots;
	4. if (2 > 3 false;
	5. if (3 < 2) false;
	6. for (i = 0; i < 3)
		1. slides[0].style.display = 'none' & i=1
		2. slides[1].style display = 'none' & i=2
		3. slides[2].style.display = 'none & i=3
		4. slides[3].style.display = 'none' 
		5. STOP
	7. for (i = 0; i < 3)
		1. dots[0].className = dots[0].className.replace('active', '')
		2. dots[1].className = dots[1].className.replace('active', '')
		3. dots[2].className = dots[2].className.replace('active', '')
		4. dots[3].className = dots[3].className.replace('active', '')
		5. STOP
	8. slides[1].style.display = 'block';
	9. dots[1].style.display = 'active';


/*
When right arrow is clicked second time;
1. Call function showSlides.
	1. Declare i;
	2. Declare slides;
	3. Declare dots;
	4. if (3 > 3) false;
	5. if (3 < 2) false;
	6. for (i = 0; i < 3)
		1. slides[0].style.display = 'none' & i=1
		2. slides[1].style display = 'none' & i=2
		3. slides[2].style.display = 'none & i=3
		4. slides[3].style.display = 'none' 
		5. STOP
	7. for (i = 0; i < 3)
		1. dots[0].className = dots[0].className.replace('active', '')
		2. dots[1].className = dots[1].className.replace('active', '')
		3. dots[2].className = dots[2].className.replace('active', '')
		4. dots[3].className = dots[3].className.replace('active', '')
		5. STOP
	8. slides[2].style.display = 'block';
	9. dots[2].style.display = 'active';

2. call plusSlides(1)
	Call function showSlides (slideIndex = 3 + 1 = 4).
	1. Declare i;
	2. Declare slides;
	3. Declare dots;
	4. if (4 > 3) false;
	5. if (3 < 2) false;
	6. for (i = 0; i < 3)
		1. slides[0].style.display = 'none' & i=1
		2. slides[1].style display = 'none' & i=2
		3. slides[2].style.display = 'none & i=3
		4. slides[3].style.display = 'none' 
		5. STOP
	7. for (i = 0; i < 3)
		1. dots[0].className = dots[0].className.replace('active', '')
		2. dots[1].className = dots[1].className.replace('active', '')
		3. dots[2].className = dots[2].className.replace('active', '')
		4. dots[3].className = dots[3].className.replace('active', '')
		5. STOP
	8. slides[2].style.display = 'block';
	9. dots[2].style.display = 'active';

*/

/*
// Auto Slide   if you need auto slide ,remove the commit "//"

//var slideIndex = 0;
//showSlides();

//function showSlides() {
//var i;
//  var slides = document.getElementsByClassName("mySlides");
// for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
// }
//  slideIndex++;
// if (slideIndex > slides.length) { slideIndex = 1 }
// slides[slideIndex - 1].style.display = "block";
// setTimeout(showSlides, 2000); // Change image every 2 seconds
//}
*/
