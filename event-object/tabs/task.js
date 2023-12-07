const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

for (let i = 0; tab.length > i >= 0; i++) {
	tab[i].addEventListener('click', function() {
		document.querySelector('div.tab_active').classList.remove('tab_active');
		document.querySelector('div.tab__content_active').classList.remove('tab__content_active');
		tabContent[i].classList.add('tab__content_active');
		tab[i].classList.add('tab_active');
	});
}

