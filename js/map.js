/* global L:readonly */
import { initializingTheAdForm } from './ad-form.js';
import { initializingTheFilterMapForm } from './filter-map-form.js';
import { createPopup } from './popup.js';
import { renderAds } from './render-ads.js';

const tokyoCenter = {
	lat: 35.6895,
	lng: 139.692,
};

const addressInput = document.querySelector('#address');

addressInput.disabled = true;
addressInput.value = `${35.6895}, ${139.692}`;

const map = L.map('map-canvas')
	.on('load', () => {
		renderAds(printAdsToMap);
		initializingTheAdForm();
		initializingTheFilterMapForm();
	})
	.setView(
		{
			lat: tokyoCenter.lat,
			lng: tokyoCenter.lng,
		},
		13
	);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution:
		'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinIcon = L.icon({
	iconUrl: '../leaflet/img/main-pin.svg',
	iconSize: [52, 52],
	iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
	{
		lat: tokyoCenter.lat,
		lng: tokyoCenter.lng,
	},
	{
		draggable: true,
		icon: mainPinIcon,
	}
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', evt => {
	const { lat, lng } = evt.target.getLatLng();
	addressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

function printAdsToMap(arr) {
	arr.forEach(ad => {
		const icon = L.icon({
			iconUrl: '../leaflet/img/pin.svg',
			iconSize: [40, 40],
			iconAnchor: [20, 40],
		});

		const marker = L.marker(
			{
				lat: ad.location.lat,
				lng: ad.location.lng,
			},
			{
				icon,
			}
		);
		marker.addTo(map).bindPopup(createPopup(ad), { keepInView: true });
	});
}
