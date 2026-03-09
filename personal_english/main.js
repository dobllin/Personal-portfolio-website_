/* ═══════════════════════════════════════
   PORTFOLIO — ANDI PRATAMA
   main.js
═══════════════════════════════════════ */

/* ── CUSTOM CURSOR ── */
(function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });

  // Smooth ring follow
  (function animRing() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  // Hover grow effect
  document.querySelectorAll('a, button, .project-card, .service-card, .blog-card, .testi-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-grow'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-grow'));
  });
})();

/* ── NAV SCROLL BEHAVIOR ── */
(function initNav() {
  const nav = document.querySelector('nav');
  const links = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Scrolled class
    nav.classList.toggle('scrolled', window.scrollY > 80);

    // Active link highlight
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 140) {
        current = sec.getAttribute('id');
      }
    });
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  });
})();

/* ── SCROLL REVEAL ── */
(function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });
  reveals.forEach(el => io.observe(el));
})();

/* ── COUNTER ANIMATION ── */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '+';
      let current = 0;
      const step = target / 70;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = Math.floor(current) + (target < 10 ? '' : suffix);
      }, 14);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => io.observe(el));
})();

/* ── MARQUEE DUPLICATE ── */
(function initMarquee() {
  const track = document.getElementById('marquee');
  if (!track) return;
  // Items already duplicated in HTML for seamless loop
})();

/* ── PARALLAX BLOBS on mouse ── */
(function initParallax() {
  const blobs = document.querySelectorAll('.blob');
  document.addEventListener('mousemove', e => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const dx = (e.clientX - cx) / cx;
    const dy = (e.clientY - cy) / cy;
    blobs.forEach((blob, i) => {
      const factor = (i + 1) * 12;
      blob.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
    });
  });
})();

/* ── TESTIMONIALS SLIDER (auto-rotate mobile) ── */
(function initTestiSlider() {
  // Handled by CSS for desktop; could add touch swipe here
})();

/* ── PROCESS STEP HOVER GLOW ── */
(function initProcessGlow() {
  document.querySelectorAll('.process-step').forEach(step => {
    step.addEventListener('mouseenter', () => {
      step.querySelector('.step-num').style.color = 'rgba(200,169,110,0.2)';
    });
    step.addEventListener('mouseleave', () => {
      step.querySelector('.step-num').style.color = 'rgba(200,169,110,0.08)';
    });
  });
})();

/* ── SMOOTH SCROLL for nav links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});