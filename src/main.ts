import "./style.css";

let player = "";
let counter = 0;
const arr: string[] = [];
let game = "";

const divs = document.querySelectorAll("section div");

//MARK: EventListener
for (let i = 0; i < divs.length; i++) {
	const item = divs[i].id;
	(<HTMLDivElement>document.getElementById(item)).addEventListener(
		"click",
		() => move(item),
		{ once: true }
	);
}

(<HTMLButtonElement>document.getElementById("newGame")).addEventListener(
	"click",
	() => window.location.reload()
);

//MARK:move
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
//MARK:winCheck
function winCheck() {
	// horizontal
	if (arr[1] === player && arr[2] === player && arr[3] === player) {
		whoWins();
	} else if (arr[4] === player && arr[5] === player && arr[6] === player) {
		whoWins();
	} else if (arr[7] === player && arr[8] === player && arr[9] === player) {
		whoWins();

		// vertikal
	} else if (arr[1] === player && arr[4] === player && arr[7] === player) {
		whoWins();
	} else if (arr[2] === player && arr[5] === player && arr[8] === player) {
		whoWins();
	} else if (arr[3] === player && arr[6] === player && arr[9] === player) {
		whoWins();

		// diagonal
	} else if (arr[1] === player && arr[5] === player && arr[9] === player) {
		whoWins();
	} else if (arr[3] === player && arr[5] === player && arr[7] === player) {
		whoWins();
	} else if (counter === 9) {
		setTimeout(newGame, 25);
	}
}

//MARK: newGame
function newGame() {
	(<HTMLButtonElement>document.getElementById("newGame")).classList.add("show");
}

//MARK: whoWins
function whoWins() {
	if (player === "X") {
		setTimeout(playerOneWin, 25);
		setTimeout(newGame, 25);
	} else {
		setTimeout(playerTwoWin, 25);
		setTimeout(newGame, 25);
	}
	game = "gameOver";
}

//MARK: timeOut
function playerOneWin() {
	(<HTMLSpanElement>document.getElementById("ende1")).classList.add("show");
	(<HTMLSpanElement>document.getElementById("ende3")).classList.add("show");
}
function playerTwoWin() {
	(<HTMLSpanElement>document.getElementById("ende2")).classList.add("show");
	(<HTMLSpanElement>document.getElementById("ende4")).classList.add("show");
}
