import { clearFilters } from '../filter-map-form.js';
import { postData, removeImageFromInput } from '../utils.js';
import {
	disabledInvalidOptions,
	minPriceForHousing,
} from './ad-form-change-parameters.js';

import { printAdsToMap, setDefaultMapOptions } from '../map.js';
import { renderAds } from '../render-ads.js';
import { showSendStatusPopup } from './dispatch-messages.js';

async function sendForm(form, data) {
	try {
		const response = await postData(
			'https://23.javascript.pages.academy/keksobooking',
			data
		);
		console.log(response);
		showSendStatusPopup(true);
		resetAdForm(form);
	} catch (e) {
		showSendStatusPopup(false);
		console.error(e);
	}
}

function resetAdForm(form) {
	form.reset();
	clearFilters();
	renderAds(printAdsToMap);

	setDefaultMapOptions();

	removeImageFromInput(form.querySelector('.ad-form-header__preview'));
	removeImageFromInput(form.querySelector('.ad-form__photo'));

	form.querySelector('#price').min =
		minPriceForHousing[form.querySelector('#type').value];

	form.querySelector('#price').placeholder =
		minPriceForHousing[form.querySelector('#type').value];

	disabledInvalidOptions(1, 'option:not([value="1"])');
}

function adFormSubmitHandler(evt) {
	evt.preventDefault();
	const formData = new FormData(evt.target);
	sendForm(evt.target, formData);
}

export { adFormSubmitHandler, resetAdForm };
