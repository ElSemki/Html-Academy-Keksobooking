const filterMapForm = document.querySelector('.map__filters');

filterMapForm.querySelectorAll('select').forEach(el => (el.disabled = true));
filterMapForm.querySelector('fieldset').disabled = true;

function initializingTheFilterMapForm() {
	filterMapForm.querySelectorAll('select').forEach(el => (el.disabled = false));
	filterMapForm.querySelector('fieldset').disabled = false;
}

export { initializingTheFilterMapForm };
