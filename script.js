// script.js - Language switching and dynamic content
let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const data = window.siteContent[lang];
  if (!data) return;

  // Update all elements with data-key
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (data[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.value = data[key];
      } else {
        el.textContent = data[key];
      }
    }
  });

  // Update about content (supports HTML)
  const aboutEl = document.getElementById('aboutContent');
  if (aboutEl && data.aboutText) {
    aboutEl.innerHTML = data.aboutText;
  }

  // Update speakers dynamically
  const keynoteGrid = document.getElementById('keynoteGrid');
  const featuredGrid = document.getElementById('featuredGrid');
  if (keynoteGrid && featuredGrid && data.speakers) {
    const keynotes = data.speakers.filter(s => s.type === 'keynote');
    const featured = data.speakers.filter(s => s.type === 'featured');

    keynoteGrid.innerHTML = keynotes.map(s => `
      <div class="speaker-card">
        <img src="${s.photo}" alt="${s.name}" class="speaker-photo">
        <h3>${s.name}</h3>
        <div class="role">${s.role}</div>
        <p class="bio">${s.bio}</p>
      </div>
    `).join('');

    featuredGrid.innerHTML = featured.map(s => `
      <div class="speaker-card">
        <img src="${s.photo}" alt="${s.name}" class="speaker-photo">
        <h3>${s.name}</h3>
        <div class="role">${s.role}</div>
        <p class="bio">${s.bio}</p>
      </div>
    `).join('');
  }

  // Update schedule dynamically
  const scheduleList = document.getElementById('scheduleList');
  if (scheduleList && data.scheduleItems) {
    scheduleList.innerHTML = data.scheduleItems.map(item => `
      <div class="schedule-item">
        <div class="schedule-time">${item.time}</div>
        <div>
          <h3>${item.title}</h3>
          ${item.desc ? `<p>${item.desc}</p>` : ''}
          ${item.location ? `<p class="schedule-location">📍 ${item.location}</p>` : ''}
        </div>
      </div>
    `).join('');
  }

  // Update lang button text
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = data.langToggle;

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Persist preference
  localStorage.setItem('confLang', lang);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('confLang') || 'en';
  applyLanguage(saved);

  const toggle = document.getElementById('langToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = currentLang === 'en' ? 'ko' : 'en';
      applyLanguage(next);
    });
  }

  // Smooth scroll for nav (already handled by CSS, but extra safety)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
