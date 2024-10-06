const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileContent = document.querySelector('.mobile-content');

burgerBtn.addEventListener('click', () => {
  mobileContent.classList.add('active');
  closeBtn.style.display = 'block';
  burgerBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  mobileContent.classList.remove('active');
  closeBtn.style.display = 'none';
  burgerBtn.style.display = 'block';
});
