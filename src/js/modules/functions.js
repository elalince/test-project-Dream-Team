
export function mainSlider()  {

    const mainInfo = document.querySelector('.main-info');
    const mainInfoRect = mainInfo.getBoundingClientRect();

    const mainInfoLeft = mainInfoRect.left;


    const mySwiper = new Swiper('.slider__container', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        slidesToScroll: 1,
        spaceBetween: 24,
        loop: false,
        simulateTouch: true,
        autoplay: false,
        speed: 3000,
        allowTouchMove: true,
        navigation: {
            nextEl: '.slider__button_next',
            prevEl: '.slider__button_prev',
        },
        slidesOffsetBefore: mainInfoLeft,
        breakpoints: {
            768: {
                spaceBetween: 32,
            }
        }
    });

    const mySwiper2 = new Swiper('.tours-slider', {
        direction: 'horizontal',
        slidesPerView: 1.5,
        slidesToScroll: 1,
        spaceBetween: 0,
        loop: false,
        simulateTouch: true,
        autoplay: false,
        speed: 3000,
        allowTouchMove: true,
        navigation: {
            nextEl: '.tours-slider__button_next',
            prevEl: '.tours-slider__button_prev',
        },
        watchOverflow: true,
        breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 0,
            }
        }
    });


}

export function dropdown() {

    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    const dropdownMenu = dropdown.querySelector('.dropdown__list');
    const dropdownMenuItems = dropdownMenu.querySelectorAll('li');
    const dropdownValue = dropdown.querySelector('[name="dropdown-value"]');

    dropdownToggle.addEventListener('click', function () {
        dropdown.classList.toggle('is-open');
    });

    dropdownMenuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            dropdownMenuItems.forEach(function (item) {
                item.classList.remove('is-selected');
                dropdown.classList.remove('is-open');
                dropdown.classList.add('selected');
            });
            this.classList.add('is-selected');
            dropdownToggle.querySelector('span').textContent = this.textContent;
            dropdownValue.value = this.dataset.value;
        });
    });

    document.addEventListener('click', function (e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('is-open');
        }
    });
}

export function popupForm() {

    const popupBtn = document.querySelector( '.main-info__feedback-link');
    const popup = document.querySelector( '.popup');
    const popupClose = document.querySelector( '.popup__close-link');
    const body = document.querySelector( 'body');

        $(popupBtn).on('click', function() {
            $(popup).addClass('open')
            $(body).addClass('noscroll')
        });


    $(popupClose).on('click', function() {
        $(popup).removeClass('open')
        $(body).removeClass('noscroll')
    });

}
export function formValidate() {
    const emailInput = document.getElementById('email');

    emailInput.addEventListener('blur', () => {
        if (!emailInput.checkValidity()) {
            emailInput.classList.add('invalid');
        } else {
            emailInput.classList.remove('invalid');
        }
    });
}