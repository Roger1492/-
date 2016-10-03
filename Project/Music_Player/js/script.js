var header = document.getElementById("header");
var music = document.getElementById("music");
var footer = document.getElementById("footer");
var album = document.getElementById("album");
var lyrics = document.getElementById("lyrics");

lyrics.onclick = function(){
	this.style.display = "block";
	album.style.display = "none";
};