/* ===================================================================
   PORTFOLIO ENGINE (Vanilla JS)
   Nur Aditya Saputra - Web Developer Portfolio
   Interactive Spotlight, Command Palette, Terminal, Modals, Light/Dark
   =================================================================== */

// ===================================================================
// DATA DEFINITIONS (All in English matching CV)
// ===================================================================

const GITHUB_SVG_ICON = `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" style="flex-shrink:0;"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;

const PROJECTS_DATA = [
  {
    id: 'crypto-dashboard',
    number: '01',
    title: 'Crypto Market Tracking Dashboard',
    category: 'webapp',
    categoryName: 'Web App',
    badgeText: 'LIVE APP',
    shortDesc: 'Interactive cryptocurrency market tracking web application with live prices, 24h volume, and market capitalization powered by CoinGecko API.',
    fullDesc: 'A responsive cryptocurrency market tracking dashboard built with React.js using component-based architecture. It integrates the CoinGecko API to dynamically stream live coin prices, 24-hour percentage changes, and market capitalization with auto-updating metrics. Developed with structured AI-assisted workflows (Prompt Engineering) for efficient refactoring, CSS styling, and debugging.',
    tags: ['React.js', 'CSS', 'CoinGecko API', 'Git', 'RESTful API', 'Responsive UI'],
    image: 'assets/images/crypto-market-demo.png',
    github: 'https://github.com/NurAditya-dev/crypto-track-market',
    demo: 'https://crypto-track-market.vercel.app/',
    highlights: [
      'Built an interactive crypto market tracker using React.js with component-based architecture.',
      'Integrated CoinGecko API to dynamically display crypto price trends, 24h volume, and market capitalization (auto-updated).',
      'Applied structured AI-Assisted Development (Prompt Engineering) for code refactoring, CSS optimization, and debugging efficiency.',
      'Designed responsive user interface ensuring optimal accessibility across mobile and desktop devices.'
    ]
  },
  {
    id: 'catatan-keuangan',
    number: '02',
    title: 'UangKu — Personal Finance Tracker',
    category: 'app',
    categoryName: 'Application',
    badgeText: 'OFFLINE APP',
    shortDesc: 'Ultra-lightweight (~5 MB) offline app to track monthly student allowances and expenses for myself and campus peers.',
    fullDesc: 'A lightweight (~5 MB) personal finance app built to solve student monthly budgeting. Created to track my own living allowance and shared with campus peers to manage their daily expenses. Operates 100% offline via LocalStorage with interactive cashflow charts, category breakdowns, and balance privacy controls.',
    tags: ['JavaScript (ES6+)', 'Android APK (~5 MB)', 'PWA', 'LocalStorage', 'CSS3', 'Offline-First'],
    image: 'assets/images/catatan-keuangan-demo.png',
    github: 'https://github.com/NurAditya-dev/Catatan-Keuangan',
    demo: null,
    highlights: [
      'Real-World Utility: Helps myself and university peers manage monthly allowances and stay on budget.',
      'Ultra-Lightweight (~5 MB): Fast-loading Android APK with minimal storage footprint and zero bloat.',
      '100% Offline-First: Stores transactions locally using LocalStorage without needing internet or mobile data.',
      'Charts & Privacy: Interactive cashflow graphs and a balance toggle for privacy in public spaces.'
    ]
  }
];

const TIMELINE_DATA = {
  experience: [
    {
      role: 'Panitia Pelaksana Event Bola Basket (Basketball Event Committee)',
      company: 'Equipment & Logistics Division (Divisi Perlengkapan)',
      period: 'December 2024',
      desc: 'Managed daily operational flow and equipment logistics for a local basketball sports tournament attended by 70+ visitors daily.',
      points: [
        'Organized daily logistical workflows and court facilities to support smooth sports operations.',
        'Coordinated with multidisciplinary teams to ensure all match schedules ran timely and seamlessly.'
      ]
    }
  ],
  education: [
    {
      role: 'D4 Informatics Management (D4 Manajemen Informatika)',
      company: 'Universitas Negeri Surabaya (UNESA)',
      period: '2026 – Present',
      desc: 'Undergraduate student focusing on web application engineering, software development, database systems, and interactive UI.',
      points: [
        'Experienced in building interactive React.js web applications with RESTful API integration.',
        'Utilizing AI-assisted workflows (Prompt Engineering) alongside standard engineering practices to optimize code quality.'
      ]
    },
    {
      role: 'High School Diploma (SMA)',
      company: 'SMA Negeri 1 Ketanggungan',
      period: 'Graduated 2026',
      desc: 'Completed secondary education with strong focus in mathematics, natural sciences, and computational logic.',
      points: [
        'Built a solid foundation in mathematics, analytical reasoning, and structured algorithmic problem solving.',
        'Actively engaged in computer science foundations and algorithmic training.'
      ]
    }
  ],
  olympiad: [
    {
      role: 'National Science Olympiad (OSN) in Informatics',
      company: 'Regency/City Level Participant (Tingkat Kabupaten/Kota)',
      period: 'SMA Negeri 1 Ketanggungan',
      desc: 'Official high school representative for SMA Negeri 1 Ketanggungan in the prestigious National Science Olympiad (Olimpiade Sains Nasional - OSN) in Informatics.',
      points: [
        'Competed in competitive programming, algorithmic analysis, and computational mathematics.',
        'Honed analytical thinking, computational efficiency, and rapid debugging skills under competitive constraints.',
        'Established strong mental discipline and logical deduction applied throughout software engineering projects.'
      ]
    }
  ]
};

const CERTIFICATIONS_DATA = [
  {
    id: 'gemini-university',
    title: 'Gemini Certified University Student',
    nativeTitle: 'Siswa Tersertifikasi Gemini - Universitas',
    issuer: 'Google for Education / Gemini University',
    issuedDate: '17 October 2026',
    validUntil: '17 October 2029',
    image: 'assets/images/gemini-certificate.jpg',
    badgeText: 'Google for Education',
    desc: 'Demonstrated fundamental knowledge, practical skills, and competencies required to utilize Google AI (Gemini) effectively within educational and development environments.',
    points: [
      'Explored foundational AI principles and practical implementation of Gemini as an adaptive learning and productivity assistant.',
      'Applied AI integration across Google ecosystem (Google Workspace & NotebookLM) to amplify academic and workflow productivity.',
      'Mastered effective prompt engineering techniques with precision, structured context, and academic integrity.'
    ]
  }
];

const COMMAND_ACTIONS = [
  { id: 'nav-about', label: 'Go to About / Bio (Nur Aditya Saputra)', group: 'Navigation', icon: 'user', action: () => scrollToSection('about') },
  { id: 'nav-projects-dashboard', label: 'Crypto Market Tracking Dashboard (React.js, CoinGecko API)', group: 'Projects', icon: 'folder-git-2', action: () => { scrollToSection('projects'); openProjectModal('crypto-market'); } },
  { id: 'nav-projects-uangku', label: 'UangKu — Student Personal Finance Tracker (Offline App · ~5 MB)', group: 'Projects', icon: 'folder-git-2', action: () => { scrollToSection('projects'); openProjectModal('catatan-keuangan'); } },
  { id: 'nav-projects', label: 'Go to Featured Projects Section', group: 'Navigation', icon: 'folder-git-2', action: () => scrollToSection('projects') },
  { id: 'nav-experience', label: 'Work Experience: Basketball Event Committee', group: 'Experience', icon: 'briefcase', action: () => { scrollToSection('experience'); document.querySelector('[data-tab="experience"]')?.click(); } },
  { id: 'nav-education-unesa', label: 'Education: Universitas Negeri Surabaya (UNESA) D4', group: 'Education', icon: 'graduation-cap', action: () => { scrollToSection('experience'); document.querySelector('[data-tab="education"]')?.click(); } },
  { id: 'nav-education-sma', label: 'Education: SMA Negeri 1 Ketanggungan', group: 'Education', icon: 'graduation-cap', action: () => { scrollToSection('experience'); document.querySelector('[data-tab="education"]')?.click(); } },
  { id: 'nav-olympiad', label: 'Olympiad: National Science Olympiad (OSN) in Informatics', group: 'Honors', icon: 'award', action: () => { scrollToSection('experience'); document.querySelector('[data-tab="olympiad"]')?.click(); } },
  { id: 'nav-certifications', label: 'Certifications: Gemini Certified University Student (Google)', group: 'Certifications', icon: 'award', action: () => scrollToSection('certifications') },
  { id: 'nav-skills', label: 'Technical Skills & Arsenal (React.js, APIs, Tools)', group: 'Skills', icon: 'cpu', action: () => scrollToSection('skills') },
  { id: 'nav-terminal', label: 'Open Developer Terminal (Interactive CLI)', group: 'Navigation', icon: 'terminal', action: () => scrollToSection('terminal') },
  { id: 'nav-contact', label: 'Contact Information (Email, Phone, WhatsApp)', group: 'Contact', icon: 'mail', action: () => scrollToSection('contact') },
  { id: 'act-live-demo', label: 'Open Live Crypto App Demo (Vercel)', group: 'Quick Actions', icon: 'external-link', shortcut: 'D', action: () => window.open('https://crypto-track-market.vercel.app/', '_blank') },
  { id: 'act-catatan-keuangan-repo', label: 'Open Catatan Keuangan Repository (GitHub)', group: 'Quick Actions', icon: 'github', action: () => window.open('https://github.com/NurAditya-dev/Catatan-Keuangan', '_blank') },
  { id: 'act-cert', label: 'View Full Gemini Certificate (Lightbox)', group: 'Quick Actions', icon: 'award', shortcut: 'C', action: () => openCertificateModal() },
  { id: 'act-copy-email', label: 'Copy Email Address (nuradityasptra10@gmail.com)', group: 'Quick Actions', icon: 'copy', shortcut: 'E', action: () => copyEmailToClipboard() },
  { id: 'act-copy-phone', label: 'Copy Phone / WhatsApp (0812-2569-2403)', group: 'Quick Actions', icon: 'phone', shortcut: 'P', action: () => copyPhoneToClipboard() },
  { id: 'act-theme', label: 'Toggle Light / Dark Mode', group: 'Quick Actions', icon: 'sun-moon', shortcut: 'T', action: () => toggleTheme() },
  { id: 'act-github', label: 'Visit GitHub Repositories (NurAditya-dev)', group: 'Social', icon: 'github', action: () => window.open('https://github.com/NurAditya-dev?tab=repositories', '_blank') }
];

/* ===================================================================
   MAIN INITIALIZATION
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSpotlight();
  initLiveClock();
  initMobileMenu();
  initProjectsGrid();
  initProjectFilter();
  initTimeline();
  initCertifications();
  initInteractiveTerminal();
  initCommandPalette();
  initModals();
  initContactForm();
  initScrollSpy();
  initFooterYear();
  initLucideIcons();
});

// Helper for Lucide icons rendering
function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ===================================================================
   THEME SWITCHER (Dark & Light Mode)
   =================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  
  applyTheme(savedTheme, false);

  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  themeToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      toggleTheme();
    });
  });
}

function applyTheme(theme, notify = true) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);

  if (notify) {
    showToast(`Switched to ${theme === 'dark' ? 'Dark' : 'Light'} theme`);
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const target = current === 'dark' ? 'light' : 'dark';
  applyTheme(target, true);
}

/* ===================================================================
   MOBILE NAVIGATION
   =================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('desktop-nav-links');
  const backdrop = document.getElementById('mobile-backdrop');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');

  if (!toggleBtn || !navLinks) return;

  function setMenuState(open) {
    if (open) {
      navLinks.classList.add('mobile-open');
      if (backdrop) backdrop.classList.add('active');
      if (openIcon) openIcon.style.display = 'none';
      if (closeIcon) closeIcon.style.display = 'inline-block';
    } else {
      navLinks.classList.remove('mobile-open');
      if (backdrop) backdrop.classList.remove('active');
      if (openIcon) openIcon.style.display = 'inline-block';
      if (closeIcon) closeIcon.style.display = 'none';
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.contains('mobile-open');
    setMenuState(!isOpen);
  });

  if (backdrop) {
    backdrop.addEventListener('click', () => setMenuState(false));
  }

  // Close when clicking nav link
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  // Close when resizing window past mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      setMenuState(false);
    }
  });
}

/* ===================================================================
   MOUSE SPOTLIGHT & CARD GLOW
   =================================================================== */
function initSpotlight() {
  window.addEventListener('pointermove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  });

  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.project-card, .certificate-card, .skill-category-card, .contact-card-sub');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--card-x', `${x}px`);
      card.style.setProperty('--card-y', `${y}px`);
    });
  });
}

/* ===================================================================
   LIVE CLOCK & GREETING
   =================================================================== */
function initLiveClock() {
  const timeEl = document.getElementById('hero-live-time');
  const greetingEl = document.getElementById('hero-greeting-text');

  function update() {
    const now = new Date();
    const hours = now.getHours();
    
    let greeting = 'Hello';
    if (hours >= 4 && hours < 12) greeting = 'Good Morning';
    else if (hours >= 12 && hours < 18) greeting = 'Good Afternoon';
    else greeting = 'Good Evening';

    if (greetingEl) greetingEl.textContent = greeting;

    if (timeEl) {
      const formatted = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      timeEl.textContent = `${formatted} Local Time (Surabaya / WIB)`;
    }
  }

  update();
  setInterval(update, 1000);
}

/* ===================================================================
   PROJECTS SECTION
   =================================================================== */
function initProjectsGrid() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = '';
  PROJECTS_DATA.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', proj.category);
    card.setAttribute('data-id', proj.id);

    const tagsHtml = proj.tags.map(t => `<span class="tag-badge">${t}</span>`).join('');

    const liveLinkTop = proj.demo
      ? `<a href="${proj.demo}" target="_blank" rel="noopener" class="project-icon-link" title="Open Live Web App" onclick="event.stopPropagation()">
          <i data-lucide="arrow-up-right" style="width:16px;height:16px;"></i>
        </a>`
      : `<button type="button" class="project-icon-link" title="Demo tidak tersedia" onclick="event.stopPropagation(); showToast('Demo tidak tersedia');" style="background:none; border:none; cursor:pointer; color:inherit; display:inline-flex; align-items:center; justify-content:center;">
          <i data-lucide="arrow-up-right" style="width:16px;height:16px;"></i>
        </button>`;

    const liveBtnAction = proj.demo
      ? `<a href="${proj.demo}" target="_blank" rel="noopener" class="btn btn-primary btn-sm" style="flex:1;">
          <i data-lucide="external-link" style="width:14px;height:14px;"></i>
          <span>Live Demo</span>
        </a>`
      : `<button type="button" class="btn btn-primary btn-sm" style="flex:1; cursor:pointer;" onclick="event.stopPropagation(); showToast('Demo tidak tersedia');">
          <i data-lucide="external-link" style="width:14px;height:14px;"></i>
          <span>Live Demo</span>
        </button>`;

    const indicatorClass = proj.category === 'app' ? 'project-live-indicator badge-app' : 'project-live-indicator';

    card.innerHTML = `
      <div class="project-top">
        <span class="project-number">${proj.number} // ${proj.categoryName}</span>
        <div class="project-links">
          <a href="${proj.github}" target="_blank" rel="noopener" class="project-icon-link" title="View Source Code" onclick="event.stopPropagation()">
            ${GITHUB_SVG_ICON}
          </a>
          ${liveLinkTop}
        </div>
      </div>
      
      <div class="project-preview" onclick="openProjectImageModal('${proj.id}')" title="Click to view full screenshot" style="cursor:zoom-in;">
        <div class="project-image-box">
          <span class="${indicatorClass}">${proj.badgeText || (proj.demo ? 'LIVE APP' : 'APP')}</span>
          <img src="${proj.image}" alt="${proj.title}" loading="lazy">
          <div class="project-view-overlay">
            <i data-lucide="zoom-in" style="width:20px;height:20px;"></i>
            <span>View Full Image</span>
          </div>
        </div>
      </div>

      <div class="project-content">
        <h3>
          <span>${proj.title}</span>
          <i data-lucide="arrow-right" style="width:16px;height:16px;opacity:0.4;"></i>
        </h3>
        <p>${proj.shortDesc}</p>
      </div>

      <div class="project-tags">
        ${tagsHtml}
      </div>

      <div class="project-card-actions" onclick="event.stopPropagation()">
        ${liveBtnAction}
        <a href="${proj.github}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" style="flex:1;">
          ${GITHUB_SVG_ICON}
          <span>Source Code</span>
        </a>
        <button type="button" class="btn btn-secondary btn-sm" onclick="openProjectImageModal('${proj.id}')" title="View full screenshot" style="padding:0.4rem 0.65rem;">
          <i data-lucide="zoom-in" style="width:14px;height:14px;"></i>
          <span>Full Image</span>
        </button>
      </div>
    `;

    // Click anywhere on card (except direct link buttons) to open details modal
    card.addEventListener('click', () => {
      openProjectModal(proj.id);
    });

    grid.appendChild(card);
  });

  initLucideIcons();
}

function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter || filter === 'react') {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ===================================================================
   EXPERIENCE & EDUCATION TIMELINE
   =================================================================== */
function initTimeline() {
  const container = document.getElementById('timeline-items-container');
  const tabBtns = document.querySelectorAll('.timeline-tab-btn');
  if (!container) return;

  function render(type) {
    const items = TIMELINE_DATA[type] || [];
    container.innerHTML = '';

    items.forEach(item => {
      const el = document.createElement('div');
      el.className = 'timeline-item';

      const pointsHtml = item.points.map(p => `<li>${p}</li>`).join('');

      el.innerHTML = `
        <div class="timeline-header">
          <div>
            <h4 class="timeline-role">${item.role}</h4>
            <div class="timeline-company">${item.company}</div>
          </div>
          <span class="timeline-period">${item.period}</span>
        </div>
        <p class="timeline-desc">${item.desc}</p>
        <ul class="timeline-points">
          ${pointsHtml}
        </ul>
      `;
      container.appendChild(el);
    });

    initLucideIcons();
  }

  // Initial render
  render('experience');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-tab');
      render(target);
    });
  });
}

/* ===================================================================
   CERTIFICATIONS SECTION
   =================================================================== */
function initCertifications() {
  const container = document.getElementById('certifications-container');
  if (!container) return;

  container.innerHTML = '';
  CERTIFICATIONS_DATA.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'certificate-card';

    const pointsHtml = cert.points.map(p => `<li>${p}</li>`).join('');

    card.innerHTML = `
      <div class="cert-thumb-wrapper" onclick="openCertificateModal()" title="Click to view full certificate">
        <img src="${cert.image}" alt="${cert.title} Certificate" class="cert-thumb-img">
        <div class="cert-thumb-overlay">
          <i data-lucide="zoom-in" style="width:20px;height:20px;"></i>
          <span>Enlarge Certificate</span>
        </div>
      </div>

      <div class="cert-details">
        <div class="cert-badge-row">
          <span class="cert-badge status-valid">
            <i data-lucide="check-circle" style="width:12px;height:12px;"></i> Verified Credential
          </span>
          <span class="cert-badge">
            <i data-lucide="shield" style="width:12px;height:12px;"></i> ${cert.badgeText}
          </span>
          <span class="cert-badge">
            <i data-lucide="calendar" style="width:12px;height:12px;"></i> Valid: ${cert.issuedDate} – ${cert.validUntil}
          </span>
        </div>

        <h3 class="cert-title">${cert.title}</h3>
        <div class="cert-issuer">${cert.nativeTitle} · ${cert.issuer}</div>
        <p class="cert-desc">${cert.desc}</p>

        <ul class="timeline-points">
          ${pointsHtml}
        </ul>

        <div class="cert-actions">
          <button class="btn btn-primary btn-sm" onclick="openCertificateModal()">
            <i data-lucide="zoom-in" style="width:14px;height:14px;"></i>
            <span>View Full Certificate</span>
          </button>
          <a href="${cert.image}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
            <i data-lucide="external-link" style="width:14px;height:14px;"></i>
            <span>Open High-Res File</span>
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  initLucideIcons();
}

