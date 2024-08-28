import "./style.css";

let player = "";
let counter = 0;
const arr: string[] = [];
let game = "";

const divs = document.querySelectorAll("section div");
// Diese Schleife fügt die EventListener für die entsprechenden Felder ein.
for (let i = 0; i < divs.length; i++) {
	const item = divs[i].id;
	(<HTMLDivElement>document.getElementById(item)).addEventListener(
		"click",
		() => move(item),
		{ once: true }
	);
}
//Dieser Code-Abschnitt fügt dem in HTML zugefügten Button die Funktion zu, die Seite neu zu laden um das Spielfeld zu resetten.
(<HTMLButtonElement>document.getElementById("newGame")).addEventListener(
	"click",
	() => window.location.reload()
);

// Diese Funktion erkennt, welcher Spieler momentan am Zug ist und prüft jedes Mal, ob ein Spieler gewonnen hat.
// Außerdem wird das Array an der entsprechenden Stelle des Feldes mit dem Spieler X oder O, je nach Zug, ausgefüllt.
function move(DivId: string) {
	if (game === "gameOver") {
		return;
	} else if (counter % 2 === 0) {
		player = "X";
		(<HTMLDivElement>document.getElementById(DivId)).innerHTML = player;
		counter++;
		let indexArray = parseInt(DivId);
		arr[indexArray] = player;

		winCheck();
	} else {
		player = "O";
		(<HTMLDivElement>document.getElementById(DivId)).innerHTML = player;
		counter++;
		let indexArray = parseInt(DivId);
		arr[indexArray] = player;

		winCheck();
	}
}

//Diese Funktion prüft, !ob! einer von beiden Spielern gewonnen hat.
function winCheck() {
	if (arr[1] === player && arr[2] === player && arr[3] === player) {
		whoWins();
	} else if (arr[4] === player && arr[5] === player && arr[6] === player) {
		whoWins();
	} else if (arr[7] === player && arr[8] === player && arr[9] === player) {
		whoWins();
	} else if (arr[1] === player && arr[4] === player && arr[7] === player) {
		whoWins();
	} else if (arr[2] === player && arr[5] === player && arr[8] === player) {
		whoWins();
	} else if (arr[3] === player && arr[6] === player && arr[9] === player) {
		whoWins();
	} else if (arr[1] === player && arr[5] === player && arr[9] === player) {
		whoWins();
	} else if (arr[3] === player && arr[5] === player && arr[7] === player) {
		whoWins();
		// Dieser Part ermittelt ein unentschieden durch den Counter.
	} else if (counter === 9) {
		setTimeout(newGame, 25);
	}
}
// Diese Funktion lässt die Buttons für den Neustart nach Ende des Games erscheinen.
function newGame() {
	(<HTMLSpanElement>document.getElementById("newStart")).classList.add("show");
	(<HTMLButtonElement>document.getElementById("newGame")).classList.add("show");
}
// Diese Funktion prüft, !welcher! Spieler gewonnen hat.
function whoWins() {
	if (player === "X") {
		setTimeout(playerOneWin, 50);
		setTimeout(newGame, 50);
	} else {
		setTimeout(playerTwoWin, 50);
		setTimeout(newGame, 50);
	}
	game = "gameOver";
}

// Diese beiden Funktionen lassen die entsprechenden Nachrichten für den Sieger mithilfe der ID aus HTML nach Ende des Games erscheinen.
function playerOneWin() {
	(<HTMLSpanElement>document.getElementById("end1")).classList.add("show");
	(<HTMLSpanElement>document.getElementById("end3")).classList.add("show");
}
function playerTwoWin() {
	(<HTMLSpanElement>document.getElementById("end2")).classList.add("show");
	(<HTMLSpanElement>document.getElementById("end4")).classList.add("show");
}
