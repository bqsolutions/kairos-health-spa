/* =====================
   KAIROS FLOAT & WELLNESS
   main.js
   ===================== */

// ── Smooth scroll nav links ──────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ── Sticky nav background on scroll ─────────────────────────
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ── Scroll to section helper ─────────────────────────────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// ── Booking CTA ──────────────────────────────────────────────
function handleBook() {
  // Replace with your actual booking URL (e.g. MindBody, Vagaro, etc.)
  window.open('https://kairos.floathelm.com/booking?utm_id=97758_v0_s00_e0_tv4_a1demo0iqc0v5d&fbclid=IwY2xjawSO8VVleHRuA2FlbQIxMABicmlkETFnRzNacDFLTjVXQ0wzd1dJc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHhtOqFg9wxxBLYea3ueyxb8q0fYFGcL4mFeWaIxEF5kpoxRYe0OajJUL3LQf_aem_tMSmc7S_J0tv05S8xQKh9w', '_blank');
}

// ── Pricing CTA ──────────────────────────────────────────────
function handlePricing() {
  window.open('https://www.kairosfloats.com/pricing', '_blank');
}

// ── Fade-in on scroll (Intersection Observer) ─────────────────
const fadeEls = document.querySelectorAll(
  '.service-card, .step, .exp-stat, .contact-item, .founder-badge'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

fadeEls.forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ── Inject fade-in styles dynamically ────────────────────────
const fadeStyle = document.createElement('style');
fadeStyle.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(fadeStyle);

// ── Service card hover — add subtle teal glow ─────────────────
document.querySelectorAll('.service-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.05}s`;
});

// ── Active nav link highlight on scroll ──────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Inject active nav link style
const navStyle = document.createElement('style');
navStyle.textContent = `
  .nav-links a.active {
    color: var(--cream);
  }
`;
document.head.appendChild(navStyle);