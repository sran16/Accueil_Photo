// swiper tickets
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper("#mySwiper", {
    effect: "cards",
    direction: "vertical",
    slidesPerView: 1,
    loop: false,
    spaceBetween: 10,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      releaseOnEdges: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    cardsEffect: {
      perSlideOffset: 10,
      rotate: false,
      slideShadows: false,
    },
  });
});