/* ===================================================================
   MODALS (Project Details & Certificate Lightbox)
   =================================================================== */
function initModals() {
  // Project Modal
  const projModal = document.getElementById('project-modal');
  const projCloseBtn = document.getElementById('project-modal-close');

  if (projModal && projCloseBtn) {
    projCloseBtn.addEventListener('click', closeProjectModal);
    projModal.addEventListener('click', (e) => {
      if (e.target === projModal) closeProjectModal();
    });
  }

  // Certificate Modal
  const certModal = document.getElementById('certificate-modal');
  const certCloseBtn = document.getElementById('cert-modal-close');

  if (certModal && certCloseBtn) {
    certCloseBtn.addEventListener('click', closeCertificateModal);
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertificateModal();
    });
  }

  // Project Image Modal (Full Lightbox)
  const projImgModal = document.getElementById('project-image-modal');
  const projImgCloseBtn = document.getElementById('project-image-modal-close');

  if (projImgModal && projImgCloseBtn) {
    projImgCloseBtn.addEventListener('click', closeProjectImageModal);
    projImgModal.addEventListener('click', (e) => {
      if (e.target === projImgModal) closeProjectImageModal();
    });
  }

  // Button inside project detail modal to open full screenshot
  const fullImgBtn = document.getElementById('modal-image-full-btn');
  if (fullImgBtn) {
    fullImgBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openProjectImageModal(currentActiveProjectId);
    });
  }

  // Global Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeCertificateModal();
      closeProjectImageModal();
    }
  });
}

