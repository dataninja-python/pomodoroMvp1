const main = (event) => {
	console.log("main function started");

	let stateElement = document.querySelector("#status-state");
	let minutesElement = document.querySelector("#min-counter");
	let secondsElement = document.querySelector("#sec-counter");

	stateElement.innerHTML = "";
	minutesElement.innerHTML = String(00);
	secondsElement.innerHTML = String(00);

	// set constants
	const startFocusMinutes = 25;
	const startRestMinutes = 5;
	const startSeconds = 60;
	const states = ["Focus", "Rest", "Waiting"];
	let currentMinutes = 0;
	let currentSeconds = 0;
	let timerObj = {
		focusTime: "",
		restTime: "",
		seconds: "",
		states: [],
		stateDOMObj: {},
		minDOMObj: {},
		secDOMObj: {},
		currentState: "",
		currentMin: 0,
		currentSec: 0
	};

	timerObj.focusTime = startFocusMinutes;
	timerObj.restTime = startRestMinutes;
	timerObj.seconds = startSeconds;
	timerObj.states = states;

	timerObj.stateDOMObj = stateElement;
	timerObj.minDOMObj = minutesElement;
	timerObj.secDOMObj = secondsElement;

	timerObj.currentMin = 0;
	timerObj.currentSec = 0;

	/* Utility Functions */
	const decreaseTime = (passedTime) => {
		return --passedTime
	};

	const setUp = (passedObj) => {
		let tmpObj = passedObj;
		let currentState = tmpObj.currentState;
		let currentMin = tmpObj.currentMin;
		let currentSec = tmpObj.currentSec;
		let currentStates = tmpObj.states;
		let displayState = tmpObj.stateDOMObj;
		let displayMins = tmpObj.minDOMObj;
		let displaySecs = tmpObj.secDOMObj;

		// display current data to page
		displayState.innerHTML = currentState;
		displayMins.innerHTML = currentMin;
		displaySecs.innerHTML = currentSec;

		// console.log(`currentMin == 0: ${currentMin == 0}`);
		// console.log(`currentSec == 0: ${currentSec == 0}`);
		// work through logic
		
		let makeChange = false;
		switch (true) {
			case (currentState == ""):
				makeChange = true;
				currentState = currentStates[0];
				currentMin = tmpObj.focusTime;
				currentSec = tmpObj.seconds;
				break;
			default:
				console.log("Reaching the default case in set up")
		};

		console.log(makeChange);
		tmpObj.currentState = currentState;
		tmpObj.currentMin = currentMin;
		tmpObj.currentSec = currentSec;
		return tmpObj;
	};
	
	const minuteCountDown = (passedObj) => {
		let tmpObj = passedObj;
		let currentMin = tmpObj.currentMin;
		// tmpObj.minDOMObj.innerHTML = String(currentMin);
		currentMin = decreaseTime(currentMin);
		tmpObj.currentMin = currentMin;
		return tmpObj;
	};
	
	const secondCountDown = (passedObj) => {
		let tmpObj = passedObj;
		let currentSec = tmpObj.currentSec;
		// tmpObj.secDOMObj.innerHTML = String(currentSec);
		currentSec = decreaseTime(currentSec);
		tmpObj.currentSec = currentSec;
		return tmpObj;
	};

	const displayToBrowser = (passedObj) => {
		let currentMin = tmpObj.currentMin;
		let currentSec = tmpObj.currentSec;
		let currentState = tmpObj.currentState;
		let stateDOMObj = tmpObj.stateDOMObj;
		let minDOMObj = tmpObj.minDOMObj;
		let secDOMObj = tmpObj.secDOMObj;

		stateDOMObj.innerHTML = currentState;
		minDOMObj.innerHTML = String(currentMin);
		secDOMObj.innerHTML = String(currentSec);

		console.log(`current object displayed: ${tmpObj}`);
	};

	const stopPomodoro = () => {
		clearInterval(runPomodoro);
	}

	// combining setUp, secondCountDown and minuteCountDown
	const runPomodoro = (passedObj) => {
		let tmpObj = passedObj;
		let currentMin = tmpObj.currentMin;
		let currentSec = tmpObj.currentSec;
		let currentState = tmpObj.currentState;
		let decreaseMin = false;
		let states = tmpObj.states;

		// set everything up if it makes sense
		if (tmpObj.currentState == "") {
			tmpObj = setUp(tmpObj);
		}

		tmpObj.stateDOMObj.innerHTML = currentState;
		tmpObj.minDOMObj.innerHTML = String(currentMin);
		tmpObj.secDOMObj.innerHTML = String(currentSec);

		// displayToBrowser(tmpObj);

		// run logic to test if should decrease second again
		// first check to see if minutes are at zero if so end program
		/*
		if ( currentSec == 0 && currentMin == 0 ) {
			console.log("switch to next state or end");
			if (currentState == states[2]) {
				console.log("end");
			} else {
				if (currentState == states[0]) {
					currentState = states[1];
					console.log(`switching to ${currentState} state`);
				} else {
					currentState = states[2];
					console.log(`switching to ${currentState} state`);
				}
			}
		} else if ( currentSec == 0 ) {
			console.log("reset the minutes");
		}*/

		switch (currentState) {
			case "":
				// from start state
				tmpObj = setUp(tmpObj);
				console.log("program set up");
				console.log("switch to focus state");
				break;
			case states[0]:
				// from focus state
				if (currentMin == 0 && currentSec == 0) {
					console.log(`change from state: ${states[0]}`);
					console.log(`change to state: ${states[1]}`);
					currentState = states[1];
					currentMin = tmpObj.restTime;
					currentSec = tmpObj.seconds; 
				} else if (currentSec == 0) {
					console.log(`reset seconds to: ${tmpObj.seconds}`);
					console.log(`countdown minutes: ${currentMin}`);
					currentSec = tmpObj.seconds;
					tmpObj = minuteCountDown(tmpObj);
				}
				break;
			case states[1]:
				// from rest state
				if (currentMin == 0 && currentSec == 0) {
					console.log(`change from state: ${states[1]}`);
					console.log(`change to state: ${states[2]}`);
					currentState = states[2];
					currentMin = 0;
					currentSec = 0; 
					console.log(`stopping program`);
					stopPomodoro();
				} else if (currentSec == 0) {
					console.log(`reset seconds to: ${tmpObj.seconds}`);
					console.log(`countdown minutes: ${currentMin}`);
					currentSec = tmpObj.seconds;
					tmpObj = minuteCountDown(tmpObj);
				}
				break;
			case states[2]:
				console.log("why am I seeing the wait switch case?");
				break;
			default:
				console.log("error with counting minutes passed 0. have all state conditions been entered?");
		}

		// count down seconds
		tmpObj = secondCountDown(tmpObj);
		return tmpObj;
	};
	
	setInterval( ()=>{
		runPomodoro(timerObj);
	}, 1000);

};



window.addEventListener("load", (event) => {
	console.log("full page and assets loaded and ready");
	main(event);
});

// Excess code

	// let aMin = startSeconds;
	// how to tell first pomodoro
	/* setInterval( ()=>{
		timerObj.secDOMObj.innerHTML = String(aMin);
		let tmpSec = aMin;
		aMin = decreaseTime(tmpSec);
	}, 1000); */


	/* const setUp = (passedObj) => {
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
	};*/

	/*const runTimer = (passedObj) => {
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
	};*/
