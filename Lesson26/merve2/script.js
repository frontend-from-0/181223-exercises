const API_KEY = 'iuYEWfiOnuXKfSakf9COc21qN2ezywD8IQuX0Dqvohw';
const imageContainer = document.querySelector('#image-container');
const fetchButton = document.getElementById('fetch-button');
const clearButton = document.getElementById('clear-button');
const countInput = document.getElementById('image-count');

function fetchImages() {
    imageContainer.innerHTML = ''; // Clear existing images
    const count = countInput.value || 10; // Default to 10 if no value provided

    fetch(`https://api.unsplash.com/photos/random?count=${count}&client_id=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (!Array.isArray(data)) {
                throw new Error('Data is not an array');
            }
            data.forEach(imgData => {
                const newImage = document.createElement('img');
                newImage.src = imgData.urls.regular;
                newImage.alt = imgData.alt_description;
                newImage.classList.add('image');
                imageContainer.appendChild(newImage);
            });
        })
        .catch(error => console.error('Error:', error));
}

fetchButton.addEventListener('click', fetchImages);

clearButton.addEventListener('click', () => {
    imageContainer.innerHTML = ''; // Clear all images
});