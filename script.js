/* ─────────────────────────────────────────────────
   Time-based greeting
───────────────────────────────────────────────── */
const greetingEl = document.getElementById('greeting');
if (greetingEl) {
  const h = new Date().getHours();
  greetingEl.textContent =
    h < 5  ? 'Good night!'    :
    h < 12 ? 'Good morning!'  :
    h < 18 ? 'Good afternoon!':
             'Good evening!';
}

/* ─────────────────────────────────────────────────
   Header: active section nav highlight
───────────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.hdr-nav .hn');

const secObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${id}`));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => secObserver.observe(s));

/* ─────────────────────────────────────────────────
   Mobile menu
───────────────────────────────────────────────── */
const menuBtn  = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

menuBtn.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

document.querySelectorAll('[data-close]').forEach(el => {
  el.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

/* ─────────────────────────────────────────────────
   Scroll reveal
───────────────────────────────────────────────── */
// Add .reveal to all major inner elements
document.querySelectorAll(
  '.s-head, .about-body, .about-chips, .skill-row, .xp-item, .proj-item, .contact-body, .xp-list .s-sub-head'
).forEach(el => el.classList.add('reveal'));

const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      // slight stagger based on sibling index
      const delay = Array.from(e.target.parentNode?.children || []).indexOf(e.target) * 50;
      setTimeout(() => {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }, Math.min(delay, 300));
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
