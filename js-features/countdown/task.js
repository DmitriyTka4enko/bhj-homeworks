const timer = document.getElementById('timer');
const time = new Date();

let hours = 00;
let minutes = 00;
let seconds = 20;

function Timer() {
	time.setHours(hours);
	time.setMinutes(minutes);
	time.setSeconds(seconds);

	timer.textContent = time.toLocaleTimeString('ru-Ru', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit'
	});
}

Timer();

setInterval(() => {
	seconds--;

	if (hours === 0 && minutes === 0 && seconds === 0) {
		alert('Вы победили в конкурсе!')
	}

	Timer();
}, 1000)