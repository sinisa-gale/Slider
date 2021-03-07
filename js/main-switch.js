var switchImages = function(){
	var secMain = document.querySelector('.sec-main li');
	secMain.parentNode.appendChild(secMain);
	thumbCounter();
}

setInterval(switchImages, 5000);