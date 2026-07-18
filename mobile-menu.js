(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  if (!mobileMenu || !openMenuBtn) return;

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    if (typeof bodyScrollLock !== 'undefined') {
      const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    } else {
      document.body.classList.toggle('no-scroll');
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', toggleMenu);
  }

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', 'false');
    if (typeof bodyScrollLock !== 'undefined') {
      bodyScrollLock.enableBodyScroll(document.body);
    } else {
      document.body.classList.remove('no-scroll');
    }
  });
})();