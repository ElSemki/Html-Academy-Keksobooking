import { showInvalidValueInputError } from './utils.js';

const adForm = document.querySelector('.ad-form');
const minPriceForHousing = {
	bungalow: 0,
	flat: 1000,
	house: 5000,
	palace: 10000,
};

function disabledInvalidOptions(startValue, optionSelect) {
	adForm.querySelector('#capacity').value = startValue;
	adForm
		.querySelector('#capacity')
		.querySelectorAll(optionSelect)
		.forEach(el => (el.disabled = true));
}

disabledInvalidOptions(1, 'option:not([value="1"])');

adForm.classList.add('ad-form--disabled');
adForm.querySelectorAll('fieldset').forEach(el => (el.disabled = true));

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

	if (evt.target.closest('#room_number')) {
		const roomNumberSelect = evt.target;

		adForm
			.querySelector('#capacity')
			.querySelectorAll('option')
			.forEach(el => (el.disabled = false));

		if (Number(roomNumberSelect.value) === 1) {
			disabledInvalidOptions(1, 'option:not([value="1"])');
		}

		if (Number(roomNumberSelect.value) === 2) {
			disabledInvalidOptions(2, 'option:not([value="1"], [value="2"])');
		}

		if (Number(roomNumberSelect.value) === 3) {
			disabledInvalidOptions(3, 'option[value="0"]');
		}

		if (Number(roomNumberSelect.value) === 100) {
			disabledInvalidOptions(0, 'option:not([value="0"]');
		}
	}
});

adForm.addEventListener('input', evt => {
	if (evt.target.closest('#title')) {
		const titleInput = evt.target;
		titleInput.setCustomValidity('');
		titleInput.style.border = 'none';

		const titleText = titleInput.value;
		if (!titleText) return;

		if (titleText.length < 30) {
			showInvalidValueInputError(
				titleInput,
				'Минимальная длинна - 30 символов'
			);
		}

		if (titleText.length > 100) {
			showInvalidValueInputError(
				titleInput,
				'Максимальная длинна - 100 символов'
			);
		}

		titleInput.reportValidity();
	}

	if (evt.target.closest('#price')) {
		const priceInput = evt.target;
		priceInput.setCustomValidity('');
		priceInput.style.border = 'none';

		if (!priceInput.value) return;

		if (Number.isNaN(priceInput.value)) {
			showInvalidValueInputError(
				priceInput,
				'Только значение числового формата!'
			);
		}

		if (parseInt(priceInput.value) > 10e6) {
			showInvalidValueInputError(priceInput, 'Максимальное значение 1 000 000');
		}

		priceInput.reportValidity();
	}
});

function initializingTheAdForm() {
	adForm.classList.remove('ad-form--disabled');
	adForm.querySelectorAll('fieldset').forEach(el => (el.disabled = false));
}

export { initializingTheAdForm };
