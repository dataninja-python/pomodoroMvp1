// Initially my objective is to understand how best to deal with time in javascript
const main = () => {

	setUp();

	/*
	masterTimeObj = getTimeObj(masterTimeObj);
	console.log("The entire time object: ", masterTimeObj);
	console.log('');
	// console.log("Hours: ", masterTimeObj.hours);
	// console.log("Minutes: ", masterTimeObj.mins);
	// console.log("Seconds: ", masterTimeObj.secs);
	// console.log("Milliseconds: ", masterTimeObj.mil);

	masterTimeObj = createPomodoro(masterTimeObj, pomodoroWorkTime);
	console.log("Pomodoro Time Object: ", masterTimeObj);
	console.log('');
	// console.log("Pomodoro Start: ", masterTimeObj.pStartTimeObj);
	// console.log("Pomodoro End: ", masterTimeObj.pEndTimeObj);
	// console.log("Hours: ", masterTimeObj.hours);
	// console.log("Minutes: ", masterTimeObj.mins);
	// console.log("Seconds: ", masterTimeObj.secs);
	// console.log("Milliseconds: ", masterTimeObj.mil);
*/

}

const setUp = () => {
	// pomodoro constants
	// 1 pomodoro = 25 min focus time + 5 min rest time
	// 1/2 cycle = 4 pomodoros + 1st cycle rest time
	// 1 cycle = 1/2 cycle + 4 pomodoros + 2nd cycle rest time
	const pomodoroWorkTime = 25;
	const pomodoroRestTime = 5;
	const fullCycle = 8;
	const halfCycle = 4;
	const firstCycleRestTime = 30;
	const secondCycleRestTime = 60;
	const cycleRestCounts = 2;

	// Date Objects
	let genericDateObj = { year: 0, month: 0, day: 0, hour: 0, minutes: 0, seconds: 0, milliseconds: 0 };

	// create the master object  to keep track of all pomodoro data
	let masterTimeObj = {
		fullPomodoroCycle: 0,
		halfPomodoroCycle: 0,
		focusTime: 0,
		restTime: 0,
		halfCycleRest: 0,
		fullCycleRest: 0,
		cycleCountDownTimer: 0,
		cycleStates: ["notStarted", "in-process", "complete"],
		pomodoroStates: ["focus", "rest", "waitingToSwitchStates"],
		currentCycleState: "",
		currentPomodoroState: "",
		cycleStartTime: genericDateObj,
		pomodoroStartTime: genericDateObj,
		pomodoroEndTime: genericDateObj,
		currentTime: "",
		countDownTimer: 0,
		pomodoroCounter: 0,
		restCounter: 0,
		cycleRestCounter: 0
	};

	// add constants to masterTimeObj
	masterTimeObj.fullPomodoroCycle = fullCycle;
	masterTimeObj.halfPomodoroCycle = halfCycle;
	masterTimeObj.focusTime = pomodoroWorkTime;
	masterTimeObj.restTime = pomodoroRestTime;
	masterTimeObj.halfCycleRest = firstCycleRestTime;
	masterTimeObj.fullCycleRest = secondCycleRestTime;
	masterTimeObj.cycleRestCounter = cycleRestCounts;

	displayToConsole(masterTimeObj);

	// add time to master objects
	masterTimeObj = setInitialTime(masterTimeObj);
}

// Main Functions
const setInitialTime = (mainObj) => {
	let tmpTime = getDateObj();

	return mainObj;

}


const getCurrentTime = (mainObj) => {
	const tmpTime = getDateObj();

	// rework this section to properly store time
	// mainObj.hours = mainObj.startTimeObj.getHours();
	// mainObj.mins  = mainObj.startTimeObj.getMinutes();
	// mainObj.secs = mainObj.startTimeObj.getSeconds();
	// mainObj.mil = mainObj.startTimeObj.getMilliseconds();

	return mainObj;
}

const createPomodoro = (mainObj, timeToAdd) => {
	mainObj.pStartTimeObj = mainObj.startTimeObj;
	mainObj.pEndTimeObj = new Date (mainObj.startTimeObj.setMinutes( mainObj.startTimeObj.getMinutes() + timeToAdd));

	mainObj.hours = mainObj.startTimeObj.getHours();
	mainObj.mins  = mainObj.startTimeObj.getMinutes();
	mainObj.secs = mainObj.startTimeObj.getSeconds();
	mainObj.mil = mainObj.startTimeObj.getMilliseconds();

	return mainObj;
}

// Helper Functions
const 


const addMinutes = (numOfMinutes, date = new Date()) => {
	date.setMinutes(date.getMinutes() + numOfMinutes);
	return date;
}

const displayToConsole = (anObj) => {
	console.log(anObj);
}

const flipBoolean = (aBool) => {
	switch(aBool) {
		case true:
			return false;
		case false:
			return true;
		default:
			console.log("Error. Was a boolean sent to the flipBoolean function?");
	}

	return tmp;
}

const getDateObj = () => {
	let timeObj = new Date();
	return timeObj;
}

// Run the javascript program

main()
