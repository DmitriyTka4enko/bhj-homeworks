const taskList = document.querySelector('.tasks__list');
const input = document.querySelector('.tasks__input');
const addBtn = document.querySelector('.tasks__add');

addBtn.addEventListener('click', (e) => {
	e.preventDefault();
	const text = input.value.trim();

	if (text !== '') {
		const newTask = `
			<div class="task">
				<div class="task__title">
				${text}
				</div>
				<a href="#" class="task__remove">&times;</a>
			</div>	
		`;
		taskList.insertAdjacentHTML('beforeend', newTask);
		input.value = '';
	}
});

taskList.addEventListener('click', (e) => {
	if (e.target.classList.contains('task__remove')) {
		e.target.closest('.task').remove();
	}
})
