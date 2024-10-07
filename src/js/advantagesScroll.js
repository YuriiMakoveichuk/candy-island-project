document.addEventListener('DOMContentLoaded', function () {
  const advantageItems = document.querySelectorAll('.advantage-item');

  function handleScroll() {
    advantageItems.forEach(item => {
      const itemPosition = item.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (itemPosition < screenHeight - 150 && itemPosition > 0) {
        item.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', handleScroll);
});
