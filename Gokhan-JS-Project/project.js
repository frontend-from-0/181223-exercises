const api_key = 'da1Y9WQ0gp8Zrchtb8aPs2YxMg4bk6IBgcUyVq4OBh8';
const url = `https://api.unsplash.com/search/photos`;

// Categories
document.addEventListener('DOMContentLoaded', function () {

    const categories = ['Nature', 'Car', 'Animal', 'Food', 'City', 'Technology', 'Travel', 'Baby', 'Tree', 'Eye'];

    const createCategoryButtons = () => {
        const categoryButtonsContainer = document.querySelector('.category-buttons');
        categories.forEach((category, index) => {
            const categoryBtn = document.createElement('button');
            categoryBtn.innerText = category;

            // Adding Event Listener to Categories
            categoryBtn.addEventListener('click', () => {
                searchInput.value = '';
                selectedCategory = category;
                page = 1;
                fetchImages(category, page);
            });

            categoryButtonsContainer.appendChild(categoryBtn);
        });
    }

    createCategoryButtons();
});

// Function to fetch images using Unsplash API
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
                overlayText.innerText = `${photo.alt_description}`;

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

const addImgClickEvents = () => {
    document.querySelectorAll('.imageDiv img').forEach(image => {
        image.addEventListener('click', (e) => {
            const photoData = e.target.getAttribute('data-photo');
            const photo = JSON.parse(photoData);

            modal.style.display = "block";
            modalImage.src = photo.urls.regular;
            imageDesc.textContent = photo.alt_description || "No Description";
            photographerName.textContent = `Photo by: ${photo.user.name}` || "Unknown Photographer";
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
}


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