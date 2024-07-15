document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', event => {
            const content = header.nextElementSibling;

            // Collapse all other accordion contents
            const allContents = document.querySelectorAll('.accordion-content');
            allContents.forEach(item => {
                if (item !== content) {
                    item.style.maxHeight = null;
                }
            });

            // Toggle the clicked accordion content
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});
