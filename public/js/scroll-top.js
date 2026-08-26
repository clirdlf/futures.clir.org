(() => {
  const button = document.querySelector('.scroll-top');

  if (!button) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const updateVisibility = () => {
    button.hidden = window.scrollY < 400;
  };

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
    });
  });

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();
})();
