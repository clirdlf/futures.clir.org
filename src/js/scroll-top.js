(() => {
  const button = document.querySelector('.scroll-top');

  if (!button) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let updatePending = false;

  const updateVisibility = () => {
    const shouldHide = window.scrollY < 400;

    if (button.hidden !== shouldHide) {
      button.hidden = shouldHide;
    }

    updatePending = false;
  };

  const requestVisibilityUpdate = () => {
    if (updatePending) return;

    updatePending = true;
    window.requestAnimationFrame(updateVisibility);
  };

  button.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion.matches ? 'auto' : 'smooth',
    });
  });

  window.addEventListener('scroll', requestVisibilityUpdate, { passive: true });
  requestVisibilityUpdate();
})();
