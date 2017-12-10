var oUser = document.getElementById("user");
var oPwd = document.getElementById("pwd");
var oCbox = document.getElementById("cbox");
var oSubmit = document.querySelector("input[type='submit']");
var curUser = localStorage.getItem("user");
var curPwd = localStorage.getItem("pwd");
var oRed = document.getElementById("red");
var oOrange = document.getElementById("orange");
var oGreen = document.getElementById("green");
var oBg = document.querySelector(".bg");
var curTheme = localStorage.getItem("theme");
if(curTheme != null) {
	oBg.dataset.theme = curTheme;
}
oRed.addEventListener("click", setTheme);
oOrange.addEventListener("click", setTheme);
oGreen.addEventListener("click", setTheme);

function setTheme() {
	var target = event.target;
	var id = target.id;
	oBg.dataset.theme = id;
	localStorage.setItem("theme", id);
}
if(curUser != null) {
	oUser.value = curUser;
	oPwd.value = curPwd;
}
oSubmit.addEventListener("click", SubHander);

function SubHander() {
	if(oCbox.checked) {
		localStorage.setItem('user', oUser.value);
		localStorage.setItem("pwd", oPwd.value);
	}
}