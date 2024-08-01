const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('postId');

// 1. Fetch post data for the post with given postId
function getPostById(id) {
  return fetch(`${URL}${id}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error fetching post:', error));
}

// 2. Prefill form with post title and post body
getPostById(postId).then(post => {
  document.getElementById('postId').value = post.id;
  document.getElementById('postContent').value = post.content;
});

// 3. Select form element and attach 'submit' event listener to it, send new post information with UPDATE request
document.getElementById('update-post-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const postId = document.getElementById('postId').value;
  const postContent = document.getElementById('postContent').value;

  updatePost(postId, postContent);
});

function updatePost(id, content) {
  fetch(`${URL}${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: content })
  })
  .then(response => {
    if (response.ok) {
      // 4. Show confirmation to the user if update operation was successful
      alert('Post updated successfully!');
    } else {
      console.error('Failed to update post:', id);
    }
  })
  .catch(error => console.error('Error:', error));
}