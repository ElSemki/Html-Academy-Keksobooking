import { clearFilters } from '../filter-map-form.js';
import { postData } from '../utils.js';
import {
	disabledInvalidOptions,
	minPriceForHousing,
} from './ad-form-change-parameters.js';

import { printAdsToMap, tokyoCenter } from '../map.js';
import { renderAds } from '../render-ads.js';

async function sendForm(form, data) {
	try {
		const response = await postData(
			'https://23.javascript.pages.academy/keksobooking',
			data
		);
		console.log(response);
		resetAdForm(form);
	} catch (e) {
		console.error(e);
	}
}

function resetAdForm(form) {
	form.reset();
	clearFilters();

	form.querySelectorAll('img').forEach(img => {
		if (img.closest('.ad-form-header__preview')) {
			img.src = './img/avatars/default.png';
		} else {
			img.remove();
		}
	});

	form.querySelector(
		'#address'
	).value = `${tokyoCenter.lat}, ${tokyoCenter.lng}`;

	form.querySelector('#price').min =
		minPriceForHousing[form.querySelector('#type').value];
	form.querySelector('#price').placeholder =
		minPriceForHousing[form.querySelector('#type').value];

	disabledInvalidOptions(1, 'option:not([value="1"])');
	renderAds(printAdsToMap);
}

function adFormSubmitHandler(evt) {
	evt.preventDefault();
	const formData = new FormData(evt.target);
	sendForm(evt.target, formData);
}

export { adFormSubmitHandler, resetAdForm };
