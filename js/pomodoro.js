const main = () => {
	console.log("loaded from external javascript file");

	// Interface Elements
	const timeElement = document.getElementById("time-display");
	const amPmElement = document.getElementById("ampm");

	const amString = "am";
	const pmString = "pm";

	// Utility Functions
	const zeroPaddNumer = (unPaddedNumber, paddedLength) => {
		return String(unPaddedNumber).padStart(paddedLength, "0");
	};

	const currentTime = () => {
		return new Date();
	};

	const hoursValue = (theTime) => {
		let rightNow = new Date();
		let rawHours = rightNow.getHours();
		if (rawHours == 0) {
			return 12;
		} else if (rawHours > 12) {
			return rawHours - 12;
		} else {
			return rawHours;
		}
	};

	const minutesValue = (theTime) => {
		let rightNow = new Date();
		let rawMinutes = rightNow.getMinutes();
		if(rawMinutes < 10) {
			return zeroPaddedNumber(rawMinutes, 2);
		} else {
			return rawMinutes;
		}
	};

	const secondsValue = (theTime) => {
		let rightNow = new Date();
		let rawSeconds = rightNow.getSeconds();
		if(rawSeconds < 10) {
			return zeroPaddedNumber(rawSeconds, 2);
		} else {
			return rawSeconds;
		}
	};

	const amPmValue = (theTime) => {
		let rightNow = new Date();
		let rightNowHoursNumber = rightNow.getHours();

		if (rightNowHoursNumber >= 12) { 
			return pmString; 
		} else {
			return amString;
		}
	};

	const updateTimeValues = () => {
		let rightNow = currentTime();
		let currentTimeString = `${hoursValue(rightNow)}:${minutesValue(rightNow)}:${secondsValue(rightNow)}`;
		let currentAmPmString = `${amPmValue(rightNow)}`;

		timeElement.innerHTML = currentTimeString;
		amPmElement.innerHTML = currentAmPmString;

		let dateTimeString = `${rightNow.getHours()}:${rightNow.getMinutes()}:${rightNow.getSeconds()}`;
		timeElement.setAttribute("datetime", `${dateTimeString}`);
	};

	setInterval(() => { updateTimeValues(); }, 1000);
};


window.addEventListener("DOMContentLoaded", (event) => {
	console.log("DOM loaded");
	main();
});
