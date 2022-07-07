window.addEventListener('load', (e) => {
	e.preventDefault();
	console.log("loaded from inside js sheet");
	document.querySelector("#display").innerHTML = "javascript loaded after 2.5 secs";
}); 

	/* function(event) {
	event.preventDefault();
	let btnParent = document.querySelector("#btns");
	let newBtn = document.createElement("button");

	newBtn.setAttribute("id", "start-btn");
	newBtn.className = "button-primary";
	newBtn.innerText = "Start";
	newBtn.addEventListener("click", startTimer);
	btnParent.appendChild(newBtn);

	window.location.reload(true);
	// createElement();
	// main();
	*/

const main = () => {
	let mainObj = runPomodoro();
	let tmpObj = resetValues();
	mainObj = tmpObj;
}

const createElement = () => {
	let btnParent = document.querySelector("#Btn-section");
	let newBtn = document.createElement("button");
	newBtn.setAttribute("id", "start-button");
	newBtn.className = "button-primary";
	newBtn.innerText = "Start";
	newBtn.addEventListener("click", startTimer);
	btnParent.appendChild(newBtn);
}

const startTimer = () => {
	console.log("start button clicked");
}

const runPomodoro = () => {
	let pomodoroObj = setUp();
	// pomodoroLoop(pomodoroObj);
	return pomodoroObj;
}

const pomodoroLoop = (passedObj) => {
	let internalObj = passedObj;
	displayTime();
	const timerInterval = setInterval(() => { pomodoroLoop(internalObj) }, 1000);
}

const displayTime = () => {
	const dateNow = new Date();
	const tmpTimeTxt = dateNow.toString();
	displayToBrowser(tmpTimeTxt);
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

