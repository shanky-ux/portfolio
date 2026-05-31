/* ══════════════════════════════════════════
   RAVI SHANKAR · PORTFOLIO
   script.js
══════════════════════════════════════════ */

'use strict';

/* ── Loader ── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(() => { loader.remove(); }, 700);
    }
    initReveal();
  }, 1700);
});

/* ── Custom Cursor ── */
(function initCursor() {
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mx = -100, my = -100;
  let rx = -100, ry = -100;
  let raf;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function loop() {
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    raf = requestAnimationFrame(loop);
  }
  loop();

  document.querySelectorAll('a, button, .glass-card, .skill-tag, .proj-btn').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });

  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });
})();

/* ── Particles ── */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];
  const N = window.innerWidth < 768 ? 40 : 80;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(true); }
    reset(init) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.r  = Math.random() * 1.5 + 0.4;
      this.a  = Math.random() * 0.45 + 0.08;
      this.cyan = Math.random() > 0.5;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -10 || this.x < -10 || this.x > W + 10) this.reset(false);
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.cyan
        ? `rgba(212,175,55,${this.a})`
        : `rgba(107,33,168,${this.a})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < N; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });

    /* Draw faint connections */
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(212,175,55,${0.06 * (1 - dist/120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ── Navbar ── */
(function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');
  const links     = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveLink();
  });

  hamburger && hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  }
  updateActiveLink();
})();

/* ── Typed Effect ── */
(function initTyped() {
  const el = document.getElementById('typed');
  if (!el) return;

  const words = [
    'Full Stack Developer',
    'AI Engineer',
    'Machine Learning Enthusiast',
    'React Developer',
    'Backend Developer'
  ];
  let wi = 0, ci = 0, deleting = false;
  const SPEED_TYPE = 80, SPEED_DEL = 45, PAUSE = 1800;

  function tick() {
    const word = words[wi];
    if (deleting) {
      ci--;
      el.textContent = word.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, SPEED_DEL);
    } else {
      ci++;
      el.textContent = word.slice(0, ci);
      if (ci === word.length) {
        deleting = true;
        setTimeout(tick, PAUSE);
        return;
      }
      setTimeout(tick, SPEED_TYPE);
    }
  }
  setTimeout(tick, 1000);
})();

/* ── Scroll Reveal ── */
function initReveal() {
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        /* Stagger siblings */
        const siblings = [...(el.parentElement?.children || [])].filter(c => c.classList.contains('reveal'));
        const delay = siblings.indexOf(el) * 80;
        setTimeout(() => el.classList.add('visible'), delay);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(t => io.observe(t));
}

/* ── Animated Counters ── */
(function initCounters() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  if (!nums.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      const dur = 1400;
      const step = dur / target;
      let cur = 0;
      const timer = setInterval(() => {
        cur++;
        el.textContent = cur + (target >= 10 ? '+' : '+');
        if (cur >= target) { el.textContent = target + '+'; clearInterval(timer); }
      }, step);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  nums.forEach(n => io.observe(n));
})();

/* ── Skill Bar Animation ── */
(function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill[data-width]');
  if (!bars.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const bar = e.target;
      setTimeout(() => {
        bar.style.width = bar.dataset.width + '%';
      }, 200);
      io.unobserve(bar);
    });
  }, { threshold: 0.3 });

  bars.forEach(b => io.observe(b));
})();

/* ── Scroll-to-top ── */
(function initScrollTop() {
  const btn = document.getElementById('scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ── Contact Form EmailJS Integration ── */
emailjs.init("xTXQpGQ3pSpOoB9_g");

const contactForm = document.getElementById("contact-form");
const SERVICE_ID = "service_blyu6ql";
const ADMIN_TEMPLATE_ID = "template_swso0pi";
const AUTO_REPLY_TEMPLATE_ID = "template_4msph6i";

contactForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submit-btn");

  submitBtn.innerText = "Sending...";
  submitBtn.disabled = true;

  const params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  try {
    const adminResponse = await emailjs.send(
      SERVICE_ID,
      ADMIN_TEMPLATE_ID,
      params
    );
    console.log("ADMIN SUCCESS!", adminResponse.status, adminResponse.text);

    const autoReplyResponse = await emailjs.send(
      SERVICE_ID,
      AUTO_REPLY_TEMPLATE_ID,
      params
    );
    console.log("AUTO REPLY SUCCESS!", autoReplyResponse.status, autoReplyResponse.text);

    alert("Message sent successfully 🚀");
    contactForm.reset();
  } catch (error) {
    console.log("FAILED...", error);
    alert("Failed to send message ❌");
  } finally {
    submitBtn.innerText = "Send Message";
    submitBtn.disabled = false;
  }
});

/* ── Smooth section link scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = document.getElementById('navbar')?.offsetHeight || 70;
    window.scrollTo({ top: target.offsetTop - navH, behavior: 'smooth' });
  });
});

/* ── Close mobile nav on outside click ── */
document.addEventListener('click', e => {
  const nav  = document.getElementById('nav-links');
  const ham  = document.getElementById('hamburger');
  if (!nav || !ham) return;
  if (nav.classList.contains('open') && !nav.contains(e.target) && !ham.contains(e.target)) {
    nav.classList.remove('open');
    ham.classList.remove('open');
  }
});

/* ── Tilt effect on project cards ── */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ── Skill tag level tooltip on hover ── */
document.querySelectorAll('.skill-tag[data-level]').forEach(tag => {
  tag.title = `Proficiency: ${tag.dataset.level}%`;
});

/* ── Certificate Preview Modal ── */
(function initCertificateModal() {
  const modal = document.getElementById('cert-modal');
  const modalTitle = document.getElementById('cert-modal-title');
  const modalImage = document.getElementById('cert-modal-image');
  const modalFrame = document.getElementById('cert-modal-frame');
  const closeBtn = document.getElementById('cert-modal-close');
  const imageButtons = document.querySelectorAll('.cert-image-btn');

  if (!modal || !modalTitle || !modalImage || !modalFrame || !closeBtn || !imageButtons.length) return;

  function openModal(title, imageSrc, fileSrc) {
    modalTitle.textContent = title || 'Certificate Preview';
    modalImage.hidden = false;
    modalFrame.hidden = true;
    modalFrame.src = '';
    modalImage.alt = title ? `${title} preview` : 'Certificate preview';
    modalImage.onerror = () => {
      if (fileSrc) {
        modalImage.hidden = true;
        modalFrame.hidden = false;
        modalFrame.src = fileSrc;
      }
    };
    modalImage.src = imageSrc || fileSrc || '';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    modalImage.src = '';
    modalImage.alt = 'Certificate preview';
    modalImage.hidden = false;
    modalFrame.hidden = true;
    modalFrame.src = '';
  }

  imageButtons.forEach(button => {
    button.addEventListener('click', () => {
      openModal(button.dataset.certTitle, button.dataset.certImage, button.dataset.certFile);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', event => {
    if (event.target === modal || event.target.hasAttribute('data-cert-close')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
})();
