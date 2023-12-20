const adsList = Array.from(document.querySelectorAll('.rotator__case'));

setInterval(() => {
	i = adsList.findIndex(item => item.className.includes('rotator__case_active'));
	adsList[i].classList.remove('rotator__case_active');
	i++;

	if (i == adsList.length) {
		i = 0;
	}
	adsList[i].classList.add('rotator__case_active')
}, 1000)