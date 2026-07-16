// ===== Mobile nav toggle =====
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const overlay = document.querySelector('.nav-overlay');

  const closeMenu = () => {
    links.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };
  const openMenu = () => {
    links.classList.add('open');
    if (overlay) overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  };

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.contains('open') ? closeMenu() : openMenu();
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    if (overlay) overlay.addEventListener('click', closeMenu);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // ===== Scroll reveal =====
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  // ===== Catalog filter =====
  const chips = document.querySelectorAll('.filter-chip');
  const items = document.querySelectorAll('.mason-item');
  if (chips.length && items.length) {
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const cat = chip.dataset.filter;
        items.forEach(item => {
          const show = cat === 'all' || item.dataset.category === cat;
          item.classList.toggle('hidden', !show);
        });
      });
    });
  }

  // ===== Hero background slideshow =====
  const heroSlides = document.querySelectorAll('.hero-slide');
  if (heroSlides.length > 1) {
    let currentSlide = 0;
    setInterval(() => {
      heroSlides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % heroSlides.length;
      heroSlides[currentSlide].classList.add('active');
    }, 4500);
  }

  // ===== Contact form (static demo — no backend) =====
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Message noted ✓';
      form.reset();
      setTimeout(() => { btn.textContent = original; }, 2600);
    });
  }
});
