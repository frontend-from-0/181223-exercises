// This is already set in HTML:
// document.getElementById('createPostForm').setAttribute('novalidate', true); 

document.getElementById('createPostForm').addEventListener('submit', function(event) {
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
        createPost(title, content); 
    }
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
    .then(response => {
        if (response.status === 201) {
            return response.json();
        } else {
            // error occured, show error message.
        }
        })
    .then(data => {
        const title = document.createElement('h2');
        title.innerText = 'Post created successfully';

        const h2 = document.createElement('h2');
	    h2.innerText = data.title;
	    h2.classList.add('post-title');
	
	    const p = document.createElement('p');
	    p.innerText = data.body;
	    p.classList.add('post-body');
	
        const postContainer = document.getElementById('postContainer');
        postContainer.classList.add('post');
        postContainer.append(title);
        postContainer.append(h2);
        postContainer.append(p);

        document.getElementById('createPostForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}