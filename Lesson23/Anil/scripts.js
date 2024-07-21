function toggleAccordion(event) {
    const header = event.target;
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
        content.style.maxHeight = '100px';
    }
}
