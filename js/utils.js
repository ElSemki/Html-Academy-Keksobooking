function getRandomIntInclusive(min, max) {
	if (min < 0 || max < 0) return -1;

	if (min > max) {
		[min, max] = [max, min];
	}

	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, decimals = 0) {
	if (min < 0 || max < 0) return -1;

	if (min > max) {
		[min, max] = [max, min];
	}

	return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
}

function showInvalidValueInputError(inputElement, message) {
	inputElement.style.border = '1px solid red';
	inputElement.setCustomValidity(message);
}

async function getData(url) {
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`${response.status}: ${response.statusText}`);
	}
	return await response.json();
}

async function postData(url, data) {
	const response = await fetch(url, {
		method: 'POST',
		body: data,
	});

	return await response.json();
}

export {
	getData,
	getRandomFloat,
	getRandomIntInclusive,
	postData,
	showInvalidValueInputError,
};
