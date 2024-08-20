// replace with your own API KEY (register on unsplash.com to get it).

// Lesson 26 My API_KEYUcxmetuPnt2wd3vltsdXqYaOSvDxirnsB7rh5iRrBHI
// Lesson 26 API_KEY qCnxm3oi9NS9mzAkGmh7_4B6V3p6DJnyFs_wKfNQFF4 Lesson 26 API_KEY

const API_KEY = 'UcxmetuPnt2wd3vltsdXqYaOSvDxirnsB7rh5iRrBHI';

const button = document.getElementById('fetch-button');
button.addEventListener('click', () => {
	fetch(`https://api.unsplash.com/photos/random?count=5&client_id=${API_KEY}`)
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

const selectElement = document.getElementById('selectElement')

for (let i = 0; i < imageCount.options.length; i++) {
	selectElement.options[i].text = `${i + 1}. ${selectElement.options[i].text}`;
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', function () {
	location.reload();
});