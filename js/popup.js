const popupTemplate = document
	.querySelector('#card')
	.content.querySelector('.popup');

const typeOfPremises = {
	flat: 'Квартира',
	bungalow: 'Бунгало',
	house: 'Дом',
	palace: 'Дворец',
};

function createPopup({ author, offer }) {
	const popupElement = popupTemplate.cloneNode(true);

	popupElement.querySelector('.popup__title').textContent = offer.title;
	popupElement.querySelector('.popup__text--address').textContent =
		offer.address;
	popupElement.querySelector(
		'.popup__text--price'
	).textContent = `${offer.price} ₽/ночь.`;

	popupElement.querySelector('.popup__type').textContent =
		typeOfPremises[offer.type];
	popupElement.querySelector(
		'.popup__text--capacity'
	).textContent = `${offer.rooms} комнат для ${offer.guests} гостей.`;
	popupElement.querySelector(
		'.popup__text--time'
	).textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}.`;

	if (offer.features?.length) {
		popupElement.querySelector('.popup__features').innerHTML = '';
		offer.features.forEach(feature => {
			const featureElement = document.createElement('li');
			featureElement.className = `popup__feature
				popup__feature--${feature}`;
			popupElement.querySelector('.popup__features').append(featureElement);
		});
	} else {
		popupElement.querySelector('.popup__features').classList.add('hidden');
	}

	popupElement.querySelector('.popup__description').textContent =
		offer.description;

	if (offer.photos?.length) {
		popupElement.querySelector('.popup__photos').innerHTML = '';
		offer.photos.forEach(photo => {
			const imgElement = document.createElement('img');
			imgElement.src = photo;
			imgElement.className = 'popup__photo';
			imgElement.width = 45;
			imgElement.height = 40;
			imgElement.alt = 'Фотография жилья';
			popupElement.querySelector('.popup__photos').append(imgElement);
		});
	} else {
		popupElement.querySelector('.popup__photos').classList.add('hidden');
	}

	popupElement.querySelector('.popup__avatar').src = author.avatar;
	popupElement.querySelector('.popup__avatar').onerror = function () {
		this.onerror = null;
		this.src = './img/avatars/default.png';
	};

	return popupElement;
}

export { createPopup };
