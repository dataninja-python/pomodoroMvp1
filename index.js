window.onload = function(event) {
	event.preventDefault();
	const pomodoroObj = {
		pomodoroMasterLaunchTime:
	}
	main()
};

const main = () => {
	displayTime();
	setTimeout(main, 1000);
};

const displayTime = () => {
	let timeOutput = getTime();
	document.getElementById("MainClock").innerHTML="";
	document.getElementById("MainClock").innerHTML=timeOutput;
};

const getTime = () => {
	const rightNow = new Date();
	console.log(rightNow);

	let hh = rightNow.getHours();
	console.log(hh);
	let mm = rightNow.getMinutes();
	console.log(mm);
	let ss = rightNow.getSeconds();
	console.log(ss);
	// let outputM = formatTime(m);
	// let outputS = formatTime(s);

	let textTime = hh + ":" + mm + ":" + ss;

	return textTime;
};

const formatTime = (t) => {
	let temp = t;
	let output  = "";

	if (temp < 10) {
		output =  "0" + temp.toString();
	};

	return output;
};

