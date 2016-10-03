var header = document.getElementById("header");
var music = document.getElementById("music");
var lyrics = document.getElementById("lyrics");
var footer = document.getElementById("footer");

var audioSource_1 = document.getElementById("audioSource_1");
var img_album = document.getElementsByClassName("img_album")[0];
var btn_play = document.getElementsByClassName("btn_play")[0];
var fa_play = document.getElementsByClassName("fa-play")[0];
var fa_pause = document.getElementsByClassName("fa-pause")[0];

var minutes = document.getElementById("miuntes")
var seconds = document.getElementById("seconds")
// var int = setInterval(clock, 1000);

music.onclick = function() {
    this.style.zIndex = "-1";
    lyrics.style.zIndex = "1";
    lyrics.style.transition = "all 1s";
}

lyrics.onclick = function() {
    this.style.zIndex = "-1";
    music.style.zIndex = "1";
    music.style.transition = "all 1s";
};

function clock() {
    var seconds_time = parseInt(seconds.innerHTML) + 1;
    var minutes_time = 0;
    if (seconds_time <= 9) {
        seconds_time = "0" + seconds_time;
    }
    seconds.innerHTML = seconds_time;
    minutes.innerHTML = minutes_time;
}

// 点击播放按钮后，
// a 开始播放歌曲
// b 播放按钮改为暂停按钮
// c CD封面开始旋转
// d  歌曲开始计时

fa_play.onclick = function(){
	audioSource_1.play();
	this.style.display = "none";
	fa_pause.style.display = "block";
	img_album.style.transform = 'rotate(360deg)';
	img_album.style.transition = "all 20s linear";
	var int = setInterval(clock,1000);
};
fa_pause.onclick = function(){
	audioSource_1.pause();
	fa_pause.style.display = "none";
	fa_play.style.display = "block";
	img_album.style.transform = 'rotate(0)';
	img_album.style.transition = "all 20s linear";
    clearInterval(int)
};