const main = (event) => {
	console.log("main function started");

	let stateElement = document.querySelector("#status-state");
	let minutesElement = document.querySelector("#min-counter");
	let secondsElement = document.querySelector("#sec-counter");

	stateElement.innerHTML = "rest";
	minutesElement.innerHTML = String(23);
	secondsElement.innerHTML = String(53);

	// set constants
	const startFocusMinutes = 25;
	const startRestMinutes = 5;
	const startSeconds = 60;
	const states = ["Focus", "Rest", "Waiting"];
	let currentMinutes = 0;
	let currentSeconds = 0;
	let timerObj = {
		focusTime: 0,
		restTime: 0,
		seconds: 0,
		states: [],
		stateDOMObj: {},
		minDOMObj: {},
		secDOMObj: {},
		changeState: true, // should change to true when next change of a minute results in 0 minutes
		currentState: "",
		currentMin: 0,
		currentSec: 0,
	};

	timerObj.focusTime = startFocusMinutes;
	timerObj.restTime = startRestMinutes;
	timerObj.seconds = startSeconds;
	timerObj.states = states;

	timerObj.stateDOMObj = stateElement;
	timerObj.minDOMObj = minutesElement;
	timerObj.secDOMObj = secondsElement;

	// timerObj.stateDOMObj.innerHTML = "TEST";

	const setUp = (passedObj) => {
		let tmpObj = passedObj;
		let tmpStates = tmpObj.states;

		switch (true) {
			case (tmpObj.changeState == true && tmpObj.currentState == ""):
				console.log("setting up countdown");
				let currentMinutes = tmpObj.focusTime;
				let currentSeconds = tmpObj.seconds;
				tmpObj.currentMin = currentMinutes;
				tmpObj.currentSec = currentSeconds;
				tmpObj.currentState = tmpStates[0];
				tmpObj.changeState = false;
				break;
			case tmpObj.currentState == tmpStates[0]:
			case tmpObj.currentState == tmpStates[1]:
			case tmpObj.currentState == tmpStates[2]:
				break;
			default:
				console.log("error iin setup function");
		};
		return tmpObj;
	};

	const decreaseTime = (passedTime) => {
		return --passedTime
	};

	const runTimer = (passedObj) => {
		let tmpObj = passedObj;
		let states = tmpObj.states;
		let startSecs = tmpObj.seconds;
		let changeState = tmpObj.changeState;
		let currentState = tmpObj.currentState;
		let currentMin = tmpObj.currentMin;
		let currentSec = tmpObj.currentSec;
		let displayMin = tmpObj.minDOMObj;
		let displaySec = tmpObj.secDOMObj;
		let displayState = tmpObj.stateDOMObj;
		// display the current values
		displayState.innerHTML = currentState;
		displayMin.innerHTML = String(currentMin);
		displaySec.innerHTML = String(currentSec);

		// Change the values with large switch value below
		switch(true) {
			case (changeState == true && currentState == ""): // switch to focus state and start
				tmpObj = setUp(tmpObj);
				break;
			case (currentMin == 0 && currentSec == 0 && currentState == states[0]): // switch to rest state
				// enter the code
				break;
			case (currentMin == 0 && currentSec == 0 && currentState == states[1]): // switch to waiting state and stop
				// enter the code
				break;
			case (currentSec == 0): // decrease minutes and restart seconds
				currentMin = decreaseTime(currentMin);
				currentSec = startSecs;
				break;
			case  (currentSec > 0 && currentMin > 0): // countdown on timer
				tmpObj.currentMin = currentMin;
				tmpObj.currentSec = currentSec;
				tmpObj.currentState = currentState;
				break;
			default: // uh, our logic is screwed up
				console.log("error in runTimer function");
		}
		return tmpObj;
	};

	// quick pseudocode
	// if first pomodoro set everything up
	// count down from 60 seconds
	// at end of each count down decrease minutes
	// when minutes and seconds equal zero a pomodoro is done
	// if last pomodoro or stopped by user end
	
	const minuteCountDown = (passedObj) => {
		let tmpObj = passedObj;
		let currentMin = tmpObj.currentMin;
		tmpObj.minDOMObj.innerHTML = String(currentMin);
		currentMin = decreaseTime(currentMin);
		tmpObj.currentMin = currentMin;
		return tmpObj;
	};
	
	const secondCountDown = (passedObj) => {
		let tmpObj = passedObj;
		let currentSec = tmpObj.currentSec;
		tmpObj.secDOMObj.innerHTML = String(currentSec);
		currentSec = decreaseTime(currentSec);
		tmpObj.currentSec = currentSec;
		return tmpObj;
	};
	
	// let aMin = startSeconds;
	// how to tell first pomodoro
	/* setInterval( ()=>{
		timerObj.secDOMObj.innerHTML = String(aMin);
		let tmpSec = aMin;
		aMin = decreaseTime(tmpSec);
	}, 1000); */

	setInterval( ()=>{
		timerObj = minuteCountDown(timerObj);
	}, 1000);

};



window.addEventListener("load", (event) => {
	console.log("full page and assets loaded and ready");
	main(event);
});
