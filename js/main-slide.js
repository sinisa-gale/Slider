

var indexCounter = 0;

var switchImages = function(){
	var secMain = document.querySelector('.sec-main li');
	var thumbImg = document.querySelectorAll('.thumbnail img');

	secMain.parentNode.appendChild(secMain);
	thumbImg[indexCounter % 4].classList.toggle('active-thumb');
	thumbImg[(indexCounter + 1) % 4 ].classList.toggle('active-thumb');
	indexCounter++;
}


//setInterval(switchImages, 5000);