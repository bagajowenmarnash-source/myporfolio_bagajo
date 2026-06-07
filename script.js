const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });

  function switchSem(num) {
    document.querySelectorAll('.sem-tab').forEach((t, i) => {
      t.classList.toggle('active', i + 1 === num);
    });
    document.querySelectorAll('.sem-panel').forEach((p, i) => {
      p.classList.toggle('active', i + 1 === num);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.style.animation = 'fadeUp 0.6s ease both';
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card, .skill-box, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
  });

  document.querySelectorAll('.project-card, .skill-box, .stat-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.05}s`;
  });

  // Starfield background animation
(function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'starfield';
  document.body.prepend(canvas);
  const ctx = canvas.getContext('2d');
  let W, H, stars = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function makeStar() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.2,
      a: Math.random(),
      da: (Math.random() * 0.004 + 0.001) * (Math.random() < 0.5 ? 1 : -1),
      speed: Math.random() * 0.15 + 0.02,
    };
  }

  function init() {
    resize();
    stars = Array.from({ length: 120 }, makeStar);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      s.a += s.da;
      if (s.a <= 0) s.da = Math.abs(s.da);
      if (s.a >= 1) s.da = -Math.abs(s.da);
      s.y -= s.speed;
      if (s.y < -2) { s.y = H + 2; s.x = Math.random() * W; }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(74,222,128,${s.a.toFixed(2)})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', resize);
})();
