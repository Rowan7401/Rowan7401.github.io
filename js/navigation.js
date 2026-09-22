(function () {
  const navbar = document.querySelector('.navbar');

  if (!navbar) {
    return;
  }

  const existingToggle = document.querySelector('.menu-toggle');
  if (!existingToggle) {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'menu-toggle';
    toggle.setAttribute('aria-controls', 'site-navigation');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i><span class="sr-only">Open navigation</span>';
    navbar.parentNode.insertBefore(toggle, navbar);
  }

  const existingBackdrop = document.querySelector('.nav-backdrop');
  if (!existingBackdrop) {
    const backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    backdrop.setAttribute('aria-hidden', 'true');
    navbar.parentNode.insertBefore(backdrop, navbar);
  }

  const menuToggle = document.querySelector('.menu-toggle');
  const navBackdrop = document.querySelector('.nav-backdrop');
  const navigationLinks = navbar.querySelectorAll('.navs');

  const closeNavigation = () => {
    document.body.classList.remove('menu-open');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.className = 'fa-solid fa-bars';
      }
      const label = menuToggle.querySelector('.sr-only');
      if (label) {
        label.textContent = 'Open navigation';
      }
    }
  };

  const toggleNavigation = () => {
    if (!menuToggle) {
      return;
    }

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

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleNavigation);
  }

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
