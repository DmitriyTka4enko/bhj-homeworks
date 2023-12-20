const reveal =Array.from(document.querySelectorAll('.reveal'));

const showRevealBlock =() => {
	reveal.forEach(item => {
		const {top, bottom} = item.getBoundingClientRect()

		if (top < window.innerHeight || bottom > 0) {
			item.classList.add('reveal_active');
		} else {
			item.classList.remove('reveal_active');
		}
	})
}

window.addEventListener('scroll', showRevealBlock)