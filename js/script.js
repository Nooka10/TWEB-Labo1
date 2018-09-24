var elem = document.getElementById("follow");

function move() {
	elem.style.left = (Math.random() * 400) + "px";
	elem.style.bottom = (Math.random() * 400) + "px";
	elem.textContent = "YOU FAILED! Try again! :P";
}