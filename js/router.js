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
    Utils.swapView(root, Utils.el('#tpl-home').innerHTML);
    const ulLive = Utils.el('#live-list');
    const ulVid  = Utils.el('#latest-videos');

    const live = await Utils.readJSON('assets/json/live_streams.json').catch(()=>({streams:[]}));
    (live.streams||[]).forEach(s => {
      const li = Utils.create('li');
      li.innerHTML = `<strong>${s.channel||''}</strong> — ${s.title||''}`;
      ulLive.appendChild(li);
    });

    const videos = await Utils.readJSON('assets/json/latest_videos.json').catch(()=>({videos:[]}));
    (videos.videos||[]).forEach(v => {
      const li = Utils.create('li');
      const t = v.title || 'Video';
      const url = v.url || '#';
      li.innerHTML = `<a href="${url}" target="_blank" rel="noopener">${t}</a>`;
      ulVid.appendChild(li);
    });
  }

  async function renderSocial(root) {
    Utils.swapView(root, Utils.el('#tpl-social').innerHTML);
    const cfg = await Utils.readJSON('config.json');
    const ul = Utils.el('#social-links');
    (cfg.social||[]).forEach(item => {
      const li = Utils.create('li');
      li.innerHTML = `<a class="chip" href="${item.url}" target="_blank" rel="noopener">${item.platform}: ${item.name||item.url}</a>`;
      ul.appendChild(li);
    });
  }

  async function renderSearch(root) {
    Utils.swapView(root, Utils.el('#tpl-search').innerHTML);
    const input   = Utils.el('#search-input');
    const results = Utils.el('#search-results');

    const dataFiles = Array.from({length:15}, (_,i)=>`assets/json/data_${i+1}.json`);
    const extraFiles = ['assets/json/latest_videos.json','assets/json/live_streams.json'];
    const allFiles = dataFiles.concat(extraFiles);
    const datasets = await Promise.all(allFiles.map(p => Utils.readJSON(p).catch(()=>null)));
    const flat = datasets.filter(Boolean).flatMap(obj => Array.isArray(obj) ? obj : (obj.videos||obj.streams||[]));

    function doSearch(q) {
      const ql = q.trim().toLowerCase();
      results.innerHTML = '';
      if (!ql) return;
      const filtered = flat.filter(item => (JSON.stringify(item||{}).toLowerCase().includes(ql))).slice(0, 200);
      filtered.forEach(item => {
        const div = Utils.create('div', {className:'result'});
        const title = item.title || item.name || item.channel || 'Eintrag';
        const link = item.url ? `<div><a href="${item.url}" target="_blank" rel="noopener">Öffnen</a></div>` : '';
        div.innerHTML = `<strong>${title}</strong><div><pre>${JSON.stringify(item, null, 2)}</pre></div>${link}`;
        results.appendChild(div);
      });
    }

    input.addEventListener('input', () => doSearch(input.value));
  }

  async function renderCredits(root) {
    Utils.swapView(root, Utils.el('#tpl-credits').innerHTML);
    const cfg = await Utils.readJSON('config.json');
    const wrap = Utils.el('#credit-links');
    (cfg.creditsLinks||[]).forEach(url => {
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
  window.addEventListener('DOMContentLoaded', () => {
    routeTo(location.hash);
    Utils.parallax();
  });
})();