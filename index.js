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
        document.body.classList.remove('lock');
    }
}

// =========Форма===========
let showForm = document.querySelector('.btn');
let closeForm = document.querySelector('.clients__close-form');
let clientsBlockForm = document.querySelector('.clients__block-form');
let clientsForm = document.querySelector('.clients__form');
showForm.addEventListener('click', (e) => {
    e.preventDefault();
    clientsBlockForm.classList.add('active');
    clientsForm.classList.add('active');
})
closeForm.addEventListener('click', () => {
    clientsBlockForm.classList.remove('active');
    clientsForm.classList.remove('active');
})

let toSendBtn = document.querySelector('.clients__toSendBtn');

let getAllForm = document.forms.user_form;
console.log(getAllForm);

let mailFrom = getAllForm.inptEmail;
let nameFrom = getAllForm.inptName;
let phoneFrom = getAllForm.inptTel;
let adressFrom = getAllForm.inptAdress;

let radioFrom = getAllForm.inptRadio;
let selectFrom = getAllForm.selectInpt;
let checkBoxFrom = getAllForm.checkBoxInpt;
let checkBoxFrom_2 = getAllForm.checkBoxInpt_2;
let textAreaFrom = getAllForm.textArea;

toSendBtn.onclick = (e) => {
    e.preventDefault();
    console.log(mailFrom.value);
    console.log(nameFrom.value);
    console.log(phoneFrom.value);
    console.log(adressFrom.value);
    console.log(radioFrom[0].value);
    console.log(radioFrom[1].value);
    console.log(radioFrom[0].checked);
    console.log(radioFrom[1].checked);
    console.log(selectFrom.value);
    console.log(checkBoxFrom.value);
    console.log(checkBoxFrom.checked);
    console.log(checkBoxFrom_2.value);
    console.log(checkBoxFrom_2.checked);
    console.log(textAreaFrom.value);
}

