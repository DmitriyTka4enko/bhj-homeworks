const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let getHole = index => document.getElementById(`hole${index}`)

function IsWin() {
	dead.textContent = 0;
	lost.textContent = 0;
	alert('Вы победили!');
	stop()
}

function IsLost() {
	dead.textContent = 0;
	lost.textContent = 0;
	alert('Вы проиграли!');
	stop()
}


for (let i = 1; i < 10; i++) {
	getHole(i).onclick = () => {
		if (getHole(i).className === 'hole hole_has-mole') {
			dead.textContent++;
		} else {
			lost.textContent++;
		}

		if (dead.textContent == 10) {
			IsWin();
		} else if (lost.textContent == 5) {
			IsLost();
		}
	}
}