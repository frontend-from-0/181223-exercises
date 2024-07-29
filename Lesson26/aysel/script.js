// replace with your own API KEY (register on unsplash.com to get it).

const API_KEY = 'XrnVTfS_Uz6Gp2BIZzdpGiIXEdM2V5DraTqokPYwH4k';  

const fetchButton = document.getElementById('fetch-button');
const clearButton = document.getElementById('clear-button');
const imageCountSelect = document.getElementById('image-count');
const imageContainer = document.getElementById('image-container');

fetchButton.addEventListener('click', () => {
    const count = imageCountSelect.value; 
    fetch(`https://api.unsplash.com/photos/random?count=${count}&client_id=${API_KEY}`) 
        .then((response) => response.json())
        .then((data) => {
            imageContainer.innerHTML = '';  
            data.map((imgData) => {
                const newImage = document.createElement('img');
                newImage.src = imgData.urls.regular;
                newImage.alt = imgData.alt_description;
                newImage.classList.add('image');
                imageContainer.appendChild(newImage);
            });
        })
        .catch((error) => console.log(error));
});

clearButton.addEventListener('click', () => {
    imageContainer.innerHTML = '';  
});
