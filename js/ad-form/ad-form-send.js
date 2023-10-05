import { postData } from '../utils.js';

async function sendForm(form, data) {
	try {
		const response = await postData(
			'https://23.javascript.pages.academy/keksobooking',
			data
		);
		console.log(response);
	} catch (e) {
		console.error(e);
	} finally {
		form.reset();
	}
}

function adFormSubmitHandler(evt) {
	evt.preventDefault();

	const formData = new FormData(evt.target);

	sendForm(evt.target, formData);
}

export { adFormSubmitHandler };
