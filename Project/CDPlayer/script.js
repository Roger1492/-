var albumimg = document.getElementById("albumimg");
var CDPlayer = document.getElementById("CDPlayer");
var tape = document.getElementById("tape");
var operation = document.getElementById("operation");
var control = document.getElementsByClassName("control")[0];
var play_pause = document.getElementsByClassName("play_pause")[0];
var audioOne = document.getElementById("audioOne");
var audioSource = document.getElementById("audioSource");

albumimg.onclick = function(){
	tape.style.transform = "translateX(-5px)";
	tape.style.transition ="all .4s ease-in";
	operation.style.opacity = "1";
	operation.style.transform = "translateX(150px)";
	operation.style.transition = "all .4s ease-in";
	audioSource.play();
};

play_pause.onclick = function(){
	tape.style.transform = "translateX(-78px)";
	operation.style.transform = "translateX(50px)";
	operation.style.opacity = "0";
	audioSource.pause();
};