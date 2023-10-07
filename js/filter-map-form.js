const filterMapForm = document.querySelector('.map__filters');
const filterControlGroups = Array.from(filterMapForm.children);

const housingPrice = {
	low: {
		from: 0,
		to: 10000,
	},
	middle: {
		from: 10000,
		to: 50000,
	},
	high: {
		from: 50000,
		to: Infinity,
	},
};

function disabledActiveElementsFilterForm(boolean) {
	filterMapForm
		.querySelectorAll('select')
		.forEach(el => (el.disabled = boolean));
	filterMapForm.querySelector('fieldset').disabled = boolean;
}

disabledActiveElementsFilterForm(true);

function renderFilterAds(cb) {
	disabledActiveElementsFilterForm(false);
	filterMapForm.addEventListener('change', cb);
}

const filterRules = {
	'housing-type': ({ type }, value) => value === type,
	'housing-price': ({ price }, value) =>
		price >= housingPrice[value].from && price < housingPrice[value].to,
	'housing-rooms': ({ rooms }, value) => value === rooms.toString(),
	'housing-guests': ({ guests }, value) => value === guests.toString(),
	'housing-features': ({ features }) => {
		if (!features) {
			return false;
		}
		const checkedCheckboxes = Array.from(
			filterMapForm.querySelectorAll('[type="checkbox"]:checked')
		);
		return checkedCheckboxes.every(({ value }) => features.includes(value));
	},
};

const filterAds = ({ offer }) =>
	filterControlGroups.every(
		({ value, id }) => value === 'any' || filterRules[id](offer, value)
	);

function clearFilters() {
	filterMapForm.reset();
}

export { clearFilters, filterAds, renderFilterAds };
