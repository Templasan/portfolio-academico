/*
 * Renderiza o conteúdo de PORTFOLIO_DATA (js/data.js) no HTML.
 * Não é necessário editar este arquivo para atualizar o portfólio.
 */

(function () {
  const data = PORTFOLIO_DATA;

  const TECH_ICONS = {
    // Languages
    "Java":                  "devicon-java-plain",
    "C#":                    "devicon-csharp-plain",
    "TypeScript":            "devicon-typescript-plain",
    "JavaScript":            "devicon-javascript-plain",
    "Python":                "devicon-python-plain",
    "Python (Pandas, PyTorch)": "devicon-python-plain",
    "HTML":                  "devicon-html5-plain",
    "CSS":                   "devicon-css3-plain",
    "Kotlin":                "devicon-kotlin-plain",
    // Frameworks
    "React":                 "devicon-react-original",
    "Angular":               "devicon-angularjs-plain",
    "Node.js":               "devicon-nodejs-plain",
    "Express":               "devicon-express-original",
    "Flask":                 "devicon-flask-original",
    "Spring Boot":           "devicon-spring-plain",
    ".NET 8":                "devicon-dot-net-plain",
    "ASP.NET Core":          "devicon-dot-net-plain",
    "Tailwind CSS":          "devicon-tailwindcss-plain",
    "Vite":                  "devicon-vitejs-plain",
    "Unity Engine":          "devicon-unity-plain",
    // Databases
    "MySQL":                 "devicon-mysql-plain",
    "MongoDB":               "devicon-mongodb-plain",
    "MongoDB (NoSQL)":       "devicon-mongodb-plain",
    "SQL Server":            "devicon-microsoftsqlserver-plain",
    "SQL":                   "devicon-azuresqldatabase-plain",
    // DevOps / Cloud
    "Docker":                "devicon-docker-plain",
    "RabbitMQ":              "devicon-rabbitmq-original",
    "Redis":                 "devicon-redis-plain",
    "Cassandra":             "devicon-cassandra-plain",
    "Neo4j":                 "devicon-neo4j-plain",
    "Git/GitHub":            "devicon-github-original",
    "GitHub":                "devicon-github-original",
    "Git":                   "devicon-git-plain",
    "AWS":                   "devicon-amazonwebservices-plain",
    "AWS (EC2, S3, RDS)":    "devicon-amazonwebservices-plain",
    "Azure DevOps":          "devicon-azuredevops-plain",
    "Linux":                 "devicon-linux-plain",
    "PowerShell":            "devicon-powershell-plain",
    // Tools
    "Jira":                  "devicon-jira-plain",
    "Figma":                 "devicon-figma-plain",
    "Postman":               "devicon-postman-plain",
    // Testing
    "Jest":                  "devicon-jest-plain",
    "JUnit 5":               "devicon-junit-plain",
    // AI / Data
    "PyTorch":               "devicon-pytorch-original",
    "Pandas":                "devicon-pandas-original",
  };

  function buildTechList(technologies) {
    const wrap = el("div", { className: "tech-list" });
    technologies.filter((name) => TECH_ICONS[name]).forEach((name) => {
      wrap.appendChild(el("div", { className: "tech-icon-item", attrs: { title: name } }, [
        el("i", { className: TECH_ICONS[name] + " colored" }),
        el("span", { className: "tech-icon-tooltip", text: name }),
      ]));
    });
    return wrap;
  }

  function buildMediaGallery(project) {
    const images = (project.images || []).filter(Boolean);

    if (!images.length) {
      return el("div", { className: "project-gallery project-gallery--1" }, [
        el("div", { className: "project-gallery__tile project-gallery__tile--placeholder", text: "Sem mídia" }),
      ]);
    }

    // Smart grid estilo LinkedIn: mostra até 4 tiles; a 4ª recebe overlay "+N"
    const shown = images.slice(0, 4);
    const grid = el("div", { className: `project-gallery project-gallery--${Math.min(images.length, 4)}` });

    shown.forEach((src, i) => {
      const tileImg = el("img", { attrs: { src, alt: `Imagem ${i + 1} de ${project.name}`, loading: "lazy" } });
      const tile = el("button", {
        className: "project-gallery__tile",
        attrs: { type: "button", "aria-label": `Ver imagem ${i + 1} de ${project.name}` },
      }, [tileImg]);

      // A imagem principal ajusta o container à sua proporção real (sem corte nem margem)
      if (i === 0 && images.length > 1) {
        const fit = () => {
          if (tileImg.naturalWidth && tileImg.naturalHeight) {
            tile.style.aspectRatio = `${tileImg.naturalWidth} / ${tileImg.naturalHeight}`;
          }
        };
        if (tileImg.complete) fit();
        else tileImg.addEventListener("load", fit, { once: true });
      }

      if (i === 3 && images.length > 4) {
        tile.appendChild(el("span", { className: "project-gallery__more", text: `+${images.length - 4}` }));
      }
      tile.addEventListener("click", () => openLightbox(images, i, project.name));
      grid.appendChild(tile);
    });

    return grid;
  }

  function openLightbox(images, startIndex, projectName) {
    let idx = startIndex;
    const multi = images.length > 1;

    const img = el("img", { className: "lightbox__img", attrs: { alt: `Imagem de ${projectName}` } });
    const counter = el("span", { className: "lightbox__counter" });

    function update() {
      img.src = images[idx];
      if (multi) counter.textContent = `${idx + 1} / ${images.length}`;
    }
    function go(delta) {
      idx = (idx + delta + images.length) % images.length;
      update();
    }

    const closeBtn = el("button", { className: "lightbox__close", attrs: { type: "button", "aria-label": "Fechar" }, text: "✕" });
    const stage = el("div", { className: "lightbox__stage" }, [img]);
    const children = [closeBtn, stage];

    if (multi) {
      const prev = el("button", { className: "lightbox__nav lightbox__nav--prev", attrs: { type: "button", "aria-label": "Anterior" }, text: "‹" });
      const next = el("button", { className: "lightbox__nav lightbox__nav--next", attrs: { type: "button", "aria-label": "Próxima" }, text: "›" });
      prev.addEventListener("click", (e) => { e.stopPropagation(); go(-1); });
      next.addEventListener("click", (e) => { e.stopPropagation(); go(1); });
      children.push(prev, next, counter);
    }

    const overlay = el("div", { className: "lightbox" }, children);

    function close() {
      overlay.remove();
      document.removeEventListener("keydown", onKey);
    }
    function onKey(e) {
      if (e.key === "Escape") close();
      else if (multi && e.key === "ArrowLeft") go(-1);
      else if (multi && e.key === "ArrowRight") go(1);
    }

    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", (e) => { if (e.target === overlay || e.target === stage) close(); });
    document.addEventListener("keydown", onKey);

    update();
    document.body.appendChild(overlay);
  }

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $all = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function getPath(obj, path) {
    return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
  }

  function el(tag, { className, text, html, attrs } = {}, children = []) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    if (html != null) node.innerHTML = html;
    if (attrs) Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
    children.forEach((child) => child && node.appendChild(child));
    return node;
  }

  function bindTextFields() {
    $all("[data-bind]").forEach((node) => {
      const value = getPath(data, node.dataset.bind);
      if (value != null) node.textContent = value;
    });
  }

  function renderProfile() {
    const photo = $("#profilePhoto");
    photo.src = data.profile.photo || "";
    photo.alt = `Foto de perfil de ${data.profile.name}`;
    photo.addEventListener("error", () => {
      photo.replaceWith(el("div", {
        className: "hero__photo-placeholder",
        text: data.profile.name?.charAt(0)?.toUpperCase() || "?",
      }));
    }, { once: true });

    const areas = $("#profileAreas");
    data.profile.areasOfInterest.forEach((area) => {
      areas.appendChild(el("li", { className: "tag", text: area }));
    });
  }

  function renderList(targetSelector, items) {
    const target = $(targetSelector);
    items.forEach((item) => target.appendChild(el("li", { text: item })));
  }

  function renderCertificationsSummary() {
    const target = $("#certificationsSummaryText");
    if (target) target.textContent = data.certificationsSummary || "";
  }

  function renderCareer() {
    const target = $("#careerRoadmap");
    if (!target || !data.career || !data.career.length) return;
    data.career.forEach((item) => {
      target.appendChild(el("div", { className: `roadmap-step roadmap-step--${item.status}` }, [
        el("div", { className: "roadmap-marker" }, [
          el("div", { className: "roadmap-dot" }),
          el("div", { className: "roadmap-line" }),
        ]),
        el("div", { className: "roadmap-content" }, [
          el("div", { className: "roadmap-header" }, [
            el("span", { className: "roadmap-role", text: item.role }),
            el("span", { className: "roadmap-period", text: item.period }),
          ]),
          item.company ? el("span", { className: "roadmap-company", text: item.company }) : null,
          el("p", { className: "roadmap-desc", text: item.description }),
        ].filter(Boolean)),
      ]));
    });
  }

  function renderSkills() {
    const hardContainer = $("#hardSkillsList");
    Object.entries(data.skills.hard).forEach(([category, items]) => {
      hardContainer.appendChild(el("li", { className: "soft-category" }, [
        el("span", { className: "soft-category__label", text: category }),
        buildTechList(items),
      ]));
    });

    const softContainer = $("#softSkillsList");
    data.skills.soft.forEach((item) => {
      softContainer.appendChild(el("li", { className: "soft-featured" }, [
        el("h4", { className: "soft-featured__name", text: item.name }),
        el("p", { className: "soft-featured__desc", text: item.description }),
      ]));
    });
  }

  function buildProjectCard(project) {
    const tabDefs = [];

    // Contexto
    const ctxEl = el("div", {});
    if (project.context) {
      ctxEl.appendChild(el("p", { className: "tab-field-label", text: "Contexto" }));
      ctxEl.appendChild(el("p", { text: project.context }));
    }
    if (project.problem) {
      ctxEl.appendChild(el("p", { className: "tab-field-label", text: "Problema Identificado" }));
      ctxEl.appendChild(el("p", { text: project.problem }));
    }
    if (project.solution) {
      ctxEl.appendChild(el("p", { className: "tab-field-label", text: "Solução Desenvolvida" }));
      ctxEl.appendChild(el("p", { text: project.solution }));
    }
    tabDefs.push({ label: "Contexto", node: ctxEl });

    // Minha Atuação
    if (project.role) {
      const roleEl = el("div", {});
      roleEl.appendChild(el("p", { text: project.role }));
      tabDefs.push({ label: "Minha Atuação", node: roleEl });
    }

    // Engenharia & FATEC
    const engEl = el("div", {});
    [
      ["Competências Técnicas", project.competenciastec],
      ["Metodologia", project.methodology],
      ["Desafios Técnicos", project.challenges],
      ["Resultados Obtidos", project.results],
    ].filter(([, t]) => t).forEach(([label, text]) => {
      engEl.appendChild(el("p", { className: "tab-field-label", text: label }));
      engEl.appendChild(el("p", { text }));
    });
    tabDefs.push({ label: "Engenharia & FATEC", node: engEl });

    // Soft Skills
    if (!project.individual && project.softsk) {
      const softEl = el("div", {});
      if (Array.isArray(project.softsk)) {
        project.softsk.forEach((s) => {
          softEl.appendChild(el("p", { className: "tab-field-label", text: s.name }));
          softEl.appendChild(el("p", { text: s.description }));
        });
      } else {
        softEl.appendChild(el("p", { text: project.softsk }));
      }
      tabDefs.push({ label: "Soft Skills", node: softEl });
    }

    // Hard Skills
    const hardEl = el("div", {});
    if (Array.isArray(project.hardsk)) {
      project.hardsk.forEach((h) => {
        hardEl.appendChild(el("p", { className: "tab-field-label", text: h.name }));
        hardEl.appendChild(el("p", { text: h.description }));
      });
    } else {
      hardEl.appendChild(buildTechList(project.technologies));
    }
    tabDefs.push({ label: "Hard Skills", node: hardEl });

    // Build nav + panels
    const tabNav = el("div", { className: "project-tabs-nav" });
    const tabNavWrap = el("div", { className: "project-tabs-wrap" }, [tabNav]);
    const panelWrap = el("div", { className: "project-tab-panels" });

    tabDefs.forEach((tab, i) => {
      const btn = el("button", { className: "tab-btn" + (i === 0 ? " active" : ""), text: tab.label });
      const panel = el("div", { className: "tab-panel" + (i === 0 ? " active" : "") });
      panel.appendChild(tab.node);
      btn.addEventListener("click", () => {
        tabNav.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
        panelWrap.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        panel.classList.add("active");
      });
      tabNav.appendChild(btn);
      panelWrap.appendChild(panel);
    });

    // Media gallery (estilo post: 1 imagem grande + miniaturas)
    const gallery = buildMediaGallery(project);

    // Footer
    const badge = el("span", {
      className: "tag " + (project.individual ? "tag--individual" : "tag--team"),
      text: project.individual ? "Projeto Individual" : "Projeto em Equipe",
    });
    const footer = el("div", { className: "project-footer" }, [badge]);
    if (project.repoLink) {
      footer.appendChild(el("a", {
        className: "btn btn--ghost btn--small",
        text: "Ver repositório",
        attrs: { href: project.repoLink, target: "_blank", rel: "noopener noreferrer" },
      }));
    }

    const clientLine = (project.client || project.semester)
      ? el("span", { className: "project-client-label", text: [project.client, project.semester].filter(Boolean).join(" · ") })
      : null;

    const tagsRow = (project.technologies && project.technologies.length)
      ? el("ul", { className: "project-tags" },
          project.technologies.map((t) => el("li", { className: "tag", text: t })))
      : null;

    const header = el("div", { className: "project-header" }, [
      clientLine,
      el("h3", { className: "project-title", text: project.name }),
      el("p", { className: "project-description", text: project.description }),
      tagsRow,
    ].filter(Boolean));

    const body = el("div", { className: "project-body" }, [tabNavWrap, panelWrap, footer]);

    return el("article", { className: "project-card" }, [header, gallery, body]);
  }

  function renderProjects() {
    const target = $("#projectsList");
    target.className = "project-list";
    data.projects.forEach((p) => target.appendChild(buildProjectCard(p)));
  }

  function renderAcademicWorks() {
    const target = $("#academicWorksList");
    data.academicWorks.forEach((work) => {
      const card = el("article", { className: "card card--simple" }, [
        el("div", { className: "card__body" }, [
          el("span", { className: "tag tag--type", text: work.type }),
          el("h3", { text: work.title }),
          el("p", {}, [el("strong", { text: "Resumo: " }), el("span", { text: work.summary })]),
          el("p", {}, [el("strong", { text: "Resultados: " }), el("span", { text: work.results })]),
          work.link
            ? el("a", { className: "btn btn--ghost btn--small", text: "Acessar trabalho", attrs: { href: work.link, target: "_blank", rel: "noopener noreferrer" } })
            : null,
        ]),
      ]);
      target.appendChild(card);
    });
  }

  function renderCertificates() {
    const INITIAL_COUNT = 9;
    const target = $("#certificatesList");
    const container = target.closest(".container");

    if (window.pdfjsLib) {
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    }

    function renderPdfToCanvas(pdfPath, canvas) {
      if (!window.pdfjsLib) return;
      const encodedPath = pdfPath.split("/").map((seg) => encodeURIComponent(seg)).join("/");
      pdfjsLib.getDocument(encodedPath).promise.then((pdf) => {
        pdf.getPage(1).then((page) => {
          const viewport = page.getViewport({ scale: 1 });
          const scale = 520 / viewport.width;
          const scaled = page.getViewport({ scale });
          canvas.width = 520;
          canvas.height = scaled.height;
          page.render({ canvasContext: canvas.getContext("2d"), viewport: scaled });
        });
      });
    }

    function buildCard(cert) {
      const title = cert.image
        ? el("a", { className: "cert-link", text: cert.name, attrs: { href: cert.image, target: "_blank", rel: "noopener noreferrer" } })
        : el("span", { text: cert.name });

      return el("article", { className: "card card--cert" }, [
        el("div", { className: "card__body" }, [
          el("h3", { className: "cert-title" }, [title]),
          el("p", { className: "muted", text: `${cert.institution} • ${cert.year}` }),
        ]),
      ]);
    }

    data.certificates.slice(0, INITIAL_COUNT).forEach((cert) => target.appendChild(buildCard(cert)));

    if (data.certificates.length > INITIAL_COUNT) {
      const wrapper = el("div", { className: "certs-wrapper" });
      target.parentNode.insertBefore(wrapper, target);
      wrapper.appendChild(target);
      wrapper.appendChild(el("div", { className: "certs-fade" }));

      const remaining = data.certificates.length - INITIAL_COUNT;
      const btn = el("button", {
        className: "btn btn--ghost show-more-btn",
        text: `Ver mais (${remaining})`,
      });
      const lessBtn = el("button", {
        className: "btn btn--ghost show-less-btn",
        text: "Ver menos",
      });

      btn.addEventListener("click", () => {
        data.certificates.slice(INITIAL_COUNT).forEach((cert) => target.appendChild(buildCard(cert)));
        wrapper.classList.add("certs-wrapper--open");
        btn.remove();
        container.appendChild(lessBtn);
      });

      lessBtn.addEventListener("click", () => {
        Array.from(target.querySelectorAll(".card")).slice(INITIAL_COUNT).forEach((c) => c.remove());
        wrapper.classList.remove("certs-wrapper--open");
        lessBtn.remove();
        wrapper.appendChild(btn);
      });

      wrapper.appendChild(btn);
    }
  }

  function renderEvents() {
    const target = $("#eventsList");
    data.events.forEach((event) => {
      target.appendChild(el("li", { className: "timeline__item" }, [
        el("div", { className: "timeline__dot" }),
        el("div", { className: "timeline__content" }, [
          el("h3", { text: event.name }),
          el("p", { className: "timeline__role", text: event.role }),
          el("p", { text: event.description }),
        ]),
      ]));
    });
  }

  function renderContact() {
    const target = $("#contactList");
    data.contact.forEach((item) => {
      target.appendChild(el("li", {}, [
        el("a", { className: "contact-link", attrs: { href: item.url, target: "_blank", rel: "noopener noreferrer" } }, [
          el("span", { className: "contact-link__label", text: item.label }),
          el("span", { className: "contact-link__value", text: item.value }),
        ]),
      ]));
    });
  }

  function setupNav() {
    const toggle = $("#navToggle");
    const menu = $("#navMenu");
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    $all("#navMenu a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setFooterYear() {
    $("#footerYear").textContent = new Date().getFullYear();
  }

  function init() {
    bindTextFields();
    renderProfile();
    renderList("#educationList", data.education);
    renderList("#coursesList", data.courses);
    renderCertificationsSummary();
    renderCareer();
    renderSkills();
    renderProjects();
    renderAcademicWorks();
    renderCertificates();
    renderEvents();
    renderContact();
    setupNav();
    setFooterYear();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
