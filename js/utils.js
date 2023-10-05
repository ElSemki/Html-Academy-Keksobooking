function showInvalidValueInputError(inputElement, message) {
	inputElement.style.border = '1px solid red';
	inputElement.setCustomValidity(message);
}

function addImageFromInput(input, photoContainer, width, height) {
	const FILE_TYPES = ['jpg', 'jpeg', 'png'];
	const file = input.files[0];
	const fileName = file.name.toLowerCase();
	const matches = FILE_TYPES.some(it => fileName.endsWith(it));

	if (!matches) return;

	const reader = new FileReader();

	reader.addEventListener('load', () => {
		const img = document.createElement('img');
		img.src = reader.result;
		img.alt = 'пользовательское фото';
		img.width = width;
		img.height = height;
		photoContainer.append(img);
	});

	reader.readAsDataURL(file);
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

export { addImageFromInput, getData, postData, showInvalidValueInputError };
