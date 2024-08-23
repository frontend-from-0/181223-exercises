
const api_key = 'da1Y9WQ0gp8Zrchtb8aPs2YxMg4bk6IBgcUyVq4OBh8';
const url = `https://api.unsplash.com/search/photos`;

const searchForm = document.querySelector('form');
const searchInput = document.querySelector('.search-input');
const imagesContainer = document.querySelector('.images-container');
const loadMoreBtn = document.querySelector('.loadMoreBtn');

let page = 1;
// Function to fetch images using Unsplash API
const fetchImages = async (query, pageNo) => {
    
    try {

        if (pageNo === 1) {
            imagesContainer.innerHTML = '';
        }



        const url = `https://api.unsplash.com/search/photos?query=${query}
    &per_page=5&page=${pageNo}&client_id=${api_key}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
            data.results.forEach(photo => {
                // Creating Image Div
                const imageElement = document.createElement('div');
                imageElement.classList.add('imageDiv');
                imageElement.innerHTML = `<img src="${photo.urls.regular}"/>`;

                // Creating Overlay
                const overlayElement = document.createElement('div');
                overlayElement.classList.add('overlay');

                // Creting Overlay Text
                const overlayText = document.createElement('h3');
                overlayText.innerText = `${photo.alt_description}`;

                overlayElement.appendChild(overlayText);
                imageElement.appendChild(overlayElement);

                imagesContainer.appendChild(imageElement);
            });

            if (data.total_pages === pageNo) {
                loadMoreBtn.style.display = "none";
            } else {
                loadMoreBtn.style.display = "block";
            }

            if (data.results.length > 0) {
                resetBtn.style.display = 'block';
            } else {
                resetBtn.style.display = 'none';
            }

        } else {
            imagesContainer.innerHTML = `<h2>No Image Found</h2>`;
            if (loadMoreBtn.style.display === "block") 
                loadMoreBtn.style.display = "none";
        }
    } catch (error) {
        imagesContainer.innerHTML = `<h2>Failed To Fetch Images. Please Try Again Later</h2>`;
    }
}

// Adding Event Listener to Search Form
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputText = searchInput.value.trim();

    if (inputText !== '') {
        page = 1;
        fetchImages(inputText, page);
    } else {
        imagesContainer.innerHTML = `<h2>Please Enter An Image Tagname</h2>`;
    }
});

// Adding Event Listener To Load MoreButton To Fetch More Images
loadMoreBtn.addEventListener('click', () => {
    fetchImages(searchInput.value.trim(), ++page);
})

const resetBtn = document.createElement('button');
resetBtn.innerText = 'Reset';
resetBtn.style.display = 'none';

resetBtn.addEventListener('click', () => {
    imagesContainer.innerHTML = '';
    loadMoreBtn.style.display = 'none';
    resetBtn.style.display = 'none';
});

document.body.appendChild(resetBtn);

let imageCounter = 0;
function addImage() {
    imageCounter ++;
    if (imageCounter === 6) {

    }
}