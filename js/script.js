const swiperContainer = document.querySelector('.preswiper');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    initialSlide: 1,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

let burgerButton = document.querySelector('.burger__button');
let nav = document.querySelector('.header__menu');

let menuItems = document.querySelectorAll('.menu__item');

burgerButton.addEventListener('click', (e) => {
    burgerButton.classList.toggle('burger__button-active');
    nav.classList.toggle('active');
    document.querySelector('body').classList.toggle('body-block');
    document.querySelector('html').classList.toggle('body-block');
})

window.addEventListener('resize', (e) => {
    burgerButton.classList.remove('burger__button-active');
    nav.classList.remove('active');
    document.querySelector('body').classList.remove('body-block');
    document.querySelector('html').classList.remove('body-block');
});



menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        burgerButton.classList.remove('burger__button-active');
        nav.classList.remove('active');
        document.querySelector('body').classList.remove('body-block');
        document.querySelector('html').classList.remove('body-block');
    })
});




