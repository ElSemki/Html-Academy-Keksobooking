import { addImageFromInput } from '../utils.js';
import { adForm } from './ad-form.js';

const minPriceForHousing = {
	bungalow: 0,
	flat: 1000,
	house: 5000,
	palace: 10000,
};

const roomNumbersSelect = {
	1: () => disabledInvalidOptions(1, 'option:not([value="1"])'),
	2: () => disabledInvalidOptions(2, 'option:not([value="1"], [value="2"])'),
	3: () => disabledInvalidOptions(3, 'option[value="0"]'),
	100: () => disabledInvalidOptions(0, 'option:not([value="0"]'),
};

function disabledInvalidOptions(startValue, optionSelect) {
	adForm.querySelector('#capacity').value = startValue;
	adForm
		.querySelector('#capacity')
		.querySelectorAll(optionSelect)
		.forEach(el => (el.disabled = true));
}

function adFormChangeHandler(evt) {
	if (evt.target.closest('#avatar')) {
		addImageFromInput(
			adForm.querySelector('#avatar'),
			adForm.querySelector('.ad-form-header__preview'),
			40,
			40
		);
	}

	if (evt.target.closest('#images')) {
		addImageFromInput(
			adForm.querySelector('#images'),
			adForm.querySelector('.ad-form__photo'),
			70,
			70
		);
	}

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

		roomNumbersSelect[+roomNumberSelect.value]();
	}
}
export { adFormChangeHandler, disabledInvalidOptions, minPriceForHousing };
