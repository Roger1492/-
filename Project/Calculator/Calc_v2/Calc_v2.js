var output = document.getElementsByClassName("output")[0];
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var dot = document.getElementById("dot");
var equals = document.getElementById("equals");
var parenthesis_right = document.getElementById("parenthesis_right");
var parenthesis_left = document.getElementById("parenthesis_left");
var less_one = document.getElementById("less_one");
var curly_left = document.getElementById("curly_left");
var percent = document.getElementById("percent");
var clear = document.getElementById("clear");
var x2 = document.getElementById("x2");
var x3 = document.getElementById("x3");
var root = document.getElementById("root");
var to2 = document.getElementById("to2");
var to16 = document.getElementById("to16");
var sin = document.getElementById("sin");
var cos = document.getElementById("cos");
var tan = document.getElementById("tan");
var asin = document.getElementById("asin");
var acos = document.getElementById("acos");
var atan = document.getElementById("atan");
var PI = document.getElementById("PI")

zero.onclick = function(){
	output.innerHTML += 0;
};
one.onclick = function(){
	output.innerHTML += 1;
};
two.onclick = function(){
	output.innerHTML += 2;
};
three.onclick = function(){
	output.innerHTML += 3;
};
four.onclick = function(){
	output.innerHTML += 4;
};
five.onclick = function(){
	output.innerHTML += 5;
};
six.onclick = function(){
	output.innerHTML += 6;
};
seven.onclick = function(){
	output.innerHTML += 7;
};
eight.onclick = function(){
	output.innerHTML += 8;
};
nine.onclick = function(){
	output.innerHTML += 9;
};
x2.onclick = function(){
	// output.innerHTML = output.innerHTML * output.innerHTML;
	output.innerHTML = Math.pow(output.innerHTML, 2);
};
x3.onclick = function(){
	output.innerHTML = Math.pow(output.innerHTML, 3);
};
root.onclick = function(){
	output.innerHTML = Math.sqrt(output.innerHTML);
};
log.onclick = function(){
	output.innerHTML = Math.log(output.innerHTML);
};
sin.onclick = function(){
	output.innerHTML = Math.sin(output.innerHTML);
};
cos.onclick = function(){
	output.innerHTML = Math.cos(output.innerHTML);
};
tan.onclick = function(){
	output.innerHTML = Math.tan(output.innerHTML);
};
asin.onclick = function(){
	output.innerHTML = Math.asin(output.innerHTML);
};
acos.onclick = function(){
	output.innerHTML = Math.acos(output.innerHTML);
};
atan.onclick = function(){
	output.innerHTML = Math.atan(output.innerHTML);
};

// 下面两个函数是把输入框里面的数字转换为二进制和十六进制
to2.onclick = function(){
	output.innerHTML = eval(output.innerHTML).toString(2);
};
to16.onclick = function(){
	output.innerHTML = eval(output.innerHTML).toString(16);
};

plus.onclick = function(){
	output.innerHTML += "+";
};
minus.onclick = function(){
	output.innerHTML += "-";
};
times.onclick = function(){
	output.innerHTML += "*";
};
division.onclick = function(){
	output.innerHTML += "/";
};
parenthesis_right.onclick = function(){
	output.innerHTML += ")";
};
parenthesis_left.onclick = function(){
	output.innerHTML += "(";
};
percent.onclick = function(){
	output.innerHTML += "%";
};
dot.onclick = function(){
	output.innerHTML += ".";
};
equals.onclick = function(){
	output.innerHTML = eval(output.innerHTML);
};
clear.onclick = function(){
	output.innerHTML = null;
};
// PI.onclick = function(){
// 	PI.innerHTML = 3.1415926535897932384626433832795;
// 	output.innerHTML = PI;
// };

// less_one这个函数并不完美，点击这个按钮后应该去掉最后一位输入的数字。
// 但是这个使用的parseInt()函数，使用除以10后的小数取整
// 以后再找其他的方式尝试完善这个函数
less_one.onclick = function(){
	if (output.innerHTML == 0) {
		output.innerHTML = null;
	}
	output.innerHTML = parseInt((output.innerHTML)/10);
};