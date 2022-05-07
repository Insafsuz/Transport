// MenuBurger
let iconMenu = document.querySelector('.icon-menu');
let menuBody = document.querySelector('.menu__list');
iconMenu.addEventListener('click', function (e) {
	iconMenu.classList.toggle('_active');
	menuBody.classList.toggle('_active');
})

