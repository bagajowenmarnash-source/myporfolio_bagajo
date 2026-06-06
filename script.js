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