const api_key = 'da1Y9WQ0gp8Zrchtb8aPs2YxMg4bk6IBgcUyVq4OBh8';
const url = `https://api.unsplash.com/search/photos`;

// Categories
document.addEventListener('DOMContentLoaded', function () {

    const categories = ['Book', 'Car', 'Animal', 'Food', 'Paint', 'Cartoon', 'Cities', 'Technology', 'Traveler', 'Sky', 'Tree'];

    const createCategoryButtons = () => {
        const categoryButtonsContainer = document.querySelector('.category-buttons');
        categories.forEach((category, index) => {
            const categoryBtn = document.createElement('button');
            categoryBtn.innerText = category;
            categoryBtn.setAttribute('data-index', index);

            // Adding Event Listener to Categories
            categoryBtn.addEventListener('click', () => {
                searchInput.value = '';
                selectedCategory = category.toUpperCase();
                page = 1;
                console.log(`Selected Category: ${selectedCategory}`);
                fetchImages(category, page);
            });
            categoryButtonsContainer.appendChild(categoryBtn);
        });
    }
    createCategoryButtons();
});

// // Function to fetch images using Unsplash API
let page = 1;
let selectedCategory = '';

const imagesContainer = document.querySelector('.images-container');

const fetchImages = async (query, pageNo) => {
    try {
        if (pageNo === 1) {
            imagesContainer.innerHTML = '';
        }

        const url = `https://api.unsplash.com/search/photos?query=${query}
        &per_page=10&page=${pageNo}&client_id=${api_key}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
            data.results.forEach(photo => {
                const imageElement = document.createElement('div');
                imageElement.classList.add('imageDiv');

                // Data-Photo
                const photoData = JSON.stringify({
                    urls: photo.urls,
                    alt_description: photo.alt_description,
                    user: { name: photo.user.name }
                });

                imageElement.innerHTML = `<img src="${photo.urls.regular}" data-photo='${photoData}'/>`;

                const overlayElement = document.createElement('div');
                overlayElement.classList.add('overlay');

                const overlayText = document.createElement('h3');
                overlayText.innerText = (photo.alt_description || "No Description").toUpperCase();

                overlayElement.appendChild(overlayText);
                imageElement.appendChild(overlayElement);

                imagesContainer.appendChild(imageElement);
            });

            addImgClickEvents();

            if (data.total_pages === pageNo) {
                loadMoreBtn.style.display = "none";
            } else {
                loadMoreBtn.style.display = "block";
                resetBtn.style.display = 'block';
            }
        } else {
            imagesContainer.innerHTML = `<h2>No Image Found</h2>`;
            loadMoreBtn.style.display = "none";
        }
    } catch (error) {
        imagesContainer.innerHTML = `<h2>Failed To Fetch Images. Please Try Again Later</h2>`;
        loadMoreBtn.style.display = "none";
    }
}

// Adding Event Listener to Search Form
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputText = searchInput.value.trim();

    if (inputText !== '') {
        selectedCategory = '';
        page = 1;
        fetchImages(inputText, page);
    } else {
        imagesContainer.innerHTML = `<h2>Please Enter An Image Tagname</h2>`;
    }
});

// Adding Event Listener To LoadMoreButton To Fetch More Images
const loadMoreBtn = document.querySelector('.loadMoreBtn');

loadMoreBtn.addEventListener('click', () => {
    if (selectedCategory) {
        fetchImages(selectedCategory, ++page);
    } else {
        fetchImages(searchInput.value.trim(), ++page);
    }
});

// Modal Item
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const imageDesc = document.getElementById("imageDescription");
const photographerName = document.getElementById("photographerName");

let currentImageIndex = 0;
let currentPhotos = [];

const addImgClickEvents = () => {
    const images = document.querySelectorAll('.imageDiv img');
    currentPhotos = Array.from(images).map(img => JSON.parse(img.getAttribute('data-photo')));

    images.forEach((image, index) => {
        image.addEventListener('click', (e) => {
            currentImageIndex = index;
            modal.style.display = "block";
            updateModalImage();
        });
    });
}

const closeModalBtn = document.querySelector(".close");
closeModalBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// // Add ClickEvents For Next and Previous Button
document.getElementById("prevButton").addEventListener("click", () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateModalImage();
    }
});

document.getElementById("nextButton").addEventListener("click", () => {
    if (currentImageIndex < currentPhotos.length - 1) {
        currentImageIndex++;
        updateModalImage();
    }
});

// Modal
const updateModalImage = () => {
    const photo = currentPhotos[currentImageIndex];
    modalImage.src = photo.urls.regular;

    // Capitalize the letters of the description
    const description = photo.alt_description || "No Description";
    const capitalizedDescription = description.toUpperCase();

    imageDesc.textContent = capitalizedDescription;
    photographerName.textContent = `Photo by: ${photo.user.name}` || "Unknown Photographer";
};


// Reset Button
const resetBtn = document.querySelector('.resetBtn');

resetBtn.innerText = 'Reset';
resetBtn.style.display = 'none';

resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    imagesContainer.innerHTML = '';
    loadMoreBtn.style.display = 'none';
    resetBtn.style.display = 'none';
    page = 1;
});