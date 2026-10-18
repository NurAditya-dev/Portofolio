/* ===================================================================
   PORTFOLIO INTERACTIVE ENGINE (Vanilla JS)
   Spotlight, Command Palette, Interactive Terminal, Filtering, Modals
   =================================================================== */

// Sample Projects Database (Easy for user to edit or expand)
const PROJECTS_DATA = [
  {
    id: 'proj-7',
    number: '01',
    title: 'Crypto Market Tracking Dashboard',
    category: 'webapp',
    categoryName: 'Web App',
    shortDesc: 'Interactive cryptocurrency market monitoring dashboard with live price, volume, and market cap data from CoinGecko API.',
    fullDesc: 'A responsive crypto market tracking dashboard built with React.js that streams live cryptocurrency data through the CoinGecko API. It displays real-time price movements, trading volume, and total market capitalization, and was developed with AI-assisted workflows for code refactoring and debugging.',
    tags: ['React.js', 'CSS', 'CoinGecko API', 'Git'],
    github: 'https://github.com/NurAditya-dev/crypto-track-market',
    demo: 'https://crypto-track-market.vercel.app/',
    highlights: [
      'Interactive crypto market monitoring built with React.js component architecture',
      'CoinGecko API integration for dynamic (auto-updated) price, volume, and market cap data',
      'AI-assisted development (Prompt Engineering) for code refactoring, CSS optimization, and debugging',
      'Responsive interface accessible from desktop and mobile'
    ],
    preview: PROJECT_PREVIEW
  }
];

const PROJECT_PREVIEW = `
  <svg viewBox="0 0 460 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block">
    <rect width="460" height="160" fill="#0b0b0f" rx="8"/>
    <rect x="0" y="0" width="460" height="34" fill="#16161a"/>
    <rect x="0" y="34" width="460" height="1" fill="#232328"/>
    <text x="16" y="25" font-family="ui-monospace, monospace" font-size="10" fill="#b0b0c0">Crypto Market Tracking Dashboard</text>
    <rect x="16" y="48" width="428" height="100" fill="#0e0e16" stroke="#232328" stroke-width="1" rx="4"/>
    <line x1="16" y1="86" x2="444" y2="88" stroke="#232328" stroke-width="1"/>
    <line x1="16" y1="128" x2="444" y2="130" stroke="#232328" stroke-width="1"/>
    <path d="M16 100 C 60 96, 100 106, 140 99 C 180 92, 220 114, 256 107 C 296 100, 336 120, 376 110 C 416 104, 436 114, 444 110" fill="none" stroke="#8282ff" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="444" cy="110" r="4" fill="#8282ff"/>
    <text x="18" y="52" font-family="ui-monospace, monospace" font-size="6.5" fill="#8a8aaa">Coin • Price • 24H • Mkt Cap</text>
    <text x="18" y="64" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">1 • BTC</text>
    <text x="330" y="64" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">$82,122</text>
    <text x="400" y="64" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">+0.70%</text>
    <text x="420" y="64" text-anchor="end" opacity="0.5" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">$1.65T</text>
    <circle cx="382" cy="64" r="4" fill="#23a66b"/>
    <text x="18" y="82" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">2 • ETH</text>
    <text x="330" y="82" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">$2,422.47</text>
    <text x="400" y="82" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">-0.52%</text>
    <text x="420" y="82" text-anchor="end" opacity="0.5" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">$295B</text>
    <circle cx="382" cy="82" r="4" fill="#ff5f56"/>
    <text x="18" y="100" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">3 • USDT</text>
    <text x="330" y="100" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">$0.999</text>
    <text x="400" y="100" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">+0.01%</text>
    <text x="420" y="100" text-anchor="end" opacity="0.5" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">$183B</text>
    <circle cx="382" cy="100" r="4" fill="#23a66b"/>
    <text x="18" y="118" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">4 • BNB</text>
    <text x="330" y="118" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">$722.87</text>
    <text x="400" y="118" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">+0.32%</text>
    <text x="420" y="118" text-anchor="end" opacity="0.5" font-family="ui-monospace, monospace" font-size="8.5" fill="#9a9aba">$96B</text>
    <circle cx="382" cy="118" r="4" fill="#23a66b"/>
  </svg>
`;

const PROJECT_META = {
  github: 'https://github.com/NurAditya-dev',
  demo: 'https://crypto-track-market.vercel.app/'
};

