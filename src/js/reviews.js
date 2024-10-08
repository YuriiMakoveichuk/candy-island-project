import Swiper from 'swiper/bundle';
import 'swiper/scss';

let slidesPerView = 1;
let loopedSlides = 1;
let spaceBetween = 10;

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;

  if (width > 370 && width < 1440) {
    slidesPerView = 2;
    spaceBetween = 25;
  }
  new Swiper('.swiper-reviews', {
    slidesPerView,
    spaceBetween,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
});
