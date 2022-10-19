const timer = document.querySelector(".stopwatch__timer");
const getMins = document.querySelector(".mins");
const getSeconds = document.querySelector(".seconds");
const getTens = document.querySelector(".tens");

const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");
const lapBtn = document.querySelector(".btn-lap");

let mins = 00;
let seconds = 00;
let tens = 00;
let interval;
let lapInterval;
let lapNow = [];

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
		mins = 00;
		getMins.innerHTML = mins;
	}

	lapBtn.disabled = false;
}

function toggleBtn(element) {
	if (element.classList.contains("btn-start")) {
		element.style.display = "none";
		stopBtn.style.display = "block";
		resetBtn.style.display = "none";
		lapBtn.style.display = "block";
	} else if (element.classList.contains("btn-stop")) {
		element.style.display = "none";
		lapBtn.style.display = "none";
		startBtn.style.display = "block";
		resetBtn.style.display = "block";
	} else if (element.classList.contains("btn-reset")) {
		element.style.display = "none";
		lapBtn.style.display = "block";
		startBtn.style.display = "block";
	}
}

const startHandler = () => {
	console.log("Start Stopwatch");
	clearInterval(interval);
	interval = setInterval(startStopwatch, 10);
	toggleBtn(startBtn);
};

const stopHandler = () => {
	console.log("Stop Stopwatch");
	clearInterval(interval);
	console.log(timer.textContent);
	toggleBtn(stopBtn);
};

const resetHandler = () => {
	console.log("Reset Stopwatch");
	clearInterval(interval);
	mins = `0${0}`;
	seconds = `0${0}`;
	tens = `0${0}`;

	getMins.innerHTML = mins;
	getSeconds.innerHTML = seconds;
	getTens.innerHTML = tens;

	toggleBtn(resetBtn);
	lapBtn.disabled = true;
};

const lapHandler = () => {
	// console.log("Lap");
	// clearInterval(lapInterval);
	// lapInterval = setInterval(startStopwatch, 10);
	// lapRecord.innerHTML = +lapInterval;
};

resetBtn.addEventListener("click", resetHandler);
startBtn.addEventListener("click", startHandler);
stopBtn.addEventListener("click", stopHandler);
lapBtn.addEventListener("click", lapHandler);
