var startBtn = document.getElementById("btn");
var ostart = document.getElementById("start");
var otest = document.getElementById("test");
var oresult = document.getElementById("result");
var odiv = document.querySelectorAll("#test .word");
var oinputs = document.querySelectorAll("#a");
startBtn.addEventListener("click", startTest);
var a = 0;

function startTest() {
	ostart.style.display = "none";
	otest.style.display = "block";
}
var radio = document.getElementsByName("a");
for(var i = 0; i < oinputs.length; i++) {
	oinputs[i].index = i;
	oinputs[i].onclick = function() {　
		if(this.checked == true) {
			a +=parseInt(this.value);
			//alert(a);
		}
	}
}
var btnResutl=document.getElementById("btnResult");
btnResutl.addEventListener("click",result);
function result(){
	if(a>30){
		otest.style.display = "none";
		alert("你的测试结果为右脑");
		ostart.style.display = "block";
	}
	else if(a<10){
		alert("要做完题目才能得出结果哟!");
	}
	else{
		otest.style.display = "none";
		alert("你的测试结果为左脑");
		ostart.style.display = "block";
	}
}
