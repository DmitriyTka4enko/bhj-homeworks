const value = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const link = Array.from(document.querySelectorAll('.dropdown__link'));

value.addEventListener('click', () => {
	list.classList.add('dropdown__list_active');
});

link.forEach(element => {
	element.onclick = () => {
		value.textContent = element.textContent;
		list.classList.remove('dropdown__list_active');
		return false;
	}
})



