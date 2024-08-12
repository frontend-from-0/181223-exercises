const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

if (!postId) {
  console.error('Post ID is missing in the URL');
} else {
  getPostById(postId).then(post => {
    if (post) {
      document.getElementById('postTitle').value = post.title;
      document.getElementById('postContent').value = post.body;
    } else {
      console.error('Post not found');
    }
  });
}

function getPostById(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .catch(error => console.error('Error fetching post:', error));
}

const postsContainer = document.getElementById('posts-container'); 

document.getElementById('update-button').addEventListener('click', function (event) {
  event.preventDefault();
  const postTitle = document.getElementById('postTitle').value;
  const postContent = document.getElementById('postContent').value;
  let valid = true;

  document.getElementById('title-error').innerText = '';
  document.getElementById('content-error').innerText = '';

  if (postTitle.length < 3) {
    valid = false;
    document.getElementById('title-error').innerText = 'Title must be at least 3 characters long.';
  }

  if (postContent.length < 3) {
    valid = false;
    document.getElementById('content-error').innerText = 'Content must be at least 3 characters long.';
  }

  if (valid) {
    document.getElementById('update-post-form').dispatchEvent(new Event('submit'));
  }
});

document.getElementById('update-post-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const postTitle = document.getElementById('postTitle').value;
  const postContent = document.getElementById('postContent').value;
  updatePost(postId, { title: postTitle, body: postContent });
});

function updatePost(id, { title, body }) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  })
    .then(response => {
      const messageElement = document.getElementById(response.ok ? 'success-message' : 'error-message');
      messageElement.innerText = response.ok ? 'Post updated successfully!' : 'Failed to update post.';
      messageElement.style.display = 'block';
    })
    .catch(error => {
      console.error('Error:', error);
      const messageElement = document.getElementById('error-message');
      messageElement.innerText = 'An error occurred while updating the post.';
      messageElement.style.display = 'block';
    });
}

function fetchPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.id = `post-${post.id}`;
        postElement.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          <div class="button-container">
            <button class="update-button" data-id="${post.id}">Update</button>
            <button class="delete-button" data-id="${post.id}">Delete</button>
          </div>
        `;
        postsContainer.appendChild(postElement);
      });

      const deleteButtons = document.querySelectorAll('.delete-button');
      deleteButtons.forEach(button => {
        button.addEventListener('click', deletePost);
      });
    });
}

function deletePost(event) {
  const postId = event.target.getAttribute('data-id');
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      const postElement = document.getElementById(`post-${postId}`);
      postElement.remove();
    } else {
      console.error('Failed to delete post:', postId);
    }
  })
  .catch(error => console.error('Error:', error));
}