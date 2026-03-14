/* ─────────────────────────────────────────────────
   Translations (EN / FR / DE)
───────────────────────────────────────────────── */
const translations = {
  en: {
    "nav-index":    "Index",
    "nav-about":    "About",
    "nav-projects": "Projects",
    "nav-contact":  "Contact",
    "hdr-cta":      "Let's talk!",

    "hero-pre":       "Hi there! This is",
    "hero-cta":       "How can I help?",
    "hero-bio":       "CS Student (7th Sem) at Frankfurt University of Applied Sciences. Building AI agents, automation systems & full-stack web apps with Python, TypeScript and modern tools.",
    "hero-available": "Available for opportunities",
    "hero-scroll":    "(Scroll down)",

    "svc-1": "AI Agent Development",
    "svc-2": "Workflow Automation",
    "svc-3": "Full-Stack Development",
    "svc-4": "API Integration",
    "svc-5": "Prompt Engineering",

    "about-title": "About",
    "about-p1":    "I'm Ryan Curtis Dombeu, a Computer Science student in my 7th semester at Frankfurt University of Applied Sciences with a strong interest in AI agents, automation and full-stack development. I build practical digital solutions using Python, JavaScript/TypeScript, C/C++, SQL and REST APIs \u2014 bridging software engineering with efficient automation approaches.",
    "about-p2":    "My goal is to create real value in projects through AI-powered applications, modern web technologies and intelligent processes.",

    "stat-sem":  "Semesters",
    "stat-lang": "Spoken<br>Languages",
    "stat-auto": "Time Saved<br>via Automation",

    "skills-title": "Skills",

    "xp-title": "Experience",
    "xp-edu":   "Education",

    "xp1-role": "Automation & AI Support",
    "xp1-b1":   "Developed automated processes for content and service workflows",
    "xp1-b2":   "60% time saved through automation of manual steps",

    "xp2-role": "Sales Research & AI-Powered Sales Support",
    "xp2-b1":   "Created summaries, reports and templates for the sales team",
    "xp2-b2":   "Contributed to AI-powered workflows for more efficient information processing",

    "edu1-note": "Focus: Software Engineering, AI Agents, Algorithms & Automation",
    "edu2-note": "Grade average: 1.6",

    "proj-title": "Projects",
    "proj-gh":    "View all on GitHub",

    "proj1-desc": "Interactive multiple-choice quiz app \u2014 Vue 3, TypeScript, Tailwind CSS, Composition API. Fully type-safe (55% TS, 41% Vue).",
    "proj2-name": "AI Sales Research Agent",
    "proj2-desc": "Automated agent for collecting & summarising company data to prepare sales conversations.",
    "proj3-name": "Lead Qualification Agent (n8n)",
    "proj3-desc": "Automated system for scoring incoming leads and preparing sales calls using AI-based scoring.",
    "proj4-desc": "Web app with Pomodoro timer, task management and session statistics. Runs fully in the browser.",
    "proj5-desc": "Full-stack online shop \u2014 MongoDB, Express, React, Node.js. Product listing, cart management and REST API backend.",
    "proj6-name": "Interactive Germany Map GUI",
    "proj6-desc": "Desktop GUI for city selection and distance calculation (Dijkstra). Built in C++ with Qt Creator.",

    "contact-title": "Contact",
    "contact-line":  "Feel free to reach out<br>for projects or just a chat.",
    "contact-email": "Email",

    "footer-back": "Back to top",
    "footer-copy": "\u00A9 2025 Ryan Curtis Dombeu",

    "greeting-morning":   "Good morning!",
    "greeting-afternoon": "Good afternoon!",
    "greeting-evening":   "Good evening!",
    "greeting-night":     "Good night!",
  },

  fr: {
    "nav-index":    "Accueil",
    "nav-about":    "\u00C0 propos",
    "nav-projects": "Projets",
    "nav-contact":  "Contact",
    "hdr-cta":      "Parlons\u00A0!",

    "hero-pre":       "Bonjour\u00A0! Je suis",
    "hero-cta":       "Comment puis-je aider\u00A0?",
    "hero-bio":       "\u00C9tudiant en informatique (7e sem.) \u00E0 la Frankfurt University of Applied Sciences. Je cr\u00E9e des agents IA, des syst\u00E8mes d\u2019automatisation et des apps web avec Python, TypeScript et des outils modernes.",
    "hero-available": "Disponible pour des opportunit\u00E9s",
    "hero-scroll":    "(D\u00E9filer)",

    "svc-1": "D\u00E9veloppement d\u2019agents IA",
    "svc-2": "Automatisation des flux",
    "svc-3": "D\u00E9veloppement Full-Stack",
    "svc-4": "Int\u00E9gration d\u2019API",
    "svc-5": "Prompt Engineering",

    "about-title": "\u00C0 propos",
    "about-p1":    "Je suis Ryan Curtis Dombeu, \u00E9tudiant en informatique en 7e semestre \u00E0 la Frankfurt University of Applied Sciences, avec un int\u00E9r\u00EAt particulier pour les agents IA, l\u2019automatisation et le d\u00E9veloppement full-stack. Je construis des solutions num\u00E9riques concr\u00E8tes avec Python, JavaScript/TypeScript, C/C++, SQL et des API REST.",
    "about-p2":    "Mon objectif est de cr\u00E9er une vraie valeur ajout\u00E9e dans les projets gr\u00E2ce aux applications IA, aux technologies web modernes et aux processus intelligents.",

    "stat-sem":  "Semestres",
    "stat-lang": "Langues<br>parl\u00E9es",
    "stat-auto": "Temps gagn\u00E9<br>par Automatisation",

    "skills-title": "Comp\u00E9tences",

    "xp-title": "Exp\u00E9rience",
    "xp-edu":   "Formation",

    "xp1-role": "Automatisation & Support IA",
    "xp1-b1":   "D\u00E9veloppement de processus automatis\u00E9s pour les flux de contenu et de service",
    "xp1-b2":   "60\u00A0% de temps gagn\u00E9 gr\u00E2ce \u00E0 l\u2019automatisation des \u00E9tapes manuelles",

    "xp2-role": "Recherche commerciale & Support IA aux ventes",
    "xp2-b1":   "Cr\u00E9ation de r\u00E9sum\u00E9s, rapports et mod\u00E8les pour l\u2019\u00E9quipe commerciale",
    "xp2-b2":   "Contribution \u00E0 des flux de travail assist\u00E9s par IA pour un traitement plus efficace de l\u2019information",

    "edu1-note": "Axes\u00A0: G\u00E9nie logiciel, Agents IA, Algorithmes & Automatisation",
    "edu2-note": "Mention moyenne\u00A0: 1,6",

    "proj-title": "Projets",
    "proj-gh":    "Tout voir sur GitHub",

    "proj1-desc": "Application de quiz \u00E0 choix multiples \u2014 Vue 3, TypeScript, Tailwind CSS, Composition API. Totalement typ\u00E9e (55\u00A0% TS, 41\u00A0% Vue).",
    "proj2-name": "Agent IA de recherche commerciale",
    "proj2-desc": "Agent automatis\u00E9 pour collecter et r\u00E9sumer les donn\u00E9es d\u2019entreprise afin de pr\u00E9parer les entretiens de vente.",
    "proj3-name": "Agent de qualification des leads (n8n)",
    "proj3-desc": "Syst\u00E8me automatis\u00E9 pour scorer les leads entrants et pr\u00E9parer les appels commerciaux via un scoring IA.",
    "proj4-desc": "App web avec minuteur Pomodoro, gestion des t\u00E2ches et statistiques de session. Fonctionne enti\u00E8rement dans le navigateur.",
    "proj5-desc": "Boutique full-stack \u2014 MongoDB, Express, React, Node.js. Catalogue produits, gestion du panier et backend REST API.",
    "proj6-name": "GUI interactive de carte d\u2019Allemagne",
    "proj6-desc": "Interface desktop pour la s\u00E9lection de villes et le calcul de distances (Dijkstra). D\u00E9velopp\u00E9 en C++ avec Qt Creator.",

    "contact-title": "Contact",
    "contact-line":  "N\u2019h\u00E9sitez pas \u00E0 me contacter<br>pour des projets ou juste discuter.",
    "contact-email": "E-mail",

    "footer-back": "Haut de page",
    "footer-copy": "\u00A9 2025 Ryan Curtis Dombeu",

    "greeting-morning":   "Bonjour\u00A0!",
    "greeting-afternoon": "Bon apr\u00E8s-midi\u00A0!",
    "greeting-evening":   "Bonsoir\u00A0!",
    "greeting-night":     "Bonne nuit\u00A0!",
  },

  de: {
    "nav-index":    "Start",
    "nav-about":    "\u00DCber mich",
    "nav-projects": "Projekte",
    "nav-contact":  "Kontakt",
    "hdr-cta":      "Lass uns reden!",

    "hero-pre":       "Hallo! Ich bin",
    "hero-cta":       "Wie kann ich helfen?",
    "hero-bio":       "Informatikstudent (7.\u00A0Sem.) an der Frankfurt University of Applied Sciences. Ich entwickle KI-Agenten, Automatisierungssysteme & Full-Stack-Webanwendungen mit Python, TypeScript und modernen Tools.",
    "hero-available": "Offen f\u00FCr M\u00F6glichkeiten",
    "hero-scroll":    "(Scrollen)",

    "svc-1": "KI-Agenten-Entwicklung",
    "svc-2": "Workflow-Automatisierung",
    "svc-3": "Full-Stack-Entwicklung",
    "svc-4": "API-Integration",
    "svc-5": "Prompt Engineering",

    "about-title": "\u00DCber mich",
    "about-p1":    "Ich bin Ryan Curtis Dombeu, Informatikstudent im 7. Semester an der Frankfurt University of Applied Sciences mit besonderem Interesse an KI-Agenten, Automatisierung und Full-Stack-Development. Ich entwickle praxisnahe digitale L\u00F6sungen mit Python, JavaScript/TypeScript, C/C++, SQL und REST APIs.",
    "about-p2":    "Mein Ziel ist es, durch KI-gest\u00FCtzte Anwendungen, moderne Webtechnologien und intelligente Prozesse einen konkreten Mehrwert in Projekten zu schaffen.",

    "stat-sem":  "Semester",
    "stat-lang": "Gesprochene<br>Sprachen",
    "stat-auto": "Zeit gespart<br>durch Automatisierung",

    "skills-title": "F\u00E4higkeiten",

    "xp-title": "Erfahrung",
    "xp-edu":   "Ausbildung",

    "xp1-role": "Automatisierung & KI-Support",
    "xp1-b1":   "Entwicklung automatisierter Prozesse f\u00FCr Content- und Servicabl\u00E4ufe",
    "xp1-b2":   "60\u00A0% Zeitersparnis durch Automatisierung manueller Schritte",

    "xp2-role": "Sales Research & KI-gest\u00FCtzte Vertriebsunterst\u00FCtzung",
    "xp2-b1":   "Erstellung von Zusammenfassungen, Reports und Vorlagen f\u00FCr das Vertriebsteam",
    "xp2-b2":   "Mitarbeit an KI-gest\u00FCtzten Abl\u00E4ufen zur effizienteren Informationsverarbeitung",

    "edu1-note": "Fokus: Softwareentwicklung, KI-Agenten, Algorithmen & Automatisierung",
    "edu2-note": "Durchschnittsnote: 1,6",

    "proj-title": "Projekte",
    "proj-gh":    "Alle auf GitHub ansehen",

    "proj1-desc": "Interaktive Multiple-Choice-Quiz-App \u2014 Vue 3, TypeScript, Tailwind CSS, Composition API. Vollst\u00E4ndig typsicher (55\u00A0% TS, 41\u00A0% Vue).",
    "proj2-name": "KI-gest\u00FCtzter Sales Research Agent",
    "proj2-desc": "Automatisierter Agent zum Sammeln & Zusammenfassen von Unternehmensdaten zur Vorbereitung von Vertriebsgespr\u00E4chen.",
    "proj3-name": "Lead-Qualification Agent (n8n)",
    "proj3-desc": "Automatisiertes System zur Bewertung eingehender Leads und Vorbereitung von Sales-Calls durch KI-basiertes Scoring.",
    "proj4-desc": "Web-App mit Pomodoro-Timer, Aufgabenverwaltung und Sitzungsstatistiken. Vollst\u00E4ndig im Browser lauff\u00E4hig.",
    "proj5-desc": "Full-stack Online-Shop \u2014 MongoDB, Express, React, Node.js. Produktliste, Warenkorbverwaltung und REST-API-Backend.",
    "proj6-name": "Interaktive Deutschlandkarten-GUI",
    "proj6-desc": "Desktop-GUI zur Stadtauswahl und Distanzberechnung (Dijkstra). Implementiert in C++ mit Qt Creator.",

    "contact-title": "Kontakt",
    "contact-line":  "Ich freue mich \u00FCber Nachrichten,<br>Projektanfragen oder einen kurzen Austausch.",
    "contact-email": "E-Mail",

    "footer-back": "Nach oben",
    "footer-copy": "\u00A9 2025 Ryan Curtis Dombeu",

    "greeting-morning":   "Guten Morgen!",
    "greeting-afternoon": "Guten Tag!",
    "greeting-evening":   "Guten Abend!",
    "greeting-night":     "Gute Nacht!",
  },
};

