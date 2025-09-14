
  (function(){
  const openBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('menu-close');
  const closeLinks = Array.from(document.querySelectorAll('[data-close]'));

  if (!openBtn || !mobileMenu || !closeBtn) return;

  function openMenu(){
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden','false');
    openBtn.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeMenu(){
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden','true');
    openBtn.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
    openBtn.focus();
  }

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  closeLinks.forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape' && mobileMenu.classList.contains('open')){ closeMenu(); } });
  mobileMenu.addEventListener('click', (e) => { if(e.target === mobileMenu) closeMenu(); });
})();

(function(){
  const fabTop = document.getElementById('fab-top');
  if (!fabTop) return;
  const threshold = 220;
  function onScroll() {
    if (window.scrollY > threshold) fabTop.classList.add('visible');
    else fabTop.classList.remove('visible');
  }
  function goTop(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const hero = document.querySelector('.hero__title') || document.querySelector('header');
    if (hero) { hero.setAttribute('tabindex','-1'); hero.focus({preventScroll:true}); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  fabTop.addEventListener('click', goTop);
  fabTop.addEventListener('keydown', (e) => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goTop(); } });
  onScroll();
})();
