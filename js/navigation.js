(function () {
  const navbar = document.querySelector('.navbar');

  if (!navbar) {
    return;
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const navBackdrop = document.querySelector('.nav-backdrop');
  const navigationLinks = navbar.querySelectorAll('.navs');

  if (!menuToggle) {
    return;
  }

  const closeNavigation = () => {
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.className = 'fa-solid fa-bars';
    }
    const label = menuToggle.querySelector('.sr-only');
    if (label) {
      label.textContent = 'Open navigation';
    }
  };

  const toggleNavigation = () => {
    const isOpen = document.body.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    const icon = menuToggle.querySelector('i');
    if (icon) {
      icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
    const label = menuToggle.querySelector('.sr-only');
    if (label) {
      label.textContent = isOpen ? 'Close navigation' : 'Open navigation';
    }
  };

  menuToggle.addEventListener('click', toggleNavigation);

  if (navBackdrop) {
    navBackdrop.addEventListener('click', closeNavigation);
  }

  navigationLinks.forEach((link) => {
    link.addEventListener('click', closeNavigation);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavigation();
    }
  });

  setTimeout(() => {
    navigationLinks.forEach((nav) => nav.classList.add('loaded'));
  }, 1500);
})();
