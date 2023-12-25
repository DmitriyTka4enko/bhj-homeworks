let visibleTooltip = null;
const hasTooltips = document.querySelectorAll('.has-tooltip');

hasTooltips.forEach((item) => {
	item.addEventListener('click', (event) => {
		event.preventDefault();

		if (visibleTooltip && visibleTooltip.innerText === item.title) {
			visibleTooltip.classList.toggle('tooltip_active');
			return
		}

		if (visibleTooltip) {
			visibleTooltip.classList.remove('tooltip_active');
			document.body.removeChild(visibleTooltip);
		}

		const text = item.title;
		const tooltip = document.createElement('div');

		tooltip.classList.add('tooltip');
		tooltip.innerText = text;
		document.body.appendChild(tooltip);

		const toolTipPosition = item.getBoundingClientRect();

		tooltip.style.left = `${toolTipPosition.left}px`;
		tooltip.style.top = `${toolTipPosition.bottom}px`;

		visibleTooltip = tooltip;
		tooltip.classList.add('tooltip_active');
	})
})

document.addEventListener('click', (e) => {
	const target = e.target;

	if (!target.classList.contains('has-tooltip')) {
		if (visibleTooltip) {
			visibleTooltip.classList.remove('tootlip_active');
			document.body.removeChild(visibleTooltip);
			visibleTooltip = null
		}
	}
})
