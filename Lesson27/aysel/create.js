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
        userId: 1
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
        window.location.href = 'index.html';
    });
}

