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

document.getElementById('update-button').addEventListener('click', function(event) {
  event.preventDefault(); 
  const postTitle = document.getElementById('postTitle').value;
  const postContent = document.getElementById('postContent').value;

  if (postTitle.length < 3) {
    alert('Title must be at least 3 characters long.');
    return;
  }

  if (postContent.length < 3) {
    alert('Content must be at least 3 characters long.');
    return;
  }
  document.getElementById('update-post-form').dispatchEvent(new Event('submit')); 
});

document.getElementById('update-post-form').addEventListener('submit', function(event) {
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
    if (response.ok) {
      const messageElement = document.getElementById('message'); 
      messageElement.innerText = 'Post updated successfully!';
    } else {
      console.error('Failed to update post:', id);
      const messageElement = document.getElementById('message');
      messageElement.innerText = 'Failed to update post.';
    }
  })
  .catch(error => console.error('Error:', error));
}