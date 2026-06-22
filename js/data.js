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
    {
      name: "KayTrack — Análise de Comércio Exterior (FATEC API • 1º Semestre)",
      description: "Plataforma web para consulta e análise de dados públicos de importação e exportação dos municípios de São Paulo.",
      problem: "Dados públicos de comércio exterior dos municípios paulistas estão dispersos e pouco acessíveis, dificultando consultas e análises rápidas por gestores, pesquisadores e empresas.",
      solution: "Aplicação web que centraliza, organiza e exibe esses dados de forma visual e intuitiva, permitindo consultar e analisar importações e exportações por município.",
      technologies: ["HTML", "Python", "Flask", "MySQL", "AWS"],
      challenges: "Modelagem do banco de dados a partir de bases públicas heterogêneas, integração entre backend em Flask e frontend, e implantação da aplicação em ambiente de nuvem (AWS).",
      results: "Aplicação publicada e funcional em produção na AWS, com protótipo de interface validado no Figma e análise exploratória dos dados conduzida em Google Colab.",
      repoLink: "https://github.com/Templasan/DSM---Projeto-de-API-1-Semestre",
      images: [],
    },
    {
      name: "Plataforma Integrada de Gestão (FATEC API • 2º Semestre)",
      description: "Plataforma web desenvolvida em parceria com a empresa Newe Log para centralizar e padronizar os processos administrativos, comerciais e operacionais da empresa.",
      problem: "A empresa utilizava diversas ferramentas separadas (Microsoft Lists, Google Forms, Microsoft Forms) para gerenciar checklists e cadastros, gerando descentralização, retrabalho, erros e relatórios imprecisos.",
      solution: "Sistema único que integra cadastro e gestão de clientes (CRM com funil de vendas), unificação de checklists operacionais, automação de eventos administrativos, controle de permissões por usuário, cálculo automático de cotações de frete e geração de relatórios e dashboards em tempo real.",
      technologies: ["HTML", "CSS", "Node.js", "TypeScript", "React", "TypeORM", "MySQL"],
      challenges: "Levantamento e padronização de processos dispersos em múltiplas ferramentas, modelagem de um sistema de permissões customizável por função, integração entre dados comerciais e operacionais em um único ambiente e desenvolvimento ágil em equipe usando SCRUM.",
      results: "Projeto concluído com as 3 sprints planejadas entregues (cadastro e gestão de clientes, funil de vendas, relatórios, unificação de checklists, controle de permissões, sistema de eventos com notificações e responsividade mobile), validado pelo parceiro Newe Log.",
      repoLink: "https://github.com/Kernel-Panic-FatecSjc/KernelPanic-2DSM-API",
      images: [],
    },
    {
      name: "Java the Hutt — Controle de Apontamento de Horas (FATEC API • 3º Semestre)",
      description: "Aplicação web desenvolvida em parceria com a GSW Software para dar visibilidade sobre a performance das equipes a partir do registro de apontamento de horas em projetos.",
      problem: "A GSW, com equipes distribuídas por todo o Brasil, sofria com um sistema de apontamento de horas obsoleto: sem visibilidade sobre produtividade e alocação de horas, a empresa enfrentava relatórios imprecisos e prejuízo financeiro.",
      solution: "Sistema web que centraliza o registro de horas por atividade, com regras de custo e faturamento configuráveis por projeto, profissional ou tipo de atividade, gerando insights sobre produtividade, atrasos e monitoramento de orçamento.",
      technologies: ["Java", "Spring Boot", "MySQL", "Docker", "React", "TypeScript", "Tailwind CSS"],
      challenges: "Arquitetura inicialmente monolítica com migração planejada para microsserviços, integração entre back-end em APIs REST e front-end em SPA, e definição de regras flexíveis de custo/faturamento mantendo simplicidade de uso.",
      results: "Projeto com as 3 sprints concluídas, entregando cadastro e alocação de profissionais, apontamento e aprovação de horas com histórico auditável e relatórios de consumo e custos por projeto.",
      repoLink: "https://github.com/fatec-api/java-the-hutt",
      images: [],
    },
    {
      name: "Atlantis — Sistema de Gestão de Parques e Hotéis",
      description: "Sistema SPA para gestão de parques aquáticos, clubes e hotéis, evoluído de uma aplicação CLI para uma arquitetura desacoplada cliente-servidor com React e Express.",
      problem: "A versão original era uma aplicação CLI, limitando a usabilidade e a apresentação visual da gestão de clientes, dependentes e acomodações de um resort.",
      solution: "Reestruturação para uma SPA moderna com toda a regra de negócio no backend (Express) e o frontend (React) como camada de exibição reativa, aplicando os padrões de projeto Prototype e Builder/Director.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "Vite", "CSS"],
      challenges: "Migração de CLI para arquitetura cliente-servidor desacoplada, aplicação de Design Patterns (Prototype e Builder) em Orientação a Objetos, e organização da execução concorrente de frontend e backend.",
      results: "Sistema funcional com frontend e backend integrados, executáveis de forma concorrente, com padrões de projeto que garantem integridade cadastral e consistência na criação das acomodações.",
      repoLink: "https://github.com/Templasan/AV4-Tec-II",
      images: [],
    },
    {
      name: "AutoManager — API de Gerenciamento Automotivo",
      description: "Sistema REST para gerenciamento de empresas automotivas, incluindo cadastro de usuários, veículos, mercadorias, serviços e vendas, com autenticação JWT e navegação HATEOAS.",
      problem: "Empresas automotivas precisam gerenciar de forma integrada usuários com diferentes perfis (clientes, funcionários, fornecedores), veículos, estoque, serviços e vendas, com níveis de permissão distintos.",
      solution: "API REST em Spring Boot com autenticação via JWT, autorização por 4 perfis (ADMIN, GERENTE, VENDEDOR, CLIENTE) com permissões específicas por rota e acesso restrito por proprietário do recurso, com navegação HATEOAS.",
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "Spring HATEOAS", "MySQL", "H2", "Lombok", "JUnit 5"],
      challenges: "Implementação de autorização por perfil com regras de acesso por proprietário do recurso e cobertura ampla com testes de integração.",
      results: "API funcional com 307 de 312 testes de integração passando (98,7% de cobertura), abrangendo CRUD completo, autenticação JWT, autorização por perfil, regras de negócio e navegação HATEOAS.",
      repoLink: "https://github.com/Templasan/AV4-DevWeb-III",
      images: [],
    },
  ],

  // ---------- Documentos e Trabalhos Acadêmicos ----------
  // Use para TCC, artigos, relatórios de iniciação científica, etc.
  academicWorks: [
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
