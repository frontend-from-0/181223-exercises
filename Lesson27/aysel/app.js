/* 
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method
Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response. 
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/

const URL = 'https://jsonplaceholder.typicode.com/posts/';
const fetchButton = document.getElementById('fetch-button');
fetchButton.addEventListener('click', getPosts);
// If you need to pass a parameter to the callback function, wrap it in an arrow function:
// getPostButton.addEventListener('click', () => getPostById(id));

function getPosts() {
	fetch(URL)
		.then((response) => response.json())
		.then((responseArray) =>{
            document.getElementById('post-list').innerHTML = '';
            responseArray.map((postData) => createPostHtml(postData));
        });
}

function createPostHtml(postData) {
	const h2 = document.createElement('h2');
	h2.innerText = postData.title;
	h2.classList.add('post-title');


    const p = document.createElement('p');
    p.innerText = postData.body;
    p.classList.add('post-body');

    
	const li = document.createElement('li');
	li.classList.add('post');
	li.append(h2, p);

	const deleteButton = document.createElement(`button`);
	deleteButton.classList.add('button', 'button--danger');
	deleteButton.innerText = 'delete';
    deleteButton.addEventListener('click', () => deletePost(postData.id));
  // TODO: add event listener for click event to call delete post method (postData.id)

	const updateButton = document.createElement(`a`);
	updateButton.classList.add('button', 'button--success');
	updateButton.innerText = 'update';
  updateButton.href = `./update-post.html?postId=${postData.id}`;

	li.append(updateButton, deleteButton);

	document.getElementById('post-list').append(li);

	// p
	// p.innerText
	// add class
}


function createPost() {
  // Send post request
  const newPost = {
    title: 'New Post Title',
    body: 'New post content',
    userId: 1
};

fetch(URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
})
.then(response => response.json())
.then(data => {
    console.log('Post created:', data);
    getPosts(); 
})
.catch(error => console.error('Error creating post:', error)); 
}


function deletePost(postId) {
    fetch(`${URL}${postId}`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('Post deleted:', postId);
        getPosts(); 
    })
    .catch(error => console.error('Error deleting post:', error)); 
}
