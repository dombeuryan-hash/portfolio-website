/* ─────────────────────────────────────────────────────────
   Theme
───────────────────────────────────────────────────────── */
const root   = document.documentElement;
const tBtn   = document.getElementById('themeToggle');
const LIGHT  = 'light';

function applyTheme(t) {
  if (t === LIGHT) root.setAttribute('data-theme', LIGHT);
  else             root.removeAttribute('data-theme');
  localStorage.setItem('theme', t);
}

tBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  applyTheme(current === LIGHT ? '' : LIGHT);
});

applyTheme(localStorage.getItem('theme') || '');

/* ─────────────────────────────────────────────────────────
   Header shrink on scroll
───────────────────────────────────────────────────────── */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ─────────────────────────────────────────────────────────
   Mobile menu
───────────────────────────────────────────────────────── */
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

menuBtn.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
});

mainNav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

/* ─────────────────────────────────────────────────────────
   Active nav link on scroll
───────────────────────────────────────────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ─────────────────────────────────────────────────────────
   Scroll-reveal
───────────────────────────────────────────────────────── */
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => revealObserver.observe(el));

/* ─────────────────────────────────────────────────────────
   Typed text effect
───────────────────────────────────────────────────────── */
const roles = [
  'AI Engineer',
  'Full-Stack Developer',
  'Automation Enthusiast',
  'CS Student @ Frankfurt UAS',
];

let roleIndex  = 0;
let charIndex  = 0;
let deleting   = false;
let pauseTimer = null;
const typedEl  = document.getElementById('typed');
const SPEED    = 70;
const DEL      = 40;
const PAUSE    = 1800;

function type() {
  const current = roles[roleIndex];

  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      pauseTimer = setTimeout(type, PAUSE);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(type, deleting ? DEL : SPEED);
}

// Start after hero animation settles
setTimeout(type, 800);

/* ─────────────────────────────────────────────────────────
   Custom cursor (desktop only)
───────────────────────────────────────────────────────── */
if (window.matchMedia('(pointer: fine)').matches) {
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursorRing');
  let mx = 0, my = 0;  // mouse
  let rx = 0, ry = 0;  // ring (lagged)

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  // Smooth ring with rAF
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    cursorRing.style.left = rx + 'px';
    cursorRing.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Scale on hoverable elements
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovering'));
  });
}
