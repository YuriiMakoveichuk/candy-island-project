import Swiper from 'swiper/bundle';
import 'swiper/scss';

new Swiper('.swiper-reviews', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.btn-go-right',
    prevEl: '.btn-go-left',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});
