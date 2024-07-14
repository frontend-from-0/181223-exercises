document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img');

    images.forEach(function(img) {
        img.addEventListener('click', function() {
            images.forEach(function(img) {
                img.classList.remove('show_img');
            });
            img.classList.add('show_img');
        });
    });
});




