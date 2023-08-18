let menuBtn = document.querySelector('.burger-btn');
let menu = document.querySelector('.top__items');

menuBtn.addEventListener('click', function (event) {
    event.preventDefault();
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