// Experience and Education Data
const TIMELINE_DATA = {
  experience: [
    {
      role: 'Basketball Event Organizing Committee',
      company: 'Local Sports Organization',
      period: 'December 2024',
      desc: 'Operational and logistics coordination for a local sports event attended by 70+ visitors per day.',
      points: [
        'Managed the event\'s operational flow and daily logistics.',
        'Coordinated with multidisciplinary teams to keep match schedules on time and the event running smoothly.'
      ]
    }
  ],
  education: [
    {
      role: 'D4 Informatics Management',
      company: 'Universitas Negeri Surabaya (UNESA)',
      period: '2026 – Present',
      desc: 'Informatics management program focused on software development, web applications, and information systems.',
      points: [
        'Building interactive web applications with React.js and API integration.',
        'Strengthening logical thinking and problem-solving skills through OSN Informatics preparation.'
      ]
    },
    {
      role: 'SMA Negeri 1 Ketanggungan',
      company: 'SMA Negeri 1 Ketanggungan',
      period: 'Graduated 2026',
      desc: 'Secondary education with a foundation in mathematics and informatics.',
      points: [
        'Participated as a contestant in the National Scientific Olympiad (OSN) — Informatics level.',
        'Built algorithmic thinking and structured problem-solving skills.'
      ]
    }
  ],
  certification: [
    {
      role: 'Gemini Certified University Student',
      company: 'Gemini University',
      period: '17 October 2026',
      desc: 'University certification focused on AI fundamentals and practical AI integration for learning and productivity.',
      points: [
        'Learned AI fundamentals and applied Gemini as an adaptive learning assistant.',
        'Practiced AI integration into the Google ecosystem (Google Workspace, NotebookLM) to boost productivity.',
        'Mastered effective, precise, and academically-integrity prompt engineering techniques.'
      ]
    },
    {
      role: 'Gemini Certified Student',
      company: 'Google for Education',
      period: '17 October 2026 – 17 October 2029',
      desc: 'Certification issued by Google for Education for using Google AI (Gemini) in educational environments.',
      points: [
        'Certified to apply Google AI (Gemini) in education.',
        'Certification valid until 17 October 2029.'
      ]
    }
  ]
};

// Available Command Palette actions
const COMMAND_ACTIONS = [
  { id: 'nav-about', label: 'Go to About Me', group: 'Navigation', icon: 'user', action: () => scrollToSection('about') },
  { id: 'nav-projects', label: 'Go to Projects', group: 'Navigation', icon: 'folder-git-2', action: () => scrollToSection('projects') },
  { id: 'nav-experience', label: 'Go to Experience & Education', group: 'Navigation', icon: 'briefcase', action: () => scrollToSection('experience') },
  { id: 'nav-skills', label: 'Go to Skills & Stack', group: 'Navigation', icon: 'cpu', action: () => scrollToSection('skills') },
  { id: 'nav-contact', label: 'Go to Contact', group: 'Navigation', icon: 'mail', action: () => scrollToSection('contact') },
  { id: 'act-copy-email', label: 'Copy Email Address', group: 'Quick Actions', icon: 'copy', shortcut: 'E', action: () => copyEmailToClipboard() },
  { id: 'act-theme', label: 'Toggle Dark / Light Theme', group: 'Quick Actions', icon: 'sun-moon', shortcut: 'T', action: () => toggleTheme() },
  { id: 'act-github', label: 'Visit GitHub Profile', group: 'Social', icon: 'github', action: () => window.open('https://github.com/NurAditya-dev', '_blank') }
];

/* ===================================================================
   MAIN INITIALIZATION
   =================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSpotlight();
  initLiveClock();
  initProjectsGrid();
  initProjectFilter();
  initTimeline();
  initInteractiveTerminal();
  initCommandPalette();
  initProjectModal();
  initContactForm();
  initScrollSpy();
  initLucideIcons();
});

// Helper for Lucide icons rendering
function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* ===================================================================
   THEME SWITCHER
   =================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  
  applyTheme(savedTheme);

  const themeToggles = document.querySelectorAll('.theme-toggle-btn');
  themeToggles.forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portfolio-theme', theme);

  const themeIcons = document.querySelectorAll('.theme-icon');
  themeIcons.forEach(icon => {
    if (theme === 'light') {
      icon.setAttribute('data-lucide', 'moon');
    } else {
      icon.setAttribute('data-lucide', 'sun');
    }
  });

  initLucideIcons();
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const target = current === 'dark' ? 'light' : 'dark';
  applyTheme(target);
  showToast(`Switched to ${target} mode`);
}

/* ===================================================================
   MOUSE SPOTLIGHT EFFECT
   =================================================================== */
