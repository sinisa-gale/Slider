var toggle = function(){
	document.querySelector('.sec-main ul').classList.toggle('anim');
}

var switchImages = function(){
	var secUl = document.querySelector('.sec-main ul');
	var secMain = document.querySelector('.sec-main li');
	toggle();
	setTimeout(function(){
		secUl.style.marginLeft = '-505px';
		secMain.parentNode.appendChild(secMain);
		secUl.style.marginLeft = '0px';
		toggle();
	},1000);
	thumbCounter();
}

document.querySelector('.sec-main ul').style.marginLeft = '0px';
setInterval(switchImages, 5000);