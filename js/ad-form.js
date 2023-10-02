const adForm = document.querySelector('.ad-form');
const minPriceForHousing = {
	bungalow: 0,
	flat: 1000,
	house: 5000,
	palace: 10000,
};

adForm.classList.add('ad-form--disabled');
adForm.querySelectorAll('fieldset').forEach(el => (el.disabled = true));

function initializingTheAdForm() {
	adForm.classList.remove('ad-form--disabled');
	adForm.querySelectorAll('fieldset').forEach(el => (el.disabled = false));
}

adForm.addEventListener('change', evt => {
	if (evt.target.closest('#type')) {
		adForm.querySelector('#price').placeholder =
			minPriceForHousing[evt.target.value];
		adForm.querySelector('#price').min = minPriceForHousing[evt.target.value];
	}

	if (evt.target.closest('#timein')) {
		adForm.querySelector('#timeout').value = evt.target.value;
	}

	if (evt.target.closest('#timeout')) {
		adForm.querySelector('#timein').value = evt.target.value;
	}
});

export { initializingTheAdForm };
