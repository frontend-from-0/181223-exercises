document.getElementById('create-button').addEventListener('click', function(event) {
    event.preventDefault(); 

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title.length < 3) {
        alert('Title must be at least 3 characters long.');
        return;
    }

    if (content.length < 3) {
        alert('Content must be at least 3 characters long.');
        return;
    }

    document.getElementById('newForm').dispatchEvent(new Event('submit')); 
});

document.getElementById('newForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    createPost(title, content);
});

function createPost(title, content) {
    const postData = {
        title: title,
        content: content
    };

    fetch('https://jsonplaceholder.typicode.com/posts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        const postHtml = `
            <div class="post">
                <h3>${title}</h3>
                <p>${content}</p>
            </div>
        `;
        const postsContainer = document.getElementById('postsContainer');
        postsContainer.insertAdjacentHTML('beforeend', postHtml);
        document.getElementById('newForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function deletePost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            console.log(`Post with ID ${id} deleted.`);
            alert(`Post with ID ${id} has been deleted.`);
        } else {
            console.error('Failed to delete post:', id);
            alert('Failed to delete post.');
        }
    })
    .catch(error => console.error('Error:', error));
}