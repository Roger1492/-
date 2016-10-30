var wrap1 = document.getElementById("wrap1");
wrap1.onclick = function(){
	var content = document.getElementById("content");
	var width = 5;
	var si = setInterval(run,10);

	function run(){
		if (width >= 100) {
			clearInterval("si");
		} else {
			width++;
			content.style.width = width + "%";
		}
	}
};