let currentActiveProjectId = 'crypto-market';

function openProjectImageModal(projectId) {
  const targetId = projectId || currentActiveProjectId || 'crypto-market';
  const proj = PROJECTS_DATA.find(p => p.id === targetId) || PROJECTS_DATA[0];
  const modal = document.getElementById('project-image-modal');
  if (!modal || !proj) return;

  const titleEl = document.getElementById('project-image-modal-title');
  const subtitleEl = document.getElementById('project-image-modal-subtitle');
  const linkEl = document.getElementById('project-image-modal-link');
  const imgEl = document.getElementById('project-image-modal-img');
  const metaProject = document.getElementById('project-image-modal-meta-project');
  const metaStack = document.getElementById('project-image-modal-meta-stack');
  const metaUrl = document.getElementById('project-image-modal-meta-url');
  const metaRepo = document.getElementById('project-image-modal-meta-repo');
  const btnOrig = document.getElementById('project-image-modal-btn-orig');
  const btnRepo = document.getElementById('project-image-modal-btn-repo');
  const btnLive = document.getElementById('project-image-modal-btn-live');
  const liveText = document.getElementById('project-image-modal-live-text');

  if (titleEl) titleEl.textContent = proj.title;
  if (subtitleEl) subtitleEl.textContent = `${proj.categoryName} Screenshot · ${proj.tags.slice(0, 3).join(', ')}`;
  if (linkEl) linkEl.href = proj.image;
  if (imgEl) {
    imgEl.src = proj.image;
    imgEl.alt = `${proj.title} Screenshot`;
  }
  if (metaProject) metaProject.textContent = proj.title;
  if (metaStack) metaStack.textContent = proj.tags.join(', ');
  if (metaUrl) metaUrl.textContent = proj.demo ? proj.demo.replace(/^https?:\/\//, '').replace(/\/$/, '') : 'Demo tidak tersedia (Offline App)';
  if (metaRepo) metaRepo.textContent = proj.github.replace(/^https?:\/\//, '');

  if (btnOrig) btnOrig.href = proj.image;
  if (btnRepo) btnRepo.href = proj.github;

  if (btnLive) {
    if (proj.demo) {
      btnLive.href = proj.demo;
      btnLive.target = '_blank';
      btnLive.onclick = null;
      if (liveText) liveText.textContent = 'Live Demo';
    } else {
      btnLive.href = 'javascript:void(0)';
      btnLive.target = '';
      btnLive.onclick = (e) => {
        e.preventDefault();
        showToast('Demo tidak tersedia');
      };
      if (liveText) liveText.textContent = 'Demo Tidak Tersedia';
    }
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  initLucideIcons();
}

function closeProjectImageModal() {
  const modal = document.getElementById('project-image-modal');
  if (modal) {
    modal.classList.remove('active');
    const otherActive = document.querySelector('.modal-overlay.active:not(#project-image-modal)');
    if (!otherActive) {
      document.body.style.overflow = '';
    }
  }
}

window.openProjectImageModal = openProjectImageModal;
window.closeProjectImageModal = closeProjectImageModal;

function openProjectModal(projectId) {
  const proj = PROJECTS_DATA.find(p => p.id === projectId);
  if (!proj) return;

  currentActiveProjectId = proj.id;

  const modal = document.getElementById('project-modal');
  const titleEl = document.getElementById('modal-project-title');
  const descEl = document.getElementById('modal-project-desc');
  const tagsEl = document.getElementById('modal-project-tags');
  const highlightsEl = document.getElementById('modal-project-highlights');
  const liveLinkEl = document.getElementById('modal-live-link');
  const codeLinkEl = document.getElementById('modal-code-link');
  const bannerEl = document.getElementById('modal-project-preview');

  if (titleEl) titleEl.textContent = proj.title;
  if (descEl) descEl.textContent = proj.fullDesc;

  if (bannerEl) {
    bannerEl.innerHTML = `
      <div onclick="openProjectImageModal('${proj.id}')" title="Click to view full image in high resolution" style="display:block; width:100%; cursor:zoom-in;">
        <img src="${proj.image}" alt="${proj.title}" style="width:100%; max-height:420px; object-fit:contain; display:block;">
      </div>
    `;
  }

  const fullImgBtn = document.getElementById('modal-image-full-btn') || document.getElementById('modal-image-full-link');
  if (fullImgBtn) {
    fullImgBtn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      openProjectImageModal(proj.id);
    };
  }

  if (tagsEl) {
    tagsEl.innerHTML = proj.tags.map(t => `<span class="tag-badge">${t}</span>`).join('');
  }

  if (highlightsEl) {
    highlightsEl.innerHTML = proj.highlights.map(h => `<li>${h}</li>`).join('');
  }

  if (liveLinkEl) {
    if (proj.demo) {
      liveLinkEl.href = proj.demo;
      liveLinkEl.target = '_blank';
      liveLinkEl.onclick = null;
      liveLinkEl.innerHTML = `<i data-lucide="external-link" style="width:14px;height:14px;"></i><span>Live Demo</span>`;
    } else {
      liveLinkEl.href = 'javascript:void(0)';
      liveLinkEl.target = '';
      liveLinkEl.onclick = (e) => {
        e.preventDefault();
        showToast('Demo tidak tersedia');
      };
      liveLinkEl.innerHTML = `<i data-lucide="external-link" style="width:14px;height:14px;"></i><span>Demo Tidak Tersedia</span>`;
    }
  }

  if (codeLinkEl) codeLinkEl.href = proj.github;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Explicitly reset scroll position to the top so banner image is immediately visible
  const bodyEl = modal.querySelector('.modal-body');
  if (bodyEl) {
    bodyEl.scrollTop = 0;
  }
  requestAnimationFrame(() => {
    if (bodyEl) {
      bodyEl.scrollTop = 0;
    }
  });

  initLucideIcons();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    const bodyEl = modal.querySelector('.modal-body');
    if (bodyEl) {
      bodyEl.scrollTop = 0;
    }
  }
}

function openCertificateModal() {
  const modal = document.getElementById('certificate-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    initLucideIcons();
  }
}

function closeCertificateModal() {
  const modal = document.getElementById('certificate-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ===================================================================
   INTERACTIVE DEVELOPER TERMINAL
   =================================================================== */
function initInteractiveTerminal() {
  const input = document.getElementById('term-input');
  const output = document.getElementById('term-output');
  const clearBtn = document.getElementById('term-clear-btn');
  const body = document.getElementById('term-body');
  if (!input || !output) return;

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      output.innerHTML = '';
      appendTermLine(`guest@nuraditya:~$ screen cleared.`);
    });
  }

  const commands = {
    help: `Available interactive commands:
  - about       : Brief overview of my background & focus
  - projects    : Details on featured web & app projects
  - cert        : View Gemini certification & credentials
  - skills      : Core technical capabilities and stack
  - edu         : Formal education background (UNESA & SMA)
  - olympiad    : National Science Olympiad (OSN) in Informatics
  - exp         : Leadership & committee experience
  - contact     : Direct contact info & auto-copy email
  - live        : Open live demo of Crypto Market Tracking Dashboard
  - repo        : Open GitHub repositories (https://github.com/NurAditya-dev?tab=repositories)
  - uangku      : Open UangKu (Catatan Keuangan) repository
  - theme       : Toggle dark and light theme
  - time        : Display current local timestamp
  - clear       : Clear terminal window`,
    
    about: `Nur Aditya Saputra
D4 Informatics Management student at Universitas Negeri Surabaya (UNESA).
Specializing in React.js, vanilla JavaScript, and dynamic RESTful API integration.
Logical thinking & analytical problem solving sharpened through OSN Informatics.
Optimizing development workflows with AI-assisted engineering (Prompt Engineering).`,

    projects: `Featured Projects:
[01] Crypto Market Tracking Dashboard (Web App)
  - Tech Stack  : React.js, CSS, CoinGecko API, Git
  - Live Demo   : https://crypto-track-market.vercel.app/
  - Repository  : https://github.com/NurAditya-dev/crypto-track-market
  - Description : Live crypto tracker featuring real-time prices, 24h volume, and market cap auto-updates.

[02] UangKu — Personal Finance Tracker (Application)
  - Tech Stack  : JavaScript (ES6+), PWA, Android APK (~5 MB), LocalStorage, CSS3
  - Live Demo   : Demo tidak tersedia (Offline-First App / Standalone APK)
  - Repository  : https://github.com/NurAditya-dev/Catatan-Keuangan
  - Description : Ultra-light (~5 MB) offline student budgeting app used by myself and campus peers.

Type 'live' to open the crypto demo or 'repo' to browse all GitHub repositories!`,

    cert: `Certification:
[01] Gemini Certified University Student (Siswa Tersertifikasi Gemini)
  - Authority   : Google for Education / Gemini University
  - Issued Date : 17 October 2026
  - Valid Until : 17 October 2029
  - Focus       : Foundational AI, Gemini for productivity & adaptive learning, prompt engineering.`,

    skills: `Technical Core & Arsenal:
  - Code Skills : React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Web Design
  - API & Data  : RESTful APIs, Asynchronous JS, JSON Data Parsing, API Integration
  - Workflow    : Git, GitHub, VS Code, AI-Assisted Development (Prompt Engineering)
  - Tools       : Canva, CapCut, Microsoft Office
  - Languages   : Indonesian (Native), English (Intermediate)`,

    edu: `Formal Education:
  1. Universitas Negeri Surabaya (UNESA) (2026 – Present)
     - D4 Informatics Management (D4 Manajemen Informatika)
     - Focus: Web application engineering, React.js, RESTful APIs, and database architecture.
  2. SMA Negeri 1 Ketanggungan (Graduated 2026)
     - High School Diploma (SMA)
     - Focus: Mathematics, natural sciences, and analytical foundations.`,

    olympiad: `National Science Olympiad (OSN):
  - Competition : National Science Olympiad (OSN) in Informatics
  - Level       : Regency/City Level Participant (Tingkat Kabupaten/Kota)
  - Institution : SMA Negeri 1 Ketanggungan
  - Focus       : Competitive programming, computational logic, and algorithmic optimization.`,

    osn: `National Science Olympiad (OSN):
  - Competition : National Science Olympiad (OSN) in Informatics
  - Level       : Regency/City Level Participant (Tingkat Kabupaten/Kota)
  - Institution : SMA Negeri 1 Ketanggungan
  - Focus       : Competitive programming, computational logic, and algorithmic optimization.`,

    exp: `Experience:
  - Basketball Event Organizing Committee (Panitia Pelaksana Event Bola Basket)
    - Division : Equipment & Logistics (Divisi Perlengkapan) · Dec 2024
    - Managed operational and logistical flow for 70+ visitors daily.`,

    contact: `Contact Channels:
  - Email    : nuradityasptra10@gmail.com (Copied to clipboard!)
  - Phone    : 0812-2569-2403 / +62 812-2569-2403
  - Location : Surabaya, Jawa Timur, Indonesia
  - GitHub   : https://github.com/NurAditya-dev`,

    live: () => {
      window.open('https://crypto-track-market.vercel.app/', '_blank');
      return 'Opened live crypto app in a new tab: https://crypto-track-market.vercel.app/';
    },

    repo: () => {
      window.open('https://github.com/NurAditya-dev?tab=repositories', '_blank');
      return 'Redirecting to GitHub repositories: https://github.com/NurAditya-dev?tab=repositories';
    },

    repositories: () => {
      window.open('https://github.com/NurAditya-dev?tab=repositories', '_blank');
      return 'Redirecting to GitHub repositories: https://github.com/NurAditya-dev?tab=repositories';
    },

    uangku: () => {
      window.open('https://github.com/NurAditya-dev/Catatan-Keuangan', '_blank');
      return 'Redirecting to UangKu (Catatan Keuangan) repository: https://github.com/NurAditya-dev/Catatan-Keuangan';
    },

    catatan: () => {
      window.open('https://github.com/NurAditya-dev/Catatan-Keuangan', '_blank');
      return 'Redirecting to Catatan Keuangan repository: https://github.com/NurAditya-dev/Catatan-Keuangan';
    },

    time: () => `Current local time: ${new Date().toLocaleString()}`
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const raw = input.value.trim();
      const val = raw.toLowerCase();
      if (!val) return;

      appendTermLine(`guest@nuraditya:~$ ${raw}`);

      if (val === 'clear') {
        output.innerHTML = '';
      } else if (val === 'contact') {
        copyEmailToClipboard();
        appendTermLine(commands.contact);
      } else if (val === 'theme') {
        toggleTheme();
        appendTermLine(`Toggled theme to ${document.documentElement.getAttribute('data-theme')} mode.`);
      } else if (typeof commands[val] === 'function') {
        appendTermLine(commands[val]());
      } else if (commands[val]) {
        appendTermLine(commands[val]);
      } else {
        appendTermLine(`bash: command not found: "${raw}". Type "help" to see available commands.`);
      }

      input.value = '';
      if (body) {
        body.scrollTop = body.scrollHeight;
      }
    }
  });

  function appendTermLine(text) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.textContent = text;
    output.appendChild(line);
  }
}

