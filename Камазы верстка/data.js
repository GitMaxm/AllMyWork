// const observer = new IntersectionObserver(entries => {
//     // Заполним метод обратного вызова позже...
// });

// // Сообщить наблюдателю, какие элементы следует отслеживать
// observer.observe(document.querySelector('.kamaz'));

// entries.forEach(entry => {
//     if (entry.isIntersecting) {
//         // Элемент появился,
//         // надо добавить CSS-класс для анимации
//     }
// });

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('slide-in-blurred-left');
//         }
//     });
// });
// observer.observe(document.querySelector('.kamaz'));

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector('.top__text');
        if (entry.isIntersecting) {
            square.classList.add('slide-in-blurred-left');
            return;
        }
        square.classList.remove('slide-in-blurred-left');
    });
});
observer.observe(document.querySelector('.top-content'));