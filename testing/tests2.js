// simplier way to do this
const main = () => {
	const focusTimer = 25;
	const startSecs = 60;
	const restTimer = 5;

	let timerObj = {
		startFocusTimer: 0,
		startRestTimer: 0,
		startSecs: 0,
		currentMinTimer: 0,
		currentSecTimer: 0,
		states: ["Focus", "Rest", "Waiting"],
		currentState: "",
		currentTimeText: "",
		changeState: true
	}

	timerObj.startFocusTimer = focusTimer;
	timerObj.startRestTimer = restTimer;
	timerObj.startSecs = startSecs;

	/*
	console.log(focusTimer);
	console.log(typeof focusTimer);
	console.log(restTimer);
	console.log(typeof restTimer);
	console.log(timerObj);
	*/

	timerObj = setUp(timerObj);
	// console.log(timerObj);

	pomodoroLoop(timerObj);
}

const setUp = (mainObj) => {

	mainObj.currentMinTimer = mainObj.startFocusTimer;
	mainObj.currentSecTimer = mainObj.startSecs;
	return mainObj;

}

const switchState = (mainObj) => {
	switch(mainObj.currentState) {
		case "":
			mainObj.currentState = mainObj.states[0];
			mainObj.changeState = false;
			break;
		case mainObj.states[0]:
			mainObj.currentState = mainObj.states[1];
			mainObj.changeState = false;
			break;
		case mainObj.states[1]:
			mainObj.currentState = mainObj.states[2];
			mainObj.changeState = false;
			break;
		default:
			console.log("Error setting state");
	}
	// console.log(mainObj);
	return mainObj;
}

const subtractOne = (aNumber) => {
	aNumber = aNumber -1;
	return aNumber;
}

const createTextTime = (num1, num2) => {
	return `${num1}m:${num2}s`
}

const pomodoroLoop = (mainObj) => {
	switch(true) {
		case mainObj.changeState == true:
			mainObj = switchState(mainObj);
			break;
		case mainObj.changeState == false:
			console.log("No need to change state");
			break;
		default:
			console.log("Error using switch state function");
	}

	mainObj.currentTimeText = createTextTime(mainObj.currentMinTimer, mainObj.currentSecTimer);
	console.log(mainObj.currentTimeText);
	mainObj.currentSecTimer = subtractOne(mainObj.currentSecTimer);
	if (mainObj.currentSecTimer == 0) {
		mainObj.currentMinTimer = subtractOne(mainObj.currentMinTimer);
		mainObj.currentSecTimer = mainObj.startSecs;
	}
	switch(mainObj.currentMinTimer) {
		case 0:
			console.log("Pomodoro Complete");
			mainObj = switchStates(mainObj);
		default:
			setTimeout(pomodoroLoop, 1000);
	}
}

main()
