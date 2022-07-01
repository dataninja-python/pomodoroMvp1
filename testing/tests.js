

// understand how time works in javascript
const main = () => {
	const pomodoroWorkTime = 25;
	const pomodoroRestTime = 5;

	let masterTimeObj = {
		startTimeObj:"",
		pStartTimeObj:"",
		pEndTimeObj:"",
		hours: "",
		mins: "",
		secs: "",
		mil: ""
	};

	masterTimeObj = getTimeObj(masterTimeObj);
	console.log("The entire time object: ", masterTimeObj);
	console.log("Hours: ", masterTimeObj.hours);
	console.log("Minutes: ", masterTimeObj.mins);
	console.log("Seconds: ", masterTimeObj.secs);
	console.log("Milliseconds: ", masterTimeObj.mil);

	masterTimeObj = createPomodoro(masterTimeObj, pomodoroWorkTime);
	console.log("Pomodoro Time Object: ", masterTimeObj);
	console.log("Pomodoro Start: ", masterTimeObj.pStartTimeObj);
	console.log("Pomodoro End: ", masterTimeObj.pEndTimeObj);
	console.log("Hours: ", masterTimeObj.hours);
	console.log("Minutes: ", masterTimeObj.mins);
	console.log("Seconds: ", masterTimeObj.secs);
	console.log("Milliseconds: ", masterTimeObj.mil);

}

const getDateObj = () => {
	const timeObj = new Date();
	return timeObj;
}

const getTimeObj = (mainObj) => {
	mainObj.startTimeObj = getDateObj();

	mainObj.hours = mainObj.startTimeObj.getHours();
	mainObj.mins  = mainObj.startTimeObj.getMinutes();
	mainObj.secs = mainObj.startTimeObj.getSeconds();
	mainObj.mil = mainObj.startTimeObj.getMilliseconds();

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

main()
