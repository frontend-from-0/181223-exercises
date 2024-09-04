const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');
const messageElement = document.getElementById('update-result');

if (!postId) {
  console.error('Post ID is missing in the URL');
} else {
  getPostById(postId).then(post => {
    if (post) {
      document.getElementById('postTitle').value = post.title;
      document.getElementById('postContent').value = post.body;
    } else {
      console.error('Post not found');
      messageElement.innerText = 'Selected post is not found';
      messageElement.style.display = 'block';
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

document.getElementById('update-post-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const postTitle = document.getElementById('postTitle').value;
  const postContent = document.getElementById('postContent').value;
  document.getElementById('title-error').innerText = '';
  document.getElementById('content-error').innerText = '';

  let valid = true;
  if (postTitle.length < 3) {
    valid = false;
    document.getElementById('title-error').innerText = 'Title must be at least 3 characters long.';
  }
  if (postContent.length < 3) {
    valid = false;
    document.getElementById('content-error').innerText = 'Content must be at least 3 characters long.';
  }

  if (valid) {
    updatePost(postId, { title: postTitle, body: postContent });
  }
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
    messageElement.innerText = response.ok ? 'Post updated successfully!' : 'Failed to update post.';
    messageElement.style.display = 'block';
  })
  .catch(error => {
    console.error('Error:', error);
    messageElement.innerText = 'An error occurred while updating the post.';
    messageElement.style.display = 'block';
  });
}