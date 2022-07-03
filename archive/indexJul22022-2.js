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

	const keys = Object.keys(pomodoroObj);
	// test that new object is set up by cycling through object
	
	let counter = 0;
	let numberOfPomodoroObjKeys = keys.length; 

	const getKey = (passedIndex, passedArray) => {
		let tmpIndex = passedIndex;
		let tmpArray = passedArray;

		let outputKey = tmpArray[tmpIndex];
		return outputKey;
	}

	const getValue = (passedKey, passedObj) => {
		let tmpKey = passedKey;
		let tmpObj = passedObj;

		let outputValue = tmpObj[tmpKey];
		return outputValue;
	}

	const getStringKeyValue = (passedIndex, passedArray, passedObj) => {
		const tmpIndex = passedIndex;
		const tmpArray = passedArray;
		const tmpObj = passedObj;

		const tmpKey = getKey(tmpIndex, tmpArray);
		const tmpValue = getValue(tmpKey, tmpObj);

		const outputString = `${tmpKey}:${tmpValue}`;
		return outputString;
	}

	const incrementCounter = (passedCounter) => {
		let tmpCounter = passedCounter;
		tmpCounter++;
		let outputCounter = tmpCounter;
		return outputCounter;
	}

	// endlessly loop through object until I hit stop
	const loopThroughObj = (passedCounter, passedKeyArray, passedNumberOfKeys, passedObj) => {
		let tmpCounter = passedCounter;
		let tmpKeyArray = passedKeyArray;
		let tmpNumberOfKeys = passedNumberOfKeys;
		let tmpObj = passedObj;
		let tmpMsg = "";

		switch ( true ) {
			case( tmpCounter == tmpNumberOfKeys ):
				// should end the endless interval loop
				document.getElementById("MainClock").innerHTML="";
				tmpMsg = getStringKeyValue(tmpCounter, tmpKeyArray, tmpObj);
				document.getElementById("MainClock").innerHTML=tmpMsg;
				console.log("all items from object displayed for 1 second");
				clearInterval(loopThroughObj);
				return tmpObj
				break;
			case( tmpCounter < tmpNumberOfKeys ):
				document.getElementById("MainClock").innerHTML="";
				// grab current key-value pair in object
				tmpMsg = getStringKeyValue(tmpCounter, tmpKeyArray, tmpObj);
				document.getElementById("MainClock").innerHTML=tmpMsg;
				// move to next key-value pair in object
				tmpCounter = incrementCounter(tmpCounter);
				break;
			default:
				document.getElementById("MainClock").innerHTML="";
				document.getElementById("MainClock").innerHTML="Error while looping over object elements";
		}

		let intervalTest = setInterval(() => { loopThroughObj(tmpCounter, tmpKeyArray, tmpNumberOfKeys, tmpObj) }, 1000);

	}

	loopThroughObj(counter, keys, numberOfPomodoroObjKeys, pomodoroObj);

}

const pomodoroLoop = (passedObj) => {
	let internalObj = passedObj;
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

