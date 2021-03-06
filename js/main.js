var imageList = [
			{title: 'Bench',
			path: './img/bench.jpeg'},
			{title: 'Forest',
			path: './img/forest.jpg'},
			{title: 'Leaves',
			path: './img/leaves.jpg'},
			{title: 'River',
			path: './img/river.jpg'}]

var addElement = function(parent, source, className) {
	var tempElem = document.createElement('li');
	tempElem.innerHTML = '<img src="' + source + '" class="' + className + '">';
	parent.appendChild(tempElem);
}

var addUnorederList = function(parentNode, firstClass, secondClass) {
	var unorderList = document.createElement('ul');
	imageList.forEach(function(item, index) {
		var className = index === 0 ? firstClass : secondClass;
		addElement(unorderList, item.path, className);
	})
	parentNode.appendChild(unorderList)
}

addUnorederList(document.querySelector('.sec-main'), '', '');
addUnorederList(document.querySelector('.thumbnail'), 'active-thumb', '');

var indexCounter = 0;
var thumbCounter = function() {
	var thumbImg = document.querySelectorAll('.thumbnail img');
	thumbImg[indexCounter % 4].classList.toggle('active-thumb');
	thumbImg[(indexCounter + 1) % 4 ].classList.toggle('active-thumb');
	indexCounter++;
}