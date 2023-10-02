import { getRandomFloat, getRandomIntInclusive } from './utils.js';

const titles = [
	'Все ко мне на хату',
	'Сдам в аренду',
	'Приглашаю на поселение',
	'Сдам квартиру не дорого',
	'Объявление об аренде',
	'Сдаем жилье',
	'Сдам квартиру',
	'Аренда помещения',
];
const types = ['palace', 'flat', 'house', 'bungalow'];
const checkinTime = ['12:00', '13:00', '14:00'];
const checkoutTime = ['12:00', '13:00', '14:00'];
const featuresArr = [
	'wifi',
	'dishwasher',
	'parking',
	'washer',
	'elevator',
	'conditioner',
];

const descriptions = [
	'Хорошая квартира',
	'С ремонтом',
	'Только без животных',
	'Вид на море',
	'Метро в пяти минутах',
	'Хорошие соседи',
];

const photosArr = [
	'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
	'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
	'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

function creatingAnArrOfRandomLengthFromAnotherArray(arr) {
	const newArr = [];
	const randomNumberLength = getRandomIntInclusive(0, arr.length - 1);
	let randomIndexArr;

	for (let i = 0; i < randomNumberLength; i++) {
		randomIndexArr = getRandomIntInclusive(0, arr.length - 1);
		if (!newArr.includes(arr[randomIndexArr])) {
			newArr.push(arr[randomIndexArr]);
		}
	}
	return newArr;
}

const adArray = [];

for (let i = 0; i < 8; i++) {
	const locationX = getRandomFloat(35.65, 35.69, 5);
	const locationY = getRandomFloat(139.7, 139.79, 5);
	const ad = {
		author: {
			avatar: `img/avatars/user${i < 10 ? `0${i + 1}` : `${i + 1}`}.png`,
		},
		offer: {
			title: titles[getRandomIntInclusive(0, titles.length - 1)],
			address: `${locationX}, ${locationY}`,
			price: getRandomIntInclusive(10000, 25000),
			type: types[getRandomIntInclusive(0, types.length - 1)],
			rooms: getRandomIntInclusive(1, 10),
			guests: getRandomIntInclusive(1, 10),
			checkin: checkinTime[getRandomIntInclusive(0, checkinTime.length - 1)],
			checkout: checkoutTime[getRandomIntInclusive(0, checkoutTime.length - 1)],
			features: creatingAnArrOfRandomLengthFromAnotherArray(featuresArr),
			description:
				descriptions[getRandomIntInclusive(0, descriptions.length - 1)],
			photos: creatingAnArrOfRandomLengthFromAnotherArray(photosArr),
		},
		location: {
			x: locationX,
			y: locationY,
		},
	};
	adArray.push(ad);
}

export { adArray };
