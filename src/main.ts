import "./style.css";

// document.getElementById("hallo")?.addEventListener("click", greeting);

// function greeting() {
// 	console.log("hallo");

// }

let player = "";
let counter = 0;
const arr: string[] = [];

//MARK: EventListener
(<HTMLButtonElement>document.getElementById("newGame")).addEventListener(
	"click",
	() => window.location.reload()
);

(<HTMLDivElement>document.getElementById("1")).addEventListener(
	"click",
	() => move("1"),
	{ once: true }
);
(<HTMLDivElement>document.getElementById("2")).addEventListener(
	"click",
	() => move("2"),
	{ once: true }
);
(<HTMLDivElement>document.getElementById("3")).addEventListener(
	"click",
	() => move("3"),
	{ once: true }
);
(<HTMLDivElement>document.getElementById("4")).addEventListener(
	"click",
	() => move("4"),
	{ once: true }
);
(<HTMLDivElement>document.getElementById("5")).addEventListener(
	"click",
	() => move("5"),
	{ once: true }
);
(<HTMLDivElement>document.getElementById("6")).addEventListener(
	"click",
	() => move("6"),
	{ once: true }
);
(<HTMLDivElement>document.getElementById("7")).addEventListener(
	"click",
	() => move("7"),
	{ once: true }
);
(<HTMLDivElement>document.getElementById("8")).addEventListener(
	"click",
	() => move("8"),
	{ once: true }
);
(<HTMLDivElement>document.getElementById("9")).addEventListener(
	"click",
	() => move("9"),
	{ once: true }
);

//MARK:move
function move(DivId: string) {
	if (counter % 2 === 0) {
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
		(<HTMLDivElement>document.getElementById("game")).classList.add(
			"disablePointer"
		);

		if (player === "X") {
			setTimeout(playerOneWin, 50);
		} else {
			setTimeout(playerTwoWin, 50);
			// counter = 11;
		}
		newGame();
	} else if (arr[4] === player && arr[5] === player && arr[6] === player) {
		(<HTMLDivElement>document.getElementById("game")).classList.add(
			"disablePointer"
		);
		if (player === "X") {
			setTimeout(playerOneWin, 50);
		} else {
			setTimeout(playerTwoWin, 50);
		}
		newGame();
	} else if (arr[7] === player && arr[8] === player && arr[9] === player) {
		(<HTMLDivElement>document.getElementById("game")).classList.add(
			"disablePointer"
		);
		if (player === "X") {
			setTimeout(playerOneWin, 50);
		} else {
			setTimeout(playerTwoWin, 50);
		}
		newGame();
		// vertikal
	} else if (arr[1] === player && arr[4] === player && arr[7] === player) {
		(<HTMLDivElement>document.getElementById("game")).classList.add(
			"disablePointer"
		);
		if (player === "X") {
			setTimeout(playerOneWin, 50);
		} else {
			setTimeout(playerTwoWin, 50);
		}
		newGame();
	} else if (arr[2] === player && arr[5] === player && arr[8] === player) {
		(<HTMLDivElement>document.getElementById("game")).classList.add(
			"disablePointer"
		);
		if (player === "X") {
			setTimeout(playerOneWin, 50);
		} else {
			setTimeout(playerTwoWin, 50);
		}
		newGame();
	} else if (arr[3] === player && arr[6] === player && arr[9] === player) {
		(<HTMLDivElement>document.getElementById("game")).classList.add(
			"disablePointer"
		);
		if (player === "X") {
			setTimeout(playerOneWin, 50);
		} else {
			setTimeout(playerTwoWin, 50);
		}
		newGame();
		// diagonal
	} else if (arr[1] === player && arr[5] === player && arr[9] === player) {
		(<HTMLDivElement>document.getElementById("game")).classList.add(
			"disablePointer"
		);
		if (player === "X") {
			setTimeout(playerOneWin, 50);
		} else {
			setTimeout(playerTwoWin, 50);
		}
		newGame();
	} else if (arr[3] === player && arr[5] === player && arr[7] === player) {
		(<HTMLDivElement>document.getElementById("game")).classList.add(
			"disablePointer"
		);
		if (player === "X") {
			setTimeout(playerOneWin, 50);
		} else {
			setTimeout(playerTwoWin, 50);
		}
		newGame();
	}
}
//MARK: timeOut
function playerOneWin() {
	alert("Glückwunsch Spieler 1.");
}
function playerTwoWin() {
	alert("Glückwunsch Spieler 2");
}
//MARK: "newGame";
function newGame() {
	(<HTMLButtonElement>document.getElementById("newGame")).classList.add("show");
}
