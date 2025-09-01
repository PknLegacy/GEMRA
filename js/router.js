(function(){
  const routes = {
    home: renderHome,
    social: renderSocial,
    search: renderSearch,
    credits: renderCredits,
  };

  function setActiveNav(route) {
    Utils.els('.nav a').forEach(a => {
      const r = a.getAttribute('href').replace('#/','');
      a.classList.toggle('active', r === route);
    });
  }

  async function renderHome(root) {
    root.innerHTML = Utils.el('#tpl-home').innerHTML;
    // populate live streams & videos
    const cfg = await Utils.readJSON('config.json');
    const refreshMs = (cfg.feeds.refreshHours || 24) * 3600 * 1000;

    // Dummies aus JSON
    const live = await Utils.readJSON('assets/json/live_streams.json').catch(()=>({streams:[]}));
    const ulLive = Utils.el('#live-list');
    (live.streams||[]).forEach(s => {
      const li = Utils.create('li');
      li.innerHTML = `<strong>${s.channel}</strong> — ${s.title} <small>(${s.started_at})</small>`;
      ulLive.appendChild(li);
    });

    const videos = await Utils.readJSON('assets/json/latest_videos.json').catch(()=>({videos:[]}));
    const ulVid = Utils.el('#latest-videos');
    (videos.videos||[]).forEach(v => {
      const li = Utils.create('li');
      li.innerHTML = `<a href="${v.url}" target="_blank" rel="noopener">${v.title}</a> <small>(${v.published_at})</small>`;
      ulVid.appendChild(li);
    });

    // auto-refresh „simuliert“ (falls Seite offen bleibt)
    setTimeout(()=>location.reload(), refreshMs);
  }

  async function renderSocial(root) {
    root.innerHTML = Utils.el('#tpl-social').innerHTML;
    const cfg = await Utils.readJSON('config.json');
    const ul = Utils.el('#social-links');
    cfg.social.forEach(item => {
      const li = Utils.create('li');
      li.innerHTML = `<a class="chip" href="${item.url}" target="_blank" rel="noopener">${item.platform}: ${item.name}</a>`;
      ul.appendChild(li);
    });
  }

  async function renderSearch(root) {
    root.innerHTML = Utils.el('#tpl-search').innerHTML;
    const input = Utils.el('#search-input');
    const results = Utils.el('#search-results');

    // Daten aus JSON-Dateien laden (data_1..15 + videos.json etc.)
    const dataFiles = Array.from({length:15}, (_,i)=>`assets/json/data_${i+1}.json`);
    const extraFiles = ['assets/json/latest_videos.json','assets/json/live_streams.json'];
    const allFiles = dataFiles.concat(extraFiles);
    const datasets = await Promise.all(allFiles.map(p => Utils.readJSON(p).catch(()=>null)));
    const flat = datasets.filter(Boolean).flatMap(obj => Array.isArray(obj) ? obj : Object.values(obj).flat?.() || []);

    function doSearch(q) {
      const ql = q.trim().toLowerCase();
      results.innerHTML = '';
      if (!ql) return;
      const filtered = flat.filter(item => {
        const s = JSON.stringify(item).toLowerCase();
        return s.includes(ql);
      }).slice(0, 100);
      filtered.forEach(item => {
        const div = Utils.create('div', {className:'result'});
        const title = item.title || item.name || item.channel || 'Eintrag';
        const link = item.url ? `<a href="${item.url}" target="_blank" rel="noopener">Öffnen</a>` : '';
        div.innerHTML = `<strong>${title}</strong><div><pre>${JSON.stringify(item, null, 2)}</pre></div>${link}`;
        results.appendChild(div);
      });
    }

    input.addEventListener('input', () => doSearch(input.value));
  }

  async function renderCredits(root) {
    root.innerHTML = Utils.el('#tpl-credits').innerHTML;
    const cfg = await Utils.readJSON('config.json');
    const wrap = Utils.el('#credit-links');
    cfg.creditsLinks.forEach(url => {
      const a = Utils.create('a', { href: url, target: '_blank', rel: 'noopener', textContent: url });
      wrap.appendChild(a);
    });

    Utils.el('#unlock-fullscreen').addEventListener('click', async () => {
      await Utils.exitFullscreen();
      document.body.classList.remove('fullscreen');
      alert('Vollbild entsperrt.');
    });
  }

  async function routeTo(hash) {
    const route = (hash || location.hash || '#/home').replace('#/','');
    const fn = routes[route] || routes.home;
    setActiveNav(route);
    await fn(document.getElementById('app'));
  }

  window.addEventListener('hashchange', () => routeTo(location.hash));
  window.Router = { routeTo };
  window.addEventListener('DOMContentLoaded', () => routeTo(location.hash));
})();