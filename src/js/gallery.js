import Swiper from 'swiper/bundle';
import 'swiper/scss';

new Swiper('.mySwiper', {
  effect: 'coverflow',
  // grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 20,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
});
