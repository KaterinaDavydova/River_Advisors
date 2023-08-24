let menuBtn = document.querySelector('.top__logo');
let menu = document.querySelector('.top__items_menu');

menuBtn.addEventListener('click', function (event) {
    event.preventDefault();
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock')
})

menu.onclick = () => {
    if (menu.classList.contains('active')) {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
        document.body.classList.remove('lock')
    }
}

