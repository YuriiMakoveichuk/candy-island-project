import Swiper from 'swiper/bundle';
import 'swiper/scss';

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  let slidesPerView;
  let loopedSlides = 1;
  if (width > 320 && width < 1440) {
    slidesPerView = 2;
  } else {
    slidesPerView = 1;
  }
  new Swiper('.swiper-reviews', {
    slidesPerView,
    spaceBetween: 0,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    // autoplay: {
    //   delay: 1000,
    // },
  });
});
