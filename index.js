window.onload = function(event) {
	event.preventDefault();
	main();
}

const main = () => {
	// displayToBrowser("Hello World");
	// setTimeout(() => { main() }, 1000);
	runPomodoro();
}

const runPomodoro = () => {
	let pomodoroObj = setUp();
}

const pomodoroLoop = (passedObj) => {
	let internalObj = passedObj;
}

const stopPomodoroLoop = () => {
	clearInterval(pomodoroLoop);
}

const setUp = () => {
	let setUpObj = resetValues();
	return setUpObj
}

const resetValues = () => {
	// assume that reset can be used to set up and break down the progra
	// assign constants to variables
	const focusMin = 25;
	const restMin = 5;
	const startSecs = 60;
	const states = ["Cycle Start", "Focus", "Rest", "Waiting", "Cycle End"];
	const startChangeState = true;

	// create base object
	let resetObj = {
		startFocusTimer: 0,
		startRestTimer: 0,
		startSecs: 0,
		currMinTimer: 0,
		currSecTimer: 0,
		states: ["", ""],
		currentState: "",
		currentTextTime: "",
		changeState: false
	}

	// set object starting values
	resetObj.startFocusTimer = focusMin;
	resetObj.startRestTimer = restMin;
	resetObj.startSecs = startSecs;
	resetObj.states = states;
	resetObj.changeState = startChangeState;

	return resetObj;
}

const displayToBrowser = (msg) => {
	document.getElementById("MainClock").innerHTML="";
	document.getElementById("MainClock").innerHTML=msg;
};

