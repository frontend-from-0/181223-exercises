// replace with your own API KEY (register on unsplash.com to get it).

const API_KEY = 'qCnxm3oi9NS9mzAkGmh7_4B6V3p6DJnyFs_wKfNQFF4';

const button = document.getElementById('fetch-button');
const imageCountInput = document.getElementById('image-count');

button.addEventListener('click', () => {
	const count = imageCountInput.value || 10;
	fetch(`https://api.unsplash.com/photos/random?count=${count}&client_id=0H--XKg-0aAYrjyjyf1S5210_mB215P-RiUCDmtBCrE`)
		.then((response) => response.json())
		.then((data) =>
			data.map((imgData) => {
				const newImage = document.createElement(`img`);
				newImage.src = imgData.urls.regular;
				newImage.alt = imgData.alt_description;
				newImage.classList.add('image');
				const imageContainer = document.querySelector(`#image-container`);
				imageContainer.appendChild(newImage);
			})
		)
		.catch((error) => console.log(error));
});


const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
	const imageContainer = document.querySelector('#image-container');
	while (imageContainer.firstChild) {
		imageContainer.removeChild(imageContainer.firstChild);
	}
});
