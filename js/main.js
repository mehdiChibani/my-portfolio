/* ==========================================================================
   Portfolio – rendering, i18n (EN/FR), theme, scroll effects
   ========================================================================== */
(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const SUPPORTED = ["en", "fr"];
  let lang = "fr";

  /* ---------------------------------------------------------------- helpers */
  // Pick the right language from a {en, fr} object (or return plain strings as-is)
  const tr = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] ?? v.en : v);
  const t = (key) => I18N[lang][key] ?? I18N.en[key] ?? key;
  const chips = (arr) => `<ul class="chips">${arr.map((s) => `<li>${s}</li>`).join("")}</ul>`;
  const initials = (name) =>
    name
      .split(/\s+/)
      .map((w) => w[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  /* -------------------------------------------------------------- rendering */
  function renderSkills() {
    const host = $("#skills");
    host.querySelectorAll(".skill-group").forEach((n) => n.remove());
    host.insertAdjacentHTML(
      "beforeend",
      SKILLS.map(
        (g) => `
        <div class="skill-group">
          <h4>${t(g.group)}</h4>
          ${chips(g.items)}
        </div>`
      ).join("")
    );
  }

  function missionHTML(m, open) {
    const bullets = tr(m.bullets);
    return `
      <details class="mission" ${open ? "open" : ""}>
        <summary>
          ${m.logo ? `<img class="mission-logo" src="${m.logo}" alt="" width="46" height="46" />` : ""}
          <span class="mission-main">
            <span class="mission-title">${m.title}</span>
            <span class="mission-client">${tr(m.client)}</span>
          </span>
          ${m.period ? `<span class="mission-period"><span data-icon="clock"></span>${tr(m.period)}</span>` : ""}
          <span class="mission-chevron" data-icon="chevron"></span>
        </summary>
        <div class="mission-body">
          <p>${tr(m.summary)}</p>
          <ul class="bullets">${bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
          <div class="mission-links">
            ${
              m.play
                ? `<a class="link-pill play" href="${m.play}" target="_blank" rel="noopener"><span data-icon="play"></span>${t("exp.play")}</a>`
                : ""
            }

          </div>
        </div>
      </details>`;
  }

  function renderExperience() {
    $("#timeline").innerHTML = EXPERIENCE.map(
      (e) => `
      <li class="tl-item reveal">
        <span class="tl-dot ${e.current ? "is-current" : ""}" aria-hidden="true"></span>
        <article class="tl-card">
          <header class="tl-head">
            <span class="tl-avatar" aria-hidden="true">${initials(e.company)}</span>
            <div class="tl-head-text">
              <h3>${tr(e.role)}</h3>
              <p><a href="${e.url}" target="_blank" rel="noopener">${e.company}<span data-icon="external"></span></a>
                 <span class="dot-sep">•</span> ${tr(e.mode)}</p>
            </div>
            <span class="period ${e.current ? "is-current" : ""}">${tr(e.period)}</span>
          </header>
          <div class="tl-stack"><span class="label mono">${t("exp.stack")}</span>${chips(e.stack)}</div>
          <p class="label mono missions-label">${t("exp.missions")}</p>
          <div class="missions">
            ${e.missions.map((m) => missionHTML(m, true)).join("")}
          </div>
        </article>
      </li>`
    ).join("");

    $("#internships").innerHTML = INTERNSHIPS.map(
      (i) => `
      <article class="intern-card reveal">
        <p class="intern-meta"><span>${i.company}</span><span class="mono">${tr(i.period)}</span></p>
        <h4>${tr(i.title)}</h4>
        <p>${tr(i.desc)}</p>
        ${chips(i.stack)}
      </article>`
    ).join("");
  }

  function renderApps() {
    // Unique Play Store listings (Wafa Santé was rebranded to My Wafa)
    const seen = new Set();
    const apps = EXPERIENCE.flatMap((e) => e.missions).filter((m) => {
      if (!m.play || seen.has(m.play)) return false;
      seen.add(m.play);
      return true;
    });
    const all = [...apps, ...SHOWCASE_APPS];
    $("#appsGrid").innerHTML = all
      .map((a, idx) => {
        const hue = a.hue ?? [212, 190, 262, 168][idx % 4];
        const alt = a.alt ? tr(a.alt) : a.title;
        const icon = a.logo
          ? `<img class="app-icon app-icon--logo" src="${a.logo}" alt="" width="72" height="72" />`
          : `<div class="app-icon" aria-hidden="true"><span>${a.initials || initials(a.title)}</span></div>`;
        const shot = a.screenshot
          ? `<button class="app-shot" type="button" data-shot="${a.screenshot}" data-shot-alt="${alt}" aria-label="${a.title} — ${t("apps.view")}">
              <img src="${a.screenshot}" alt="" />
              <span class="app-shot-zoom" data-icon="expand"></span>
            </button>`
          : "";
        const action = a.play
          ? `<a class="app-link" href="${a.play}" target="_blank" rel="noopener">
              <span data-icon="play"></span><span>${t("apps.open")}</span><span data-icon="external"></span>
            </a>`
          : a.screenshot
            ? `<button class="app-link app-shot-link" type="button" data-shot="${a.screenshot}" data-shot-alt="${alt}">
                <span data-icon="expand"></span><span>${t("apps.view")}</span>
              </button>`
            : "";
        return `
      <article class="app-card reveal${a.screenshot ? " app-card--shot" : ""}" style="--h:${hue}">
        ${shot}
        ${icon}
        <div class="app-info">
          <h3>${a.title}</h3>
          <p>${tr(a.client)}</p>
        </div>
        ${action}
      </article>`;
      })
      .join("");
  }

  function renderProjects() {
    $("#projectsGrid").innerHTML = PROJECTS.map(
      (p) => `
      <article class="project-card reveal">
        <div class="project-top">
          <span class="project-icon" data-icon="${p.icon}"></span>
          <span class="status ${p.status}">${t(p.status === "progress" ? "proj.inprogress" : "proj.done")}</span>
        </div>
        <h3>${p.name}</h3>
        <p class="project-period mono">${tr(p.period)}</p>
        <p class="project-desc">${tr(p.desc)}</p>
        ${chips(p.stack)}
      </article>`
    ).join("");
  }

  function renderEducation() {
    $("#eduGrid").innerHTML = EDUCATION.map(
      (e) => `
      <article class="edu-card reveal">
        <span class="edu-year mono">${e.year}</span>
        <span class="edu-icon" data-icon="school"></span>
        <h3>${tr(e.degree)}</h3>
        <p>${tr(e.school)}</p>
      </article>`
    ).join("");
  }

  /* ------------------------------------------------------------------ i18n */
  function applyStaticTranslations() {
    $$("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
    $$("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
    $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));

    document.documentElement.lang = lang;
    document.title = t("meta.title");
    $('meta[name="description"]').setAttribute("content", t("meta.desc"));
    $('meta[property="og:title"]').setAttribute("content", t("meta.title"));

    $$(".lang-switch button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    $("#cvLink").setAttribute("href", PROFILE.cv[lang]);
  }

  function renderAll(instant = false) {
    applyStaticTranslations();
    renderSkills();
    renderExperience();
    renderApps();
    renderProjects();
    renderEducation();
    hydrateIcons();
    observeReveals(instant);
  }

  function setLang(next) {
    if (!SUPPORTED.includes(next)) return;
    lang = next;
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
    renderAll(true);
  }

  function detectLang() {
    try {
      const saved = localStorage.getItem("lang");
      if (SUPPORTED.includes(saved)) return saved;
    } catch (e) {}
    return "fr";
  }

  /* ----------------------------------------------------------------- theme */
  function initTheme() {
    const root = document.documentElement;
    const meta = $('meta[name="theme-color"]');
    const sync = () => meta.setAttribute("content", root.dataset.theme === "light" ? "#f4f7fd" : "#070d1a");
    sync();
    $("#themeToggle").addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
      try {
        localStorage.setItem("theme", root.dataset.theme);
      } catch (e) {}
      sync();
    });
  }

  /* ------------------------------------------------------- scroll behaviour */
  let revealObserver;
  function observeReveals(instant) {
    const els = $$(".reveal:not(.in)");
    if (instant || reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    revealObserver ??= new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            revealObserver.unobserve(en.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => revealObserver.observe(el));
  }

  function initHeader() {
    const header = $(".site-header");
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // mobile menu
    const btn = $("#menuBtn");
    const setOpen = (open) => {
      document.body.classList.toggle("menu-open", open);
      btn.setAttribute("aria-expanded", String(open));
    };
    btn.addEventListener("click", () => setOpen(!document.body.classList.contains("menu-open")));
    $$("#nav a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => e.key === "Escape" && setOpen(false));
    window.matchMedia("(min-width: 961px)").addEventListener("change", () => setOpen(false));

    // active link
    const links = new Map($$("#nav a[href^='#']").map((a) => [a.getAttribute("href").slice(1), a]));
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            links.forEach((a) => a.classList.remove("active"));
            links.get(en.target.id)?.classList.add("active");
          }),
        { rootMargin: "-45% 0px -50% 0px" }
      );
      links.forEach((_, id) => {
        const sec = document.getElementById(id);
        if (sec) io.observe(sec);
      });
    }
  }

  function initCounters() {
    const stats = $("#stats");
    const years = Math.max(1, new Date().getFullYear() - PROFILE.startYear);
    const targets = $$(".count", stats).map((el) => {
      const target = el.dataset.count === "years" ? years : Number(el.dataset.count);
      el.textContent = target; // final value is the default (no-JS / reduced motion safe)
      return { el, target };
    });
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    targets.forEach(({ el }) => (el.textContent = "0"));
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const dur = 1100;
        const tick = (now) => {
          const p = Math.min(1, (now - start) / dur);
          const ease = 1 - Math.pow(1 - p, 3);
          targets.forEach(({ el, target }) => (el.textContent = Math.round(target * ease)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(stats);
  }

  /* ------------------------------------------------------------------ boot */
  function init() {
    lang = detectLang();
    $$(".lang-switch button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    $("#year").textContent = new Date().getFullYear();

    initTheme();
    initHeader();
    initLightbox();
    renderAll();
    initCounters();
  }

  function initLightbox() {
    const box = $("#lightbox");
    const img = $("#lightboxImg");
    let lastTrigger = null;

    const open = (src, alt, trigger) => {
      lastTrigger = trigger;
      img.src = src;
      img.alt = alt || "";
      box.setAttribute("aria-label", alt || "");
      box.hidden = false;
      document.body.classList.add("lightbox-open");
      $("#lightboxClose").focus();
    };
    const close = () => {
      if (box.hidden) return;
      box.hidden = true;
      img.removeAttribute("src");
      img.alt = "";
      document.body.classList.remove("lightbox-open");
      lastTrigger?.focus();
    };

    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-shot]");
      if (trigger) {
        e.preventDefault();
        open(trigger.dataset.shot, trigger.dataset.shotAlt, trigger);
        return;
      }
      if (e.target.closest("[data-lightbox-close]")) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
