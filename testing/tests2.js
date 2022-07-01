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
		currentTimeText: ""
	}

	timerObj.startFocusTimer = focusTimer;
	timerObj.startRestTimer = restTimet;
	timerObj.startSecs = startSecs;

	console.log(focusTimer);
	console.log(typeof focusTimer);
	console.log(restTimer);
	console.log(typeof restTimer);

	console.log(timerObj);

	timerObj = setUp(timerObj);
	console.log(timerObj);
}

const setUp = (mainObj) => {

	mainObj.currentMinTimer = mainObj.startFocusTimer;
	mainObj.currentSecTimer = mainObj.startSecs;
	return mainObj

}

const pomodoroLoop = (mainObj) => {
}

main()
