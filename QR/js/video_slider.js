document.addEventListener("DOMContentLoaded", function () {
  const videoSlider = new Swiper(".video-slider", {
    loop: true, // Allows infinite looping of slides
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000, // Auto slide every 5 seconds
      disableOnInteraction: false,
    },
    spaceBetween: 20, // Space between slides
  });
});
