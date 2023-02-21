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

let body = document.querySelector('body');
var header = document.querySelector('.header');

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
    header.classList.remove('hide');
});

menuItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        burgerButton.classList.remove('burger__button-active');
        nav.classList.remove('active');
        document.querySelector('body').classList.remove('body-block');
        document.querySelector('html').classList.remove('body-block');
        header.classList.add('hide');

    })
});

var prevScroll = window.scrollY || document.scrollTop;
var curScroll;
var direction = 0;
var prevDirection = 0;



var checkScroll = function () {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = window.scrollY || document.scrollTop;
    if (curScroll > prevScroll) {
        //scrolled up
        direction = 2;
        console.log('up');
    }
    else if (curScroll < prevScroll) {
        //scrolled down
        direction = 1;
        console.log('down')
    }

    if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
};

var toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 22) {

        //replace 52 with the height of your header in px

        header.classList.add('hide');
        prevDirection = direction;
    }
    else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
    }
};

window.addEventListener('scroll', () => {
    if (window.innerWidth <= 690) {
        checkScroll();
    }

});

let upButton = document.querySelector('.go-up');
upButton.addEventListener('click', () => {
    header.classList.remove('hide')
    direction = 0;
}
);

var form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

var submitButton = document.querySelector('.form__submit');
var textarea = document.querySelectorAll('.contacts__form-textarea');
submitButton.addEventListener('click', (e) => {
    textarea.forEach((item) => {
        item.classList.add('submitted');
    })
})
