import "./style.css";

document.getElementById("hallo")?.addEventListener("click", greeting);

function greeting() {
	console.log("hallo");
}
