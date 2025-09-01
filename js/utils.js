window.Utils = {
  bust: () => `?v=${Date.now()}`,
  el: (sel, root=document) => root.querySelector(sel),
  els: (sel, root=document) => Array.from(root.querySelectorAll(sel)),
  create: (tag, attrs={}) => Object.assign(document.createElement(tag), attrs),
  readJSON: async (path) => (await fetch(path + `?v=${Date.now()}`)).json(),
  getCountryLike: () => {
    try { return (navigator.language||'de-DE').split('-')[1] || 'EU'; } catch(e){ return 'EU'; }
  },
  // Fullscreen helpers
  requestFullscreen: async () => {
    const el = document.documentElement;
    if (el.requestFullscreen) return el.requestFullscreen();
    if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
    if (el.msRequestFullscreen) return el.msRequestFullscreen();
  },
  exitFullscreen: async () => {
    if (document.exitFullscreen) return document.exitFullscreen();
    if (document.webkitExitFullscreen) return document.webkitExitFullscreen();
    if (document.msExitFullscreen) return document.msExitFullscreen();
  },
  // Smooth page transition
  swapView: (root, html) => {
    root.classList.add('fade-leave');
    setTimeout(() => {
      root.innerHTML = html;
      root.classList.remove('fade-leave');
      root.classList.add('fade-enter');
      setTimeout(()=>root.classList.remove('fade-enter'), 350);
    }, 180);
  },
  // Parallax Hero
  parallax: () => {
    const img = Utils.el('.hero-img');
    if (!img) return;
    window.addEventListener('scroll', () => {
      const y = window.scrollY * 0.15;
      img.style.transform = `translateY(${y}px) scale(1.04)`;
    }, { passive: true });
  }
};