/* ===================================================================
   COMMAND PALETTE (CTRL+K)
   =================================================================== */
function initCommandPalette() {
  const modal = document.getElementById('cmd-modal');
  const input = document.getElementById('cmd-input');
  const list = document.getElementById('cmd-list');
  const triggers = document.querySelectorAll('.cmd-trigger-btn');
  if (!modal || !input || !list) return;

  let selectedIndex = 0;
  let currentFiltered = [];

  function renderList(query = '') {
    list.innerHTML = '';
    currentFiltered = COMMAND_ACTIONS.filter(item => 
      item.label.toLowerCase().includes(query.toLowerCase()) || 
      item.group.toLowerCase().includes(query.toLowerCase())
    );

    if (currentFiltered.length === 0) {
      list.innerHTML = `<li style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.85rem;">No commands found for "${query}"</li>`;
      return;
    }

    selectedIndex = 0;
    let currentGroup = '';

    currentFiltered.forEach((item, index) => {
      if (item.group !== currentGroup) {
        currentGroup = item.group;
        const groupHeader = document.createElement('div');
        groupHeader.className = 'cmd-group-label';
        groupHeader.textContent = currentGroup;
        list.appendChild(groupHeader);
      }

      const li = document.createElement('li');
      li.className = `cmd-item ${index === selectedIndex ? 'selected' : ''}`;
      li.setAttribute('data-index', index);

      const iconHtml = item.icon === 'github'
        ? GITHUB_SVG_ICON
        : `<i data-lucide="${item.icon}" style="width:16px;height:16px;color:var(--text-muted);"></i>`;

      li.innerHTML = `
        <div class="cmd-item-left">
          ${iconHtml}
          <span>${item.label}</span>
        </div>
        ${item.shortcut ? `<span class="cmd-shortcut">${item.shortcut}</span>` : ''}
      `;

      li.addEventListener('click', () => {
        closeCommandPalette();
        item.action();
      });

      list.appendChild(li);
    });

    initLucideIcons();
  }

  function updateSelection() {
    const items = list.querySelectorAll('.cmd-item');
    items.forEach((item, idx) => {
      if (idx === selectedIndex) {
        item.classList.add('selected');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('selected');
      }
    });
  }

  function openCommandPalette() {
    modal.classList.add('active');
    input.value = '';
    renderList('');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      input.focus();
      input.select();
    }, 40);
  }

  function closeCommandPalette() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Expose globally for direct button invocation
  window.openCommandPalette = openCommandPalette;
  window.closeCommandPalette = closeCommandPalette;

  triggers.forEach(t => t.addEventListener('click', (e) => {
    e.preventDefault();
    openCommandPalette();
  }));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCommandPalette();
  });

  input.addEventListener('input', (e) => {
    renderList(e.target.value.trim());
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentFiltered.length > 0) {
        selectedIndex = (selectedIndex + 1) % currentFiltered.length;
        updateSelection();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentFiltered.length > 0) {
        selectedIndex = (selectedIndex - 1 + currentFiltered.length) % currentFiltered.length;
        updateSelection();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (currentFiltered[selectedIndex]) {
        closeCommandPalette();
        currentFiltered[selectedIndex].action();
      }
    }
  });

  // Global Keyboard shortcuts: Ctrl+K / Cmd+K
  document.addEventListener('keydown', (e) => {
    const isK = e.key === 'k' || e.key === 'K' || e.code === 'KeyK';
    if ((e.ctrlKey || e.metaKey) && isK) {
      e.preventDefault();
      e.stopPropagation();
      if (modal.classList.contains('active')) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
    } else if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCommandPalette();
    }
  });
}

