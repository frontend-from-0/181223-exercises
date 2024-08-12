document.getElementById('newForm').setAttribute('novalidate', true); 

document.getElementById('create-button').addEventListener('click', function(event) {
    event.preventDefault(); 

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    let valid = true; 
    
    document.getElementById('title-error').innerText = '';
    document.getElementById('content-error').innerText = '';

    if (title.length < 3) {
        valid = false;
        document.getElementById('title-error').innerText = 'Title must be at least 3 characters long.';
    }

    if (content.length < 3) {
        valid = false;
        document.getElementById('content-error').innerText = 'Content must be at least 3 characters long.';
    }

    if (valid) {
        document.getElementById('newForm').dispatchEvent(new Event('submit')); 
    }
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
        body: content
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
        } else {
            console.error('Failed to delete post:', id);
        }
    })
    .catch(error => console.error('Error:', error));
}