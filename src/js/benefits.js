const featureGrid = document.querySelector('.features__grid');
const features = document.querySelectorAll('.feature');

features.forEach(feature => {
  const clone = feature.cloneNode(true);
  featureGrid.appendChild(clone);
});

let scrollSpeed = 2;
let scrollPosition = 0;

function scrollFeatures() {
  scrollPosition -= scrollSpeed;
  if (Math.abs(scrollPosition) >= featureGrid.scrollWidth / 2) {
    scrollPosition = 0;
  }
  featureGrid.style.transform = `translateX(${scrollPosition}px)`;
  requestAnimationFrame(scrollFeatures);
}

scrollFeatures();
