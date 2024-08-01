document.getElementById('newForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;


    createPost(title, content);
});

function createPost(title, content) {

    const postHtml = `
        <div class="post">
            <h3>${title}</h3>
            <p>${content}</p>
        </div>
    `;

    const formElement = document.getElementById('newForm');
    formElement.insertAdjacentHTML('afterend', postHtml);


    document.getElementById('newForm').reset();
}