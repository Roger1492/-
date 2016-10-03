var header = document.getElementById("header");
var music = document.getElementById("music");
var lyrics = document.getElementById("lyrics");
var footer = document.getElementById("footer");

music.onclick = function(){
	this.style.zIndex = "-1";
	lyrics.style.zIndex = "1";
	lyrics.style.transition = "all 1s";
}

lyrics.onclick = function(){
	this.style.zIndex = "-1";
	music.style.zIndex = "1";
	music.style.transition = "all 1s";
};