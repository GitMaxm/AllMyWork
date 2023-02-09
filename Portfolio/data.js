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