function initSpotlight() {
  const spotlight = document.querySelector('.mouse-spotlight');

  window.addEventListener('pointermove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
  });

  // Card specific spotlight
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.project-card, .skill-category-card, .contact-card-sub');
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
    
    // Greeting
    let greeting = 'Hello';
    if (hours >= 4 && hours < 12) greeting = 'Good Morning';
    else if (hours >= 12 && hours < 18) greeting = 'Good Afternoon';
    else greeting = 'Good Evening';

    if (greetingEl) greetingEl.textContent = greeting;

    // Time format
    if (timeEl) {
      const formatted = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      timeEl.textContent = `${formatted} Local Time`;
    }
  }

  update();
  setInterval(update, 1000);
}

/* ===================================================================
   PROJECTS RENDER & FILTER
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

    card.innerHTML = `
      <div class="project-top">
        <span class="project-number">${proj.number} // ${proj.categoryName}</span>
        <div class="project-links">
          <a href="${proj.github}" target="_blank" rel="noopener" class="project-icon-link" title="Source Code" onclick="event.stopPropagation()">
            <i data-lucide="github" style="width:16px;height:16px;"></i>
          </a>
          <a href="${proj.demo}" target="_blank" rel="noopener" class="project-icon-link" title="Live Preview" onclick="event.stopPropagation()">
            <i data-lucide="arrow-up-right" style="width:16px;height:16px;"></i>
          </a>
        </div>
      </div>
      
      <div class="project-content">
        <h3>${proj.title} <i data-lucide="chevron-right" style="width:16px;height:16px;opacity:0.4;"></i></h3>
        <p>${proj.shortDesc}</p>
      </div>

      <div class="project-preview" style="min-height:140px;overflow:hidden;display:flex;align-items:center;justify-content:center;">${proj.preview || ''}</div>

      <div class="project-tags">
        ${tagsHtml}
      </div>
    `;

    // Click card to open modal
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
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
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
   PROJECT DETAIL MODAL
   =================================================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('project-modal-close');
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener('click', closeProjectModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });
}

function openProjectModal(projectId) {
  const proj = PROJECTS_DATA.find(p => p.id === projectId);
  if (!proj) return;

  const modal = document.getElementById('project-modal');
  const titleEl = document.getElementById('modal-project-title');
  const descEl = document.getElementById('modal-project-desc');
  const tagsEl = document.getElementById('modal-project-tags');
  const highlightsEl = document.getElementById('modal-project-highlights');
  const liveLinkEl = document.getElementById('modal-live-link');
  const codeLinkEl = document.getElementById('modal-code-link');
  const previewEl = document.getElementById('modal-project-preview');

  if (titleEl) titleEl.textContent = proj.title;
  if (descEl) descEl.textContent = proj.fullDesc;

  if (tagsEl) {
    tagsEl.innerHTML = proj.tags.map(t => `<span class="tag-badge">${t}</span>`).join('');
  }

  if (highlightsEl) {
    highlightsEl.innerHTML = proj.highlights.map(h => `<li>${h}</li>`).join('');
  }

  if (previewEl && proj.preview) {
    previewEl.innerHTML = proj.preview;
  }

  if (liveLinkEl) liveLinkEl.href = proj.demo;
  if (codeLinkEl) codeLinkEl.href = proj.github;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  initLucideIcons();
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
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
  }

  // Initial render with experience
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
   INTERACTIVE TERMINAL WIDGET
   =================================================================== */
