import { clearFilters } from '../filter-map-form.js';
import { postData } from '../utils.js';

async function sendForm(form, data) {
	try {
		const response = await postData(
			'https://23.javascript.pages.academy/keksobooking',
			data
		);
		console.log(response);
		clearFilters();
		form.reset();
	} catch (e) {
		console.error(e);
	}
}

function adFormSubmitHandler(evt) {
	evt.preventDefault();
	const formData = new FormData(evt.target);
	sendForm(evt.target, formData);
}

export { adFormSubmitHandler };
