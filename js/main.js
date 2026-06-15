/*
 * Renderiza o conteúdo de PORTFOLIO_DATA (js/data.js) no HTML.
 * Não é necessário editar este arquivo para atualizar o portfólio.
 */

(function () {
  const data = PORTFOLIO_DATA;

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
    const target = $("#certificationsSummaryList");
    data.certificates.forEach((cert) => {
      target.appendChild(el("li", { text: `${cert.name} — ${cert.institution} (${cert.year})` }));
    });
  }

  function renderSkills() {
    const hard = $("#hardSkillsList");
    data.skills.hard.forEach((skill) => hard.appendChild(el("li", { className: "tag", text: skill })));

    const soft = $("#softSkillsList");
    data.skills.soft.forEach((skill) => soft.appendChild(el("li", { className: "tag tag--soft", text: skill })));
  }

  function projectImageBlock(project) {
    if (project.images && project.images.length) {
      const wrap = el("div", { className: "card__media" });
      project.images.forEach((src) => {
        const img = el("img", { attrs: { src, alt: `Demonstração de ${project.name}` } });
        img.addEventListener("error", () => img.remove());
        wrap.appendChild(img);
      });
      return wrap;
    }
    return el("div", { className: "card__media card__media--placeholder", text: "Imagens / GIFs do projeto" });
  }

  function renderProjects() {
    const target = $("#projectsList");
    data.projects.forEach((project) => {
      const techList = el("ul", { className: "tag-list" },
        project.technologies.map((tech) => el("li", { className: "tag", text: tech })));

      const details = [
        ["Problema identificado", project.problem],
        ["Solução desenvolvida", project.solution],
        ["Desafios técnicos", project.challenges],
        ["Resultados obtidos", project.results],
      ].map(([label, text]) => el("div", { className: "card__detail" }, [
        el("strong", { text: `${label}: ` }),
        el("span", { text }),
      ]));

      const links = el("div", { className: "card__actions" });
      if (project.repoLink) {
        links.appendChild(el("a", {
          className: "btn btn--ghost btn--small",
          text: "Ver repositório",
          attrs: { href: project.repoLink, target: "_blank", rel: "noopener noreferrer" },
        }));
      }

      const card = el("article", { className: "card" }, [
        projectImageBlock(project),
        el("div", { className: "card__body" }, [
          el("h3", { text: project.name }),
          el("p", { text: project.description }),
          techList,
          ...details,
          links,
        ]),
      ]);

      target.appendChild(card);
    });
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
    const target = $("#certificatesList");
    data.certificates.forEach((cert) => {
      const media = cert.image
        ? el("div", { className: "card__media card__media--cert" }, [
            el("img", { attrs: { src: cert.image, alt: `Certificado: ${cert.name}` } }),
          ])
        : el("div", { className: "card__media card__media--placeholder card__media--cert", text: "Certificado" });

      if (cert.image) {
        const img = $("img", media);
        img.addEventListener("error", () => {
          media.classList.add("card__media--placeholder");
          media.textContent = "Certificado";
        }, { once: true });
      }

      const card = el("article", { className: "card card--simple" }, [
        media,
        el("div", { className: "card__body" }, [
          el("h3", { text: cert.name }),
          el("p", { className: "muted", text: `${cert.institution} • ${cert.year}` }),
        ]),
      ]);
      target.appendChild(card);
    });
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
