// 倉敷トラベル — Script

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.mobile-nav-close');

if (hamburger) {
  hamburger.addEventListener('click', () => mobileNav.classList.add('active'));
}
if (mobileNavClose) {
  mobileNavClose.addEventListener('click', () => mobileNav.classList.remove('active'));
}
if (mobileNav) {
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('active'));
  });
}

// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
