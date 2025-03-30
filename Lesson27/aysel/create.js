document.getElementById('create-post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    createPost();
});

function createPost() {
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    const newPost = {
        title: title,
        body: body,
    };

    fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Post created:', data);
        showConfirmation(data);
    })
    .catch(error => console.error('Error creating post:', error));
}
function showConfirmation(postData) {
    const confirmationMessage = document.getElementById('confirmation-message');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const goBackButton = document.getElementById('go-back-button');
  
    postTitle.innerText = "Post Title: " + postData.title;
    postBody.innerText = "Post Body: " + postData.body;
  
    confirmationMessage.style.display = 'block';
    goBackButton.style.display = 'inline-block';
  
    // Redirect after 3 seconds
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 3000); // 3000ms = 3 seconds
  
  }
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('go-back-button').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});

