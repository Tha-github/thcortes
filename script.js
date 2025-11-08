document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    setTimeout(() => {
      card.style.transition = '0.8s';
      card.style.opacity = '1';
    }, 300 * i);
  });
});
