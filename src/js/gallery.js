import Swiper from 'swiper/bundle';
import 'swiper/scss';

new Swiper('.mySwiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: -48,
    depth: 390,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    1200: {
      centeredSlides: true,
      initialSlide: 2,
      spaceBetween: 36,
    },
  },
});
