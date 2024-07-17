document.addEventListener('DOMContentLoaded', function () {
    const headings = document.querySelectorAll('.accordion--heading');

    headings.forEach(heading => {
        heading.addEventListener('click', function () {
            this.classList.toggle('active');

            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});