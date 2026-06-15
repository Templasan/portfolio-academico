/*
 * ============================================================
 *  CONTEÚDO DO PORTFÓLIO — edite SOMENTE este arquivo.
 *  Troque os textos, links e caminhos de imagem abaixo.
 *  As imagens ficam em assets/img, assets/certs e assets/docs.
 * ============================================================
 */

const PORTFOLIO_DATA = {

  // ---------- Apresentação ----------
  profile: {
    name: "João Victor Dos Reis Santos",
    formation: "Cursando Desenvolvimento de Software Multiplataforma — FATEC São José dos Campos",
    objective: "Desenvolvedor Full Stack com interesse em aplicações web, APIs REST e soluções baseadas em Inteligência Artificial.",
    areasOfInterest: ["Desenvolvimento Web", "APIs REST", "Inteligência Artificial", "Banco de Dados"],
    photo: "assets/img/profile.jpeg", // troque pela sua foto
  },

  // ---------- Currículo ----------
  education: [
    "Desenvolvimento de Software Multiplataforma — FATEC SJC (2024–202X)",
  ],

  courses: [
    "Desenvolvimento Web — Udemy",
    "Python para Data Science — Coursera",
  ],

  // ---------- Habilidades ----------
  skills: {
    hard: [
      "Python", "JavaScript", "SQL", "HTML", "CSS",
      "Node.js", "Flask",
      "MySQL", "MongoDB",
      "Git", "Docker", "AWS",
    ],
    soft: [
      "Trabalho em equipe",
      "Organização",
      "Resolução de problemas",
      "Comunicação",
    ],
  },

  // ---------- Projetos ----------
  // Para adicionar um projeto novo, copie um bloco { ... } e ajuste os campos.
  // "images" pode ficar vazio: [] — os cartões mostram um espaço reservado nesse caso.
  projects: [
  ],

  // ---------- Documentos e Trabalhos Acadêmicos ----------
  academicWorks: [
    {
      type: "FATEC API — 1º Semestre",
      title: "KayTrack — Análise de Comércio Exterior",
      summary: "Plataforma web para consulta e análise de dados públicos de importação e exportação dos municípios de São Paulo, desenvolvida em Python, Flask e MySQL e publicada na AWS, com protótipo no Figma e análise exploratória em Google Colab. Tecnologias: HTML, Python, Flask, MySQL, AWS.",
      results: "Aplicação publicada e funcional em produção na AWS, com protótipo de interface validado no Figma e análise exploratória dos dados conduzida em Google Colab.",
      link: "https://github.com/Templasan/DSM---Projeto-de-API-1-Semestre",
    },
    {
      type: "FATEC API — 2º Semestre",
      title: "Plataforma Integrada de Gestão — Newe Log",
      summary: "Plataforma web desenvolvida em parceria com a Newe Log para centralizar e padronizar processos administrativos, comerciais e operacionais da empresa — incluindo CRM com funil de vendas, unificação de checklists, controle de permissões, cotação automática de fretes e dashboards em tempo real. Tecnologias: HTML, CSS, Node.js, TypeScript, React, TypeORM, MySQL.",
      results: "Projeto concluído com as 3 sprints planejadas entregues e validado pelo parceiro Newe Log.",
      link: "https://github.com/Kernel-Panic-FatecSjc/KernelPanic-2DSM-API",
    },
    {
      type: "FATEC API — 3º Semestre",
      title: "Java the Hutt — Controle de Apontamento de Horas",
      summary: "Aplicação web desenvolvida em parceria com a GSW Software para centralizar o registro de horas trabalhadas em projetos, com regras de custo e faturamento configuráveis, gerando insights sobre produtividade, atrasos e orçamento. Tecnologias: Java, Spring Boot, MySQL, Docker, React, TypeScript, Tailwind CSS.",
      results: "Projeto com as 3 sprints planejadas concluídas, entregando cadastro e alocação de profissionais e projetos, apontamento e aprovação de horas com histórico auditável e relatórios de consumo e custos.",
      link: "https://github.com/fatec-api/java-the-hutt",
    },
    {
      type: "Projeto Acadêmico",
      title: "Atlantis — Sistema de Gestão de Parques e Hotéis",
      summary: "Sistema SPA para gestão de parques aquáticos, clubes e hotéis, evoluído de uma aplicação CLI para uma arquitetura cliente-servidor desacoplada com React e Express, aplicando os padrões de projeto Prototype e Builder/Director. Tecnologias: React, TypeScript, Node.js, Express, Vite.",
      results: "Sistema funcional com frontend e backend integrados, aplicando padrões de projeto que garantem integridade cadastral e consistência na criação das acomodações do resort.",
      link: "https://github.com/Templasan/AV4-Tec-II",
    },
    {
      type: "Projeto Acadêmico",
      title: "AutoManager — API de Gerenciamento Automotivo",
      summary: "API REST para gerenciamento de empresas automotivas (usuários, veículos, mercadorias, serviços e vendas), com autenticação JWT, autorização por 4 perfis de usuário e navegação HATEOAS. Tecnologias: Java, Spring Boot, Spring Data JPA, Spring HATEOAS, MySQL.",
      results: "API funcional com 307 de 312 testes de integração passando (98,7% de cobertura), abrangendo CRUD completo, autenticação, autorização por perfil e navegação HATEOAS.",
      link: "https://github.com/Templasan/AV4-DevWeb-III",
    },
  ],

  // ---------- Certificações / Certificados ----------
  certificates: [
    {
      name: "Especialização em Data Science",
      institution: "Coursera",
      year: "2023",
      image: "", // ex: "assets/certs/data-science.png" — deixe vazio se não tiver imagem
    },
    {
      name: "2º lugar — Hackathon XPTO 2023 (Categoria Inovação Tecnológica)",
      institution: "Hackathon XPTO",
      year: "2023",
      image: "",
    },
  ],

  // ---------- Participação em Eventos e Atividades Extracurriculares ----------
  events: [
    {
      name: "Maratona de Programação FATEC 2026",
      role: "Participante — Equipe CodeMasters",
      description: "Desenvolvimento de solução algorítmica para otimização logística. Classificação entre as 10 melhores equipes.",
    },
    {
      name: "Hackathon XPTO 2024",
      role: "2º lugar — Categoria Inovação Tecnológica",
      description: "Desenvolvimento de aplicativo para gestão de resíduos urbanos.",
    },
    {
      name: "Semana de Tecnologia FATEC 2025",
      role: "Participante",
      description: "Participação em workshops de Inteligência Artificial e Cloud Computing.",
    },
  ],

  // ---------- Contato ----------
  contact: [
    { label: "LinkedIn", value: "linkedin.com/in/joaosilvafatec", url: "https://linkedin.com/in/joaosilvafatec", icon: "linkedin" },
    { label: "GitHub", value: "github.com/joaosilvafatec", url: "https://github.com/joaosilvafatec", icon: "github" },
    { label: "E-mail", value: "joaosilvafatec@fatec.sp.gov.br", url: "mailto:joaosilvafatec@fatec.sp.gov.br", icon: "mail" },
  ],

};
