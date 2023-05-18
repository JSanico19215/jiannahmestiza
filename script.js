document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');
  const container = document.querySelector('.carousel-container');
  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = items[0].offsetWidth;
  const visibleItems = Math.floor(container.offsetWidth / itemWidth);
  let currentPosition = 0;

  prevButton.addEventListener('click', function() {
    currentPosition = Math.max(currentPosition - visibleItems, 0);
    container.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
  });

  nextButton.addEventListener('click', function() {
    currentPosition = Math.min(currentPosition + visibleItems, items.length - visibleItems);
    container.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
  });
});
