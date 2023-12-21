const reveal = Array.from(document.querySelectorAll('.reveal'));

const showRevealBlock = () => {
	reveal.forEach(item => {
		const {top} = item.getBoundingClientRect()

		if (top < window.innerHeight && top > 0) {
			item.classList.add('reveal_active');
		} else {
			item.classList.remove('reveal_active');
		}
	})
}

window.addEventListener('scroll', showRevealBlock)