document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  const mobileToggle = document.getElementById('mobileToggle');

  // Toggle menú en móvil
  mobileToggle?.addEventListener('click', () => {
    nav.classList.toggle('menu-open');
  });

  // Cerrar menú al hacer clic en un link
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('menu-open');
    });
  });

  // Smooth scroll suave en los botones
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        nav.classList.remove('menu-open');
      }
    });
  });
});
