import {
	adFormChangeHandler,
	disabledInvalidOptions,
} from './ad-form-change-parameters.js';
import { adFormSubmitHandler, resetAdForm } from './ad-form-send.js';
import { validateAdForm } from './ad-form-validate.js';

const adForm = document.querySelector('.ad-form');

function disabledActiveElementsAdForm(boolean) {
	adForm.classList.toggle('ad-form--disabled');
	adForm.querySelectorAll('fieldset').forEach(el => (el.disabled = boolean));
}

disabledActiveElementsAdForm(true);

function initializingTheAdForm() {
	disabledActiveElementsAdForm(false);
	disabledInvalidOptions(1, 'option:not([value="1"])');

	adForm.addEventListener('change', adFormChangeHandler);

	adForm.addEventListener('input', validateAdForm);

	adForm.addEventListener('submit', adFormSubmitHandler);
	adForm.addEventListener('reset', () => resetAdForm(adForm));
}

export { adForm, initializingTheAdForm };
