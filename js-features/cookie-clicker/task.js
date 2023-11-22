const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('speed__counter');
const ckicksSpeedMeasurement = new Date();

let firstClickTime = null;

cookie.onclick = function () {
	const currentClickTime = new Date();
	clickerCounter.textContent++;

	if (clickerCounter.textContent % 2 === 0) {
		cookie.width = 200;
	} else {
		cookie.width = 150;
	}

	if (firstClickTime) {
		let clickTimeDifference = (currentClickTime - firstClickTime) / 1000;
		let clickerSpeedMeasurement = 1 / clickTimeDifference;
		clickerSpeed.textContent = clickerSpeedMeasurement.toFixed(2);
	}

	firstClickTime = currentClickTime;

}
