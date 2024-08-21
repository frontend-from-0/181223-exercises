const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

//  TODO: 
// 1. Fetch post data for the post with given postId
// 2. Prefill form with post title and post body
// 3. Select form element and attache 'submit' event listener to it, send new post information with UPDATE request
// 4. Show confirmation to the user if update operation was successful


document.addEventListener('DOMContentLoaded', function() {
    if (postId) {
        getPostById(postId).then(postData => {
            document.getElementById('title').value = postData.title;
            document.getElementById('body').value = postData.body;
        }).catch(error => console.error('Error fetching post:', error)); 
    }

    document.getElementById('update-post-form').addEventListener('submit', function(event) {
        event.preventDefault();
        updatePost(postId); 
    });
});

function getPostById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching post by ID:', error)); 
}

function updatePost(id) { 
    const updatedPost = {
        title: document.getElementById('title').value,
        body: document.getElementById('body').value,
    };

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPost)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Post updated:', data);
        showConfirmation(data); 
    })
    .catch(error => console.error('Error updating post:', error)); 
}

function showConfirmation(postData) {

    const confirmationMessage = document.getElementById('confirmation-message');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');

    postTitle.innerText = "Post Title: " + postData.title; 
    postBody.innerText = "Post Body: " + postData.body;

    confirmationMessage.style.display = 'block';
    const goBackButton = document.getElementById('go-back-button');
    goBackButton.style.display = 'inline-block';
    goBackButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

