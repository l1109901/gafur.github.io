//Image swithcer code

var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/first.jpg'){
		myImage.setAttribute('src','images/second.jpg');
	}else{
		myImage.setAttribute('src','images/first.jpg');
	}
}

//Personalized welcome message code

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Mozilla ic cool, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}