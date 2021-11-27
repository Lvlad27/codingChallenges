'use strict';

let numărSecret = Math.trunc(Math.random() * 20) + 1;
let scor = 20;
let punctaj = 0;
const displayMessage = function (mesaj) {
	document.querySelector('.mesaj').textContent = mesaj;
};
const displayScore = function (număr) {
	document.querySelector('.scor').textContent = număr;
};

document.querySelector('.verificare').addEventListener('click', function () {
	const ghici = Number(document.querySelector('.ghici').value);
	console.log(ghici, typeof ghici);

	// Când nu există input
	if (!ghici) {
		displayMessage('Scrie un număr!');
	}

	// Când jucătorul câștigă
	else if (ghici === numărSecret) {
		displayMessage('Număr corect!');
		document.querySelector('.număr').textContent = numărSecret;

		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.număr').style.width = '30rem';

		if (scor > punctaj) {
			punctaj = scor;
			document.querySelector('.punctaj').textContent = punctaj;
		}
	}

	// Când ghicește prost
	else if (ghici !== numărSecret) {
		if (scor > 1) {
			displayMessage(ghici > numărSecret ? 'Prea mare!' : 'Prea mic!');
			scor--;
			displayScore(scor);
		} else {
			displayMessage('Ai pierdut!');
			displayScore(0);
		}
	}

	// Când se apăsă 'Din nou!'
	document.querySelector('.din-nou').addEventListener('click', function () {
		// Se revine la valorile inițiale
		numărSecret = Math.trunc(Math.random() * 20) + 1;
		scor = 20;

		// Se revine la condițiile inițiale ale mesajului, numărului, scorului și câmpul de ghicit
		displayMessage('Ghicește...');
		document.querySelector('.număr').textContent = '?';
		displayScore(scor);
		document.querySelector('.ghici').value = '';

		// Se revine la culoarea de fundal inițială cât și lățimea numărului ghicit
		document.querySelector('body').style.backgroundColor = '#222';
		document.querySelector('.număr').style.width = '15rem';
	});
});
