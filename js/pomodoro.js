const main = (event) => {
	console.log("main function started");

	// set constants
	const startFocusMinutes = 25;
	const startRestMinutes = 5;
	const startSeconds = 60;
	const states = ["Focus", "Rest", "Waiting"];
	let currentMinutes;
	let currentSeconds;
	let currentState = "";

	let stateElement = document.querySelector("#status-state");
	let minutesElement = document.querySelector("#min-counter");
	let secondsElement = document.querySelector("#sec-counter");

	stateElement.innerHTML = "rest";
	minutesElement.innerHTML = String(23);
	secondsElement.innerHTML = String(53);

	// quick pseudocode
	// set everything up if first time
	// clean everything up if end
	
};



window.addEventListener("load", (event) => {
	console.log("full page and assets loaded and ready");
	main(event);
});
