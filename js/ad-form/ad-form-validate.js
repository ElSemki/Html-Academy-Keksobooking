import { showInvalidValueInputError } from '../utils.js';

function validateAdForm(evt) {
	if (evt.target.closest('#title')) {
		const titleInput = evt.target;
		titleInput.setCustomValidity('');
		const valueLength = titleInput.value.length;

		titleInput.style.border = 'none';

		if (valueLength < 30) {
			showInvalidValueInputError(
				titleInput,
				'Минимальная длинна - 30 символов.'
			);
		}

		if (valueLength > 100) {
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

		if (Number.isNaN(priceInput.value)) {
			showInvalidValueInputError(priceInput, 'Пожалуйста, введите число!');
		}

		if (parseInt(priceInput.value) > 10e6) {
			showInvalidValueInputError(priceInput, 'Максимальное значение 1 000 000');
		}

		priceInput.reportValidity();
	}
}

export { validateAdForm };
