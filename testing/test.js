// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

// simplier way to do this
const main = () => {

	let mainObj = {
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

	// timerObj.startFocusTimer = focusTimer;
	// timerObj.startRestTimer = restTimer;
	// timerObj.startSecs = startSecs;

	mainObj = resetToCycleStart(mainObj);

	/*
	console.log(focusTimer);
	console.log(typeof focusTimer);
	console.log(restTimer);
	console.log(typeof restTimer);
	console.log(timerObj);
	*/

	mainObj = setUp(mainObj);
	// console.log("Object after setup");
	// console.log(timerObj);

	pomodoroLoop(mainObj);

	mainObj = resetToCycleStart(mainObj);
}

const sleep = (sleepTime) => {
	return new Promise(resolve => setTimeout(resolve, sleepTime));
}

const setUp = (mainObj) => {
	// create a mutable, locally scoped object from passed object
	let setUpObj = mainObj;

	// create mutable, locally scoped varables from constants
	let setupMins = setUpObj.startFocusTimer;
	let setupSecs = setUpObj.startSecs;
	let pomodoroStartState = setUpObj.currentState;
	let pomodoroEndState = '';
	let pomodoroStates = setUpObj.states;

	// display all items for testing
	/*
	console.log(`setUpObj = ${setUpObj}`);
	console.log(`setupMins variable = ${setupMins}`);
	console.log(`setupSecs variable = ${setupSecs}`);
	console.log(`pomodoroStartState variable = ${pomodoroStartState}`);
	console.log(`pomodoroEndState variable = ${pomodoroEndState}`);
	console.log(`pomodoroStates variable = ${pomodoroStates}`);
	*/

	// check that this is the start of a pomodoro cycle
	if ( pomodoroStartState == '' ) {
		console.log(`This is the first pomodoro in this cycle.`);
		pomodoroEndState = pomodoroStates[0];
		console.log(`pomodoroEndState now = ${pomodoroEndState}`);
		setUpObj.currentState = pomodoroEndState;
		console.log(`objects current state = ${setUpObj.currentState}`);
		if ( setUpObj.currentState == pomodoroEndState ) {
			console.log('objects current state and the pomodoro end state match');
		}
	}

	// console.log("Setting the current timers as the starting timers");
	setUpObj.currentMinTimer = setupMins;
	setUpObj.currentSecTimer = setupSecs;
	// console.log(`Current/Starting minutes = ${setUpObj.currentMinTimer}`);
	// console.log(`Current/Starting seconds = ${setUpObj.currentSecTimer}`);
	
	// console.log("Returning the setUpObj");
	return setUpObj;

}

// reset all variables to original state
const resetToCycleStart = (mainObj) => {
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

	return timerObj;
}

const switchState = (mainObj) => {
	let currentState = mainObj.currentState;
	let states = mainObj.states;
	switch(currentState) {
		case "":
			currentState = states[0];
			changeState = false;
			break;
		case states[0]:
			currentState = states[1];
			changeState = false;
			break;
		case states[1]:
			currentState = states[2];
			changeState = false;
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
	let min = num1;
	let sec = num2;

	if (sec < 10) {
		sec = `0${sec}`;
	}

	return `${min}m:${sec}s`
}

const changeState = (mainObj) => {
	let changeStateObj = mainObj;
	let startState = changeStateObj.changeState;
	let endState;

	switch(startState) {
		case true:
			// make  a change to state
			endState = false;
			break;
		case false:
			console.log("No need to change state");
			break;
		default:
			console.log("Error using switch state function");
	}
	return changeStateObj;
}

const pomodoroLoop = (mainObj) => {
	// set loop variables
	let loopObj = mainObj;
	const startSec = loopObj.startSecs
	let currentMin = loopObj.currentMinTimer;
	let currentSec = loopObj.currentSecTimer;
	let textTime = '';

	switch ( true ) {
		case( currentMin == 0 && currentSec == 0 ):
			console.log("complete count down done");
			clearTimeout(pomodoroLoop);
			return loopObj;
			break;
		case( currentSec == 0 ):
			console.log("seconds have reached 0");
			// reduce minutes by 1
			currentMin = subtractOne(currentMin);
			// reset the seconds
			currentSec = startSec;
			break;
		default:
			// subtract the one second
			currentSec = subtractOne(currentSec);
			// console.log("subtracting.");
	}

	/*
	if ( currentMin == 0 && currentSec == 0 ) {
		console.log("complete count down done");
		clearTimeout(pomodoroLoop);
		return loopObj;
	}
	*/

	textTime = createTextTime(currentMin, currentSec);
	loopObj.currentTimeText = textTime;
	console.log(`Text time: ${textTime}`);
	// console.log(`obj current time: ${loopObj.currentTimeText}`);

	// currentSec = subtractOne(currentSec);
	/*
	if (currentSec == 0) {
		console.log("we have completed a minute");
		clearTimeout(pomodoroLoop);
		return loopObj;
		// mainObj.currentMinTimer = subtractOne(mainObj.currentMinTimer);
		// mainObj.currentSecTimer = mainObj.startSecs;
	}
	*/

	/*
	switch(mainObj.currentMinTimer) {
		case 0:
			console.log("Pomodoro Complete");
			mainObj = switchStates(mainObj);
		default:
			setTimeout(pomodoroLoop, 1000);
	}*/

	// update the object
	loopObj.currentMinTimer = currentMin;
	loopObj.currentSecTimer = currentSec;

	let time = setTimeout(() => { pomodoroLoop(loopObj) }, 1000);
}

main()
