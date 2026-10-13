(function () {
  var root = document.documentElement, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  try { var t = localStorage.getItem('theme'); if (t) root.dataset.theme = t; else if (matchMedia('(prefers-color-scheme: light)').matches) root.dataset.theme = 'light'; } catch (e) {}
  document.getElementById('theme').addEventListener('click', function () {
    var n = root.dataset.theme === 'dark' ? 'light' : 'dark'; root.dataset.theme = n;
    try { localStorage.setItem('theme', n); } catch (e) {}
  });
  var roles = ['Python Full Stack Developer', 'Django and Flask developer', 'React.js and JavaScript developer', 'MySQL and REST API builder'];
  var el = document.getElementById('type'), r = 0, c = roles[0].length, del = true;
  if (!reduce) (function tick() {
    var w = roles[r]; el.textContent = w.slice(0, c);
    if (del) { c--; if (c < 0) { del = false; r = (r + 1) % roles.length; c = 0; } setTimeout(tick, 35); }
    else { c++; if (c > roles[r].length) { del = true; c = roles[r].length; setTimeout(tick, 1800); } else setTimeout(tick, 60); }
  })();
  if (!reduce && 'IntersectionObserver' in window) {
    root.classList.add('js');
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(function (n) { io.observe(n); });
  }
  var links = document.querySelectorAll('.bar nav a[href^="#"]:not(.cta)');
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle('act', a.getAttribute('href') === '#' + e.target.id); }); }); }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { so.observe(s); });
  }
  var b = document.getElementById('copy'), m = document.getElementById('mail');
  b.addEventListener('click', function () {
    var txt = m.textContent.trim();
    function done() { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy email'; }, 1800); }
    if (navigator.clipboard) navigator.clipboard.writeText(txt).then(done, function () { prompt('Copy this email:', txt); });
    else prompt('Copy this email:', txt);
  });
})();
