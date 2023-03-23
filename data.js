let offset = 0; // смещение от левого края
const sliderLineEl = document.querySelector('.slider__line');

document.querySelector('.slider__button__next').addEventListener('click', function () {
    offset = offset + 301;
    if (offset > 903) {
        offset = 0;
    }
    sliderLineEl.style.left = -offset + 'px';
})

document.querySelector('.slider__button__prev').addEventListener('click', function () {
    offset = offset - 301;
    if (offset < 0) {
        offset = 903;
    }
    sliderLineEl.style.left = -offset + 'px';
})





// const menuEl = document.querySelector('.menu-media');
const iconEl = document.querySelector('.icon__menu');
const boxMenuEl = document.querySelector('.box-menu');

iconEl.addEventListener('click', function (e) {
    boxMenuEl.classList.toggle('box-menu__none');
});
