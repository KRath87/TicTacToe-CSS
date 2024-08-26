import "./style.css";

// document.getElementById("hallo")?.addEventListener("click", greeting);

// function greeting() {
// 	console.log("hallo");

// }

let player = "";
let counter = 0;
const arr: string[] = [];

for (let counter = 1; counter < 10; counter++) {
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
}

function move(x: string) {
	if (counter % 2 === 0) {
		player = "X";
		(<HTMLDivElement>document.getElementById(x)).innerHTML = player;
		counter++;
		let indexArray = parseInt(x);
		arr[indexArray] = player;
		winCheck();
	} else {
		player = "O";
		(<HTMLDivElement>document.getElementById(x)).innerHTML = player;
		counter++;
		let indexArray = parseInt(x);
		arr[indexArray] = player;
		winCheck();
	}
}

function winCheck() {
	// horizontal
	if (
		(arr[1] === "X" && arr[2] === "X" && arr[3] === "X") ||
		(arr[1] === "O" && arr[2] === "O" && arr[3] === "O")
	) {
		if (player === "X") {
			alert("Glückwunsch Spieler 1");
			// counter = 10;
		} else {
			alert("Glückwunsch Spieler 2");
			// counter = 10;
		}
	} else if (
		(arr[4] === "X" && arr[5] === "X" && arr[6] === "X") ||
		(arr[4] === "O" && arr[5] === "O" && arr[6] === "O")
	) {
		if (player === "X") {
			alert("Glückwunsch Spieler 1");
		} else {
			alert("Glückwunsch Spieler 2");
		}
	} else if (
		(arr[7] === "X" && arr[8] === "X" && arr[9] === "X") ||
		(arr[7] === "O" && arr[8] === "O" && arr[9] === "O")
	) {
		if (player === "X") {
			alert("Glückwunsch Spieler 1");
		} else {
			alert("Glückwunsch Spieler 2");
		}
		// vertikal
	} else if (
		(arr[1] === "X" && arr[4] === "X" && arr[7] === "X") ||
		(arr[1] === "O" && arr[4] === "O" && arr[7] === "O")
	) {
		if (player === "X") {
			alert("Glückwunsch Spieler 1");
		} else {
			alert("Glückwunsch Spieler 2");
		}
	} else if (
		(arr[2] === "X" && arr[5] === "X" && arr[8] === "X") ||
		(arr[2] === "O" && arr[5] === "O" && arr[8] === "O")
	) {
		if (player === "X") {
			alert("Glückwunsch Spieler 1");
		} else {
			alert("Glückwunsch Spieler 2");
		}
	} else if (
		(arr[3] === "X" && arr[6] === "X" && arr[9] === "X") ||
		(arr[3] === "O" && arr[6] === "O" && arr[9] === "O")
	) {
		if (player === "X") {
			alert("Glückwunsch Spieler 1");
		} else {
			alert("Glückwunsch Spieler 2");
		}
		// diagonal
	} else if (
		(arr[1] === "X" && arr[5] === "X" && arr[9] === "X") ||
		(arr[1] === "O" && arr[5] === "O" && arr[9] === "O")
	) {
		if (player === "X") {
			alert("Glückwunsch Spieler 1");
		} else {
			alert("Glückwunsch Spieler 2");
		}
	} else if (
		(arr[3] === "X" && arr[5] === "X" && arr[7] === "X") ||
		(arr[3] === "O" && arr[5] === "O" && arr[7] === "O")
	) {
		if (player === "X") {
			alert("Glückwunsch Spieler 1");
		} else {
			alert("Glückwunsch Spieler 2");
		}
	}
}
