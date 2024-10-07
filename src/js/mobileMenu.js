const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileContent = document.querySelector('.mobile-content');
const mobileItems = document.querySelectorAll('.js-link');

burgerBtn.addEventListener('click', () => {
  mobileContent.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  mobileContent.classList.remove('is-open');
});

mobileItems.forEach(item => {
  item.addEventListener('click', () => {
    mobileContent.classList.remove('is-open');
  });
});
