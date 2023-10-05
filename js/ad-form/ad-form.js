import {
	adFormChangeHandler,
	disabledInvalidOptions,
} from './ad-form-change-parameters.js';
import { adFormSubmitHandler } from './ad-form-send.js';
import { validateAdForm } from './ad-form-validate.js';

const adForm = document.querySelector('.ad-form');

adForm.classList.add('ad-form--disabled');
adForm.querySelectorAll('fieldset').forEach(el => (el.disabled = true));

disabledInvalidOptions(1, 'option:not([value="1"])');

adForm.addEventListener('change', adFormChangeHandler);

adForm.addEventListener('input', validateAdForm);

adForm.addEventListener('submit', adFormSubmitHandler);

function initializingTheAdForm() {
	adForm.classList.remove('ad-form--disabled');
	adForm.querySelectorAll('fieldset').forEach(el => (el.disabled = false));
}

export { adForm, initializingTheAdForm };