function initInteractiveTerminal() {
  const input = document.getElementById('term-input');
  const output = document.getElementById('term-output');
  if (!input || !output) return;

  const commandResponses = {
    help: `Available commands:
  - about       : Brief overview of my work & philosophy
  - skills      : Core technical abilities & stack
  - projects    : Highlights of featured works
  - contact     : Get in touch & copy email
  - theme       : Toggle dark and light mode
  - date        : Display current system timestamp
  - clear       : Clear terminal window
  - sudo        : Superuser override test`,
    about: `I am Nur Aditya Saputra, a D4 Informatics Management student at Universitas Negeri Surabaya (UNESA). I build interactive web applications with React.js and API integration, and I optimize development workflows using AI-assisted and manual tools.`,
    skills: `Technical Core:
  - Frontend : React.js, JavaScript, HTML, CSS, Responsive Web Design
  - API & Data : RESTful API Integration
  - Workflow  : Git, GitHub, VS Code, AI-Assisted Development (Prompt Engineering)
  - Tools & Languages : Canva, CapCut, Microsoft Office | Indonesian (Native), English (Intermediate)`,
    projects: `Featured Projects:
  1. Crypto Market Tracking Dashboard (React.js, CSS, CoinGecko API, Git)
  Type 'contact' to collaborate on this project!`,
    contact: `You can reach me at: nuradityasptra10@gmail.com
  GitHub     : https://github.com/NurAditya-dev
  Phone      : 0812-2569-2403
  (Copied email to clipboard!)`,
    date: () => `Current local time: ${new Date().toString()}`,
    sudo: `Permission denied: You are already a superuser in our hearts. 😉`,
    clear: '__CLEAR__'
  };

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value.trim().toLowerCase();
      if (!val) return;

      appendTermLine(`guest@portfolio:~$ ${input.value}`);

      if (val === 'clear') {
        output.innerHTML = '';
      } else if (val === 'contact') {
        copyEmailToClipboard();
        appendTermLine(commandResponses.contact);
      } else if (val === 'theme') {
        toggleTheme();
        appendTermLine(`Toggled theme to ${document.documentElement.getAttribute('data-theme')}`);
      } else if (typeof commandResponses[val] === 'function') {
        appendTermLine(commandResponses[val]());
      } else if (commandResponses[val]) {
        appendTermLine(commandResponses[val]);
      } else {
        appendTermLine(`bash: command not found: "${val}". Type "help" for a list of commands.`);
      }

      input.value = '';
      const body = document.querySelector('.terminal-body');
      if (body) body.scrollTop = body.scrollHeight;
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

  function renderList(query = '') {
    list.innerHTML = '';
    const filtered = COMMAND_ACTIONS.filter(item => 
      item.label.toLowerCase().includes(query.toLowerCase()) || 
      item.group.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      list.innerHTML = `<li style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.85rem;">No commands found for "${query}"</li>`;
      return;
    }

    let currentGroup = '';
    filtered.forEach((item, index) => {
      if (item.group !== currentGroup) {
        currentGroup = item.group;
        const groupHeader = document.createElement('div');
        groupHeader.className = 'cmd-group-label';
        groupHeader.textContent = currentGroup;
        list.appendChild(groupHeader);
      }

      const li = document.createElement('li');
      li.className = `cmd-item ${index === 0 ? 'selected' : ''}`;
      li.setAttribute('data-index', index);

      li.innerHTML = `
        <div class="cmd-item-left">
          <i data-lucide="${item.icon}" style="width:16px;height:16px;color:var(--text-muted);"></i>
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

  function openCommandPalette() {
    modal.classList.add('active');
    input.value = '';
    renderList('');
    setTimeout(() => input.focus(), 50);
  }

  function closeCommandPalette() {
    modal.classList.remove('active');
  }

  triggers.forEach(t => t.addEventListener('click', openCommandPalette));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCommandPalette();
  });

  input.addEventListener('input', (e) => {
    renderList(e.target.value.trim());
  });

  // Keyboard shortcut listener: Ctrl+K / Cmd+K
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
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
   CONTACT FORM & TOAST
   =================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  const copyBtn = document.getElementById('copy-email-btn');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyEmailToClipboard();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `<span>Sending...</span>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast('Message sent successfully! I will reply soon.');
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        initLucideIcons();
      }, 1000);
    });
  }
}

function copyEmailToClipboard() {
  const email = 'nuradityasptra10@gmail.com';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email copied to clipboard!');
    });
  } else {
    // Fallback
    const temp = document.createElement('textarea');
    temp.value = email;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    showToast('Email copied to clipboard!');
  }
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i data-lucide="check-circle-2" style="width:16px;height:16px;"></i> <span>${message}</span>`;
  container.appendChild(toast);
  initLucideIcons();

  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 3100);
}

/* ===================================================================
   NAVIGATION & SCROLL SPY
   =================================================================== */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('mobile-open');
    });

    navLinks.forEach(l => {
      l.addEventListener('click', () => {
        navLinksContainer.classList.remove('mobile-open');
      });
    });
  }

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
