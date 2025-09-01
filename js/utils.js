window.Utils = {
  // Country/locale approximation (client-side only)
  getCountryLike: () => {
    try {
      const lang = navigator.language || navigator.userLanguage || 'de-DE';
      const m = lang.split('-')[1];
      return m || 'EU';
    } catch(e) { return 'EU'; }
  },
  timeNowISO: () => new Date().toISOString(),
  readJSON: async (path) => (await fetch(path)).json(),
  el: (sel, root=document) => root.querySelector(sel),
  els: (sel, root=document) => Array.from(root.querySelectorAll(sel)),
  create: (tag, attrs={}) => Object.assign(document.createElement(tag), attrs),
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
  }
}