var swiper = new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    autoplay: {
        disableOnInteraction: false,
    }
});

function updateSwiperParams() {
    if (window.innerWidth < 431) {
        swiper.params.slidesPerView = 1;
    } else {
        swiper.params.slidesPerView = 3;
    }
    swiper.update(); 
}

window.addEventListener('DOMContentLoaded', updateSwiperParams);
window.addEventListener('resize', updateSwiperParams);
