/* ═══════════════════════════════════════════════════
   SCI-FI PORTFOLIO — INTERACTIVE EFFECTS
   Pure Vanilla JS — Zero Dependencies
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── PRELOADER ───
  window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      setTimeout(() => preloader.classList.add('loaded'), 800);
    }
  });

  // ─── DOM READY ───
  document.addEventListener('DOMContentLoaded', () => {
    initParticleCanvas();
    initTypedText();
    initScrollReveal();
    initSmoothScroll();
    initNavDots();
    initMobileNav();
    initExpandButtons();
    initSkillBars();
    initSkillFilters();
    initCounterAnimation();
  });

  // ═══════ PARTICLE SYSTEM ═══════
  function initParticleCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };
    let animationId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    canvas.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    canvas.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += 0.02;
        this.opacity = 0.2 + Math.sin(this.pulse) * 0.15;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const force = (150 - dist) / 150;
            this.x += (dx / dist) * force * 2;
            this.y += (dy / dist) * force * 2;
          }
        }

        // Wrap around screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${this.opacity * 0.1})`;
        ctx.fill();
      }
    }

    // Determine particle count based on screen size
    const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 12000));
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            const opacity = (1 - dist / 160) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connectParticles();
      animationId = requestAnimationFrame(animate);
    }

    animate();
  }

  // ═══════ TYPED TEXT EFFECT ═══════
  function initTypedText() {
    const element = document.getElementById('typed-output');
    if (!element) return;

    const strings = [
      'Technical Architect',
      'Full Stack Engineer',
      'Telecom BSS Architect',
      'TMF / Open API Expert',
      'Enterprise Solutions Leader',
      'Mobile App Architect',
      'IoT Platform Builder',
      'Global Deployment Specialist'
    ];

    let stringIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function type() {
      const current = strings[stringIndex];

      if (isDeleting) {
        element.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 40;
      } else {
        element.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 80;
      }

      if (!isDeleting && charIndex === current.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        stringIndex = (stringIndex + 1) % strings.length;
        typeSpeed = 400; // Pause before next string
      }

      setTimeout(type, typeSpeed);
    }

    type();
  }

  // ═══════ SCROLL REVEAL ═══════
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    reveals.forEach(el => observer.observe(el));
  }

  // ═══════ SMOOTH SCROLL ═══════
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Close mobile nav if open
          const mobileNav = document.querySelector('.mobile-nav');
          const toggle = document.querySelector('.mobile-nav-toggle');
          if (mobileNav && mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open');
            toggle.classList.remove('open');
          }
        }
      });
    });
  }

  // ═══════ TOP NAV ═══════
  function initNavDots() {
    const navLinks = document.querySelectorAll('.top-nav-links .nav-link');
    const topNav = document.getElementById('top-nav');
    const sections = document.querySelectorAll('.section, #hero');
    if (!sections.length) return;

    // Highlight active link on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
              link.classList.toggle('active', link.dataset.section === id);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(section => observer.observe(section));

    // Add scrolled class for background change
    if (topNav) {
      window.addEventListener('scroll', () => {
        topNav.classList.toggle('scrolled', window.scrollY > 80);
      }, { passive: true });
    }
  }

  // ═══════ MOBILE NAV ═══════
  function initMobileNav() {
    const toggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.mobile-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      nav.classList.toggle('open');
    });
  }

  // ═══════ EXPAND BUTTONS ═══════
  function initExpandButtons() {
    document.querySelectorAll('.timeline-expand-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const details = btn.previousElementSibling;
        if (!details) return;

        const targetId = btn.dataset.target;
        const target = document.getElementById(targetId);
        if (target) {
          target.classList.toggle('open');
          btn.textContent = target.classList.contains('open') ? '[ COLLAPSE ]' : '[ EXPAND ]';
        }
      });
    });
  }

  // ═══════ SKILL BARS ═══════
  function initSkillBars() {
    const cards = document.querySelectorAll('.skill-card');
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));
  }

  // ═══════ SKILL FILTERS ═══════
  function initSkillFilters() {
    const filters = document.querySelectorAll('.skill-filter');
    const cards = document.querySelectorAll('.skill-card');
    if (!filters.length || !cards.length) return;

    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        // Update active filter
        filters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');

        const category = filter.dataset.filter;

        cards.forEach(card => {
          if (category === 'all' || card.dataset.category === category) {
            card.style.display = '';
            setTimeout(() => card.style.opacity = '1', 10);
          } else {
            card.style.opacity = '0';
            setTimeout(() => card.style.display = 'none', 300);
          }
        });
      });
    });
  }

  // ═══════ COUNTER ANIMATION ═══════
  function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.count, 10);
            if (isNaN(target) || el.dataset.animated) return;
            el.dataset.animated = 'true';

            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = Math.floor(current) + (el.dataset.suffix || '');
            }, 30);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach(counter => observer.observe(counter));
  }

})();