/* ===================================================================
   CONTACT FORM & CLIPBOARD ACTIONS
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalHtml = submitBtn.innerHTML;

      submitBtn.innerHTML = `<span>Sending...</span>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast('Message received! Thank you, I will reply shortly.');
        form.reset();
        submitBtn.innerHTML = originalHtml;
        submitBtn.disabled = false;
        initLucideIcons();
      }, 900);
    });
  }
}

function copyEmailToClipboard() {
  const email = 'nuradityasptra10@gmail.com';
  copyText(email, 'Email copied to clipboard: nuradityasptra10@gmail.com');
}

function copyPhoneToClipboard() {
  const phone = '0812-2569-2403';
  copyText(phone, 'Phone number copied to clipboard: 0812-2569-2403');
}

function copyText(text, successMessage) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(() => fallbackCopy(text, successMessage));
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const temp = document.createElement('textarea');
  temp.value = text;
  temp.style.position = 'fixed';
  temp.style.opacity = '0';
  document.body.appendChild(temp);
  temp.select();
  try {
    document.execCommand('copy');
    showToast(successMessage);
  } catch (err) {
    showToast('Failed to copy text.');
  }
  document.body.removeChild(temp);
}

function showToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i data-lucide="check-circle-2" style="width:16px;height:16px;flex-shrink:0;"></i> <span>${message}</span>`;
  container.appendChild(toast);
  initLucideIcons();

  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 3100);
}

window.showToast = showToast;

/*NAVIGATION & SCROLL SPY*/
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -75;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
