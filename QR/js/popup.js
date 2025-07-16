document.addEventListener('DOMContentLoaded', function() {

document.querySelectorAll('.image-slider-image img').forEach(image => {
    image.addEventListener('click', function() {
        const popupImageSrc = this.getAttribute('data-popup-img-src'); // Получение пути к изображению
        const popupImage = document.querySelector('.popup_image img');
        popupImage.src = popupImageSrc; // Установка пути к изображению
        const popup = document.getElementById('popup');
        popup.classList.add('open');
    });
});

document.getElementById('popup_close').addEventListener('click', function(event) {
    event.preventDefault(); // Это предотвратит переход по "href" ссылки
    const popup = document.getElementById('popup');
    popup.classList.remove('open');
});
});