const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
    accordion.addEventListener('click', e => {
        let accordionBtn = accordion.querySelector('button');
        accordion.classList.toggle('active');
        if (accordionBtn.textContent === '+') {
            accordionBtn.textContent = '-';
        } else {accordionBtn.textContent = '+'}
    })
});

//<i class="fa-solid fa-circle-arrow-down"></i>