/* ─────────────────────────────────────────────────
   Language switcher
───────────────────────────────────────────────── */
let currentLang = localStorage.getItem("lang") || "en";

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Simple text content
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML content (for keys with <br> etc.)
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Time-based greeting
  const greetingEl = document.getElementById("greeting");
  if (greetingEl) {
    const h = new Date().getHours();
    const greetKey =
      h < 5  ? "greeting-night"     :
      h < 12 ? "greeting-morning"   :
      h < 18 ? "greeting-afternoon" :
               "greeting-evening";
    greetingEl.textContent = t[greetKey] || greetingEl.textContent;
  }

  // Active button state
  document.querySelectorAll(".ls-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  document.documentElement.lang = lang;
  currentLang = lang;
  localStorage.setItem("lang", lang);
}

document.querySelectorAll(".ls-btn").forEach(btn => {
  btn.addEventListener("click", () => applyTranslations(btn.getAttribute("data-lang")));
});

applyTranslations(currentLang);

/* ─────────────────────────────────────────────────
   Theme toggle (dark / light)
───────────────────────────────────────────────── */
const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

themeBtn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

/* ─────────────────────────────────────────────────
   Header: active section nav highlight
───────────────────────────────────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinks  = document.querySelectorAll(".hdr-nav .hn");

const secObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const id = e.target.id;
      navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(s => secObserver.observe(s));

/* ─────────────────────────────────────────────────
   Mobile menu
───────────────────────────────────────────────── */
const menuBtn   = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuBtn.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
});

document.querySelectorAll("[data-close]").forEach(el => {
  el.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

/* ─────────────────────────────────────────────────
   Animated counters
───────────────────────────────────────────────── */
function animateCounter(el) {
  const target   = parseInt(el.getAttribute("data-counter"), 10);
  const suffix   = el.getAttribute("data-suffix") || "";
  const duration = 1400;
  const start    = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll("[data-counter]").forEach(el => counterObs.observe(el));

/* ─────────────────────────────────────────────────
   Scroll reveal
───────────────────────────────────────────────── */
document.querySelectorAll(
  ".s-head, .about-body, .about-chips, .xp-item, .proj-item, .contact-body, .s-sub-head"
).forEach(el => el.classList.add("reveal"));

const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = Array.from(e.target.parentNode?.children || []).indexOf(e.target) * 50;
      setTimeout(() => {
        e.target.classList.add("visible");
        revealObs.unobserve(e.target);
      }, Math.min(delay, 300));
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".reveal").forEach(el => revealObs.observe(el));
