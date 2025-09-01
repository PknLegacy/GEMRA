(async function(){
  const cfg = await Utils.readJSON('config.json');

  // Cookie Banner
  const cookieKey = 'cookieAcceptedV1';
  const banner = Utils.el('#cookie-banner');
  const text = Utils.el('#cookie-text');
  const btn = Utils.el('#cookie-accept');
  text.textContent = cfg.site.cookie.text + ` (Land/Locale: ${Utils.getCountryLike()}, Browser: ${navigator.userAgent})`;
  if (cfg.site.cookie.askOnStart && !localStorage.getItem(cookieKey)) {
    banner.classList.remove('hidden');
  }
  btn.addEventListener('click', () => {
    localStorage.setItem(cookieKey, '1');
    banner.classList.add('hidden');
  });

  // Fullscreen nach 5s NACH erstem Klick
  let firstClick = false;
  window.addEventListener('click', () => {
    if (firstClick) return;
    firstClick = true;
    setTimeout(async () => {
      try {
        await Utils.requestFullscreen();
        document.body.classList.add('fullscreen');
      } catch(e) { /* ignore */ }
    }, (cfg.ui.autoFullscreenAfterClickSeconds || 5) * 1000);
  }, { once: true });

  // Sperren: Kontextmenü, Markieren, DevTools (best effort)
  if (cfg.ui.blockContextMenu) document.addEventListener('contextmenu', e => e.preventDefault());
  if (cfg.ui.blockSelection) {
    document.addEventListener('selectstart', e => e.preventDefault());
    document.addEventListener('dragstart', e => e.preventDefault());
    document.addEventListener('copy', e => e.preventDefault());
  }
  if (cfg.ui.blockDevtools) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key))) {
        e.preventDefault();
      }
    });
  }
})();