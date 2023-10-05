import { renderFilterAds } from './filter-map-form.js';
import { getData } from './utils.js';

async function renderAds(callback) {
	try {
		const adArray = await getData(
			'https://23.javascript.pages.academy/keksobooking/data'
		);
		callback(adArray);
		renderFilterAds(() => callback(adArray));
	} catch (e) {
		alert(e);
		console.error(e);
	}
}

export { renderAds };
