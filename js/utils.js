function showInvalidValueInputError(inputElement, message) {
	inputElement.style.border = '1px solid red';
	inputElement.setCustomValidity(message);
}

function addImageFromInput(input, photoContainer) {
	const FILE_TYPES = ['jpg', 'jpeg', 'png'];
	const file = input.files[0];
	const fileName = file.name.toLowerCase();
	const matches = FILE_TYPES.some(it => fileName.endsWith(it));

	if (!matches) return;

	const reader = new FileReader();

	reader.addEventListener('load', () => {
		if (photoContainer.querySelector('img')) {
			photoContainer.querySelector('img').style.visibility = 'hidden';
		}
		photoContainer.style.backgroundImage = `url(${reader.result})`;
		photoContainer.style.backgroundSize = 'cover';
		photoContainer.style.backgroundRepeat = 'no-repeat';
	});

	reader.readAsDataURL(file);
}

function removeImageFromInput(photoContainer) {
	if (photoContainer.querySelector('img')) {
		photoContainer.querySelector('img').style.visibility = 'visible';
	}
	photoContainer.style.backgroundImage = 'none';
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

const isEscEvent = evt => evt.code === 'Escape' || evt.code === 'Esc';

export {
	addImageFromInput,
	getData,
	isEscEvent,
	postData,
	removeImageFromInput,
	showInvalidValueInputError,
};
