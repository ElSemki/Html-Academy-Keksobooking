import { getData } from './utils.js';

async function renderAds(callback) {
	try {
		const adArray = await getData(
			'https://23.javascript.pages.academy/keksobooking/data'
		);
		callback(adArray.slice(0, 10));
	} catch (e) {
		console.error(e);
	}
}

export { renderAds };
