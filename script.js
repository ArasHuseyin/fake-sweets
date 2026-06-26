// Zuckerwerk – kleine Interaktionen

// Aktuelles Jahr im Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Navigation
const burger = document.getElementById('burger');
const links = document.querySelector('.nav__links');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(open));
});
links.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    links.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  })
);

// Scroll-Reveal Animationen
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 80}ms`;
  observer.observe(el);
});

// Kontaktformular (Demo – kein Backend)
const form = document.getElementById('contactForm');
const hint = document.getElementById('formHint');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    hint.textContent = 'Bitte fülle alle Felder aus. 🧁';
    return;
  }
  const name = form.elements.name.value.trim();
  hint.textContent = `Danke ${name}! Deine Nachricht ist angekommen – wir melden uns bald. 🍬`;
  form.reset();
});
