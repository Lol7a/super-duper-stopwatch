const getHours = document.querySelector(".hours");
const getMins = document.querySelector(".mins");
const getSeconds = document.querySelector(".seconds");
const getTens = document.querySelector(".tens");

const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");

let hours = 00;
let mins = 00;
let seconds = 00;
let tens = 00;
let interval;

function startStopwatch() {
	tens++;
	if (tens <= 9) {
		getTens.innerHTML = `0${tens}`;
	}
	if (tens > 9) {
		getTens.innerHTML = tens;
	}
	if (tens > 99) {
		seconds++;
		getSeconds.innerHTML = `0${seconds}`;
		tens = 00;
		getTens.innerHTML = tens;
	}

	if (seconds > 9) {
		getSeconds.innerHTML = seconds;
	}
	if (seconds > 59) {
		mins++;
		getMins.innerHTML = `0${mins}`;
		seconds = 00;
		getSeconds.innerHTML = seconds;
	}

	if (mins > 9) {
		getMins.innerHTML = mins;
	}
	if (mins > 59) {
		hours++;
		getHours.innerHTML = `0${hours}`;
		mins = 00;
		getMins.innerHTML = mins;
	}

	if (hours > 9) {
		getHours.innerHTML = hours;
	}
	if (hours < 23) {
		hours = 00;
		getHours.innerHTML = hours;
	}
}

const startHandler = () => {
	console.log("Start Stopwatch");
	clearInterval(interval);
	interval = setInterval(startStopwatch, 10);
};

const stopHandler = () => {
	console.log("Stop Stopwatch");
	clearInterval(interval);
};

const resetHandler = () => {
	console.log("Reset Stopwatch");
	clearInterval(interval);
	hours = `0${0}`;
	mins = `0${0}`;
	seconds = `0${0}`;
	tens = `0${0}`;

	getHours.innerHTML = hours;
	getMins.innerHTML = mins;
	getSeconds.innerHTML = seconds;
	getTens.innerHTML = tens;
};

startBtn.addEventListener("click", startHandler);
stopBtn.addEventListener("click", stopHandler);
resetBtn.addEventListener("click", resetHandler);
