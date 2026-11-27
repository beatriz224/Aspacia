const commonSwiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
};

new Swiper('.esteira1', {
    ...commonSwiperOptions,
    pagination: {
        el: '.pag1',
        clickable: true,
    },
    navigation: {
        nextEl: '.bn1',
        prevEl: '.bp1',
    },
});

new Swiper('.esteira2', {
    ...commonSwiperOptions,
    pagination: {
        el: '.pag2',
        clickable: true,
    },
    navigation: {
        nextEl: '.bn2',
        prevEl: '.bp2',
    },
});

new Swiper('.esteira3', {
    ...commonSwiperOptions,
    pagination: {
        el: '.pag3',
        clickable: true,
    },
    navigation: {
        nextEl: '.bn3',
        prevEl: '.bp3',
    },
});

