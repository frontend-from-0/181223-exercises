document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.img');
    const accordions = document.querySelectorAll('.accordion');

    images.forEach(function(img) {
        img.addEventListener('click', function() {
            images.forEach(function(img) {
                img.classList.remove('show_img');
            });
            img.classList.add('show_img');
        });
    });

    accordions.forEach(function(accordion) {
        accordion.addEventListener('click', function() {
            accordion.classList.toggle('active');
        });
    });
});




