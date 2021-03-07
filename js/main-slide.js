

var switchImages = function(){
	
	var secMain = document.querySelector('.sec-main li');
	
	
	
	document.querySelector('.sec-main ul').style.marginLeft = '-505px';
	secMain.parentNode.appendChild(secMain);
	thumbCounter();
	
	
}

var toggle = function(){
	document.querySelector('.sec-main ul').classList.toggle('anim');
}

toggle();
setTimeout(switchImages,4000);
//setTimeout(toggle, 5000);

//setInterval(switchImages, 5000);
