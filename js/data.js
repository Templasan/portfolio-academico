const PORTFOLIO_DATA = {

  // ---------- Apresentação ----------
  profile: {
    name: "João Victor Dos Reis Santos",
    formation: "Cursando Desenvolvimento de Software Multiplataforma — FATEC São José dos Campos",
    objective: "Hoje atuo como estagiario de desenvolvimento na GSW Software. Gosto de encontrar soluções criativas para problemas complexos, e estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades técnicas e interpessoais. Meu objetivo é crescer como desenvolvedor, contribuindo para projetos inovadores e impactantes, e me tornar um profissional completo e versátil no mercado de tecnologia.",
    areasOfInterest: ["Desenvolvimento Web", "APIs REST", "Inteligência Artificial", "Banco de Dados"],
    photo: "assets/img/profile.jpeg", 
  },

  // ---------- Currículo ----------
  education: [
    "Desenvolvimento de Software Multiplataforma — FATEC SJC (2025–2027)",
  ],

  courses: [
  ],

  career: [
    {
      role: "Estágio em Desenvolvimento de Software",
      company: "GSW Software",
      period: "2025 — atual",
      description: "Atuação no desenvolvimento de soluções web, contribuindo com o time de engenharia em projetos reais utilizando tecnologias modernas do stack da empresa.",
      status: "current",
    },
    {
      role: "Desenvolvedor Júnior",
      company: "",
      period: "Próximo passo",
      description: "Objetivo de efetivação ou nova oportunidade como desenvolvedor júnior, consolidando a experiência adquirida no estágio e na formação acadêmica.",
      status: "next",
    },
    {
      role: "Desenvolvedor Pleno",
      company: "",
      period: "Horizonte",
      description: "Meta de médio prazo: atuar como desenvolvedor pleno com especialização em arquitetura de software, cloud e inteligência artificial aplicada.",
      status: "future",
    },
  ],

  certificationsSummary: "Atualmente em desenvolvimento contínuo — busco certificações que complementem minha formação prática e validem minhas competências técnicas no mercado.",

  // ---------- Habilidades ----------
  skills: {
    hard: {
      "IA & Automação": [
        "Engenharia de Prompt",
        "Integração de LLMs",
        "Agentes de Atendimento Automatizado",
        "Automação de Processos",
        "Python (Pandas, PyTorch)",
      ],
      "Linguagens & Frameworks": [
        "Java", "C#", "TypeScript", "JavaScript", "SQL",
        "Spring Boot", ".NET 8",
        "Angular", "React", "Tailwind CSS", "Unity Engine",
      ],
      "Dados": [
        "Clean Architecture", "Domain-Driven Design (DDD)", "SOLID",
        "Microsserviços", "REST APIs",
        "SQL Server", "MySQL", "MongoDB (NoSQL)",
        "Redis", "Cassandra", "Neo4j",
      ],
      "Cloud & DevOps": [
        "Docker", "Keycloak", "RabbitMQ",
        "Azure DevOps", "AWS (EC2, S3, RDS)", "Git/GitHub",
        "Linux", "PowerShell",
      ],
      "Testes e Ferramentas": [
        "xUnit", "Moq", "Jest", "TDD", "Code Review",
        "GitFlow", "Scrum", "Jira", "Git", "Postman",
      ],
    },
    soft: [
      {
        name: "Proatividade",
        description: "Quando vejo algo travando o andamento, não fico esperando alguém pedir. Assumo por conta própria tarefas que estão paradas e atrasando o cronograma, destravando o projeto e ajudando o time a voltar pro ritmo.",
      },
      {
        name: "Adaptabilidade",
        description: "Me sinto confortável caindo de paraquedas em coisas que ainda não domino e me ajusto rápido a mudanças de contexto, ferramentas e requisitos. Quando preciso aprender conceitos novos sob pressão de prazo, coloco em prática rápido o suficiente pra não travar minhas entregas.",
      },
      {
        name: "Comunicação",
        description: "Além da parte técnica, costumo ser uma das pessoas responsáveis por apresentar o trabalho. Gosto de traduzir o que é técnico para uma linguagem clara, de um jeito que quem está ouvindo realmente entenda — seja a banca, o professor ou os próprios colegas.",
      },
      {
        name: "Comprometimento",
        description: "Levo prazo a sério. Mesmo quando o projeto passa por fases turbulentas, mantenho minhas entregas em dia e ajudo a sustentar o cronograma do time até o fim.",
      },
    ],
  },

  // ---------- Projetos ----------
  // Para adicionar um projeto novo, copie um bloco { ... } e ajuste os campos.
  // "images" pode ficar vazio: [] — os cartões mostram um espaço reservado nesse caso.
  projects: [
    {
      name: "Java the Hutt — Controle de Apontamento de Horas",
      semester: "3º Semestre · 2026",
      client: "GSW Software",
      description: "Aplicação web desenvolvida em parceria com a GSW Software para dar visibilidade sobre a performance das equipes a partir do registro de apontamento de horas em projetos.",
      context: "Desenvolvido pelo time Java the Hutt para o projeto API do 3º semestre de DSM (FATEC SJC), em parceria com a GSW.",
      problem: "A GSW enfrentava um gargalo crítico de gestão e \"cegueira de dados\" com equipes distribuídas, gerando relatórios imprecisos e prejuízo financeiro.",
      competenciastec: "Desenvolvimento backend com Java e Spring Boot, arquitetura REST, containerização com Docker, frontend SPA com React e TypeScript, e estilização com Tailwind CSS.",
      methodology: "Adotamos metodologia ágil com Scrum: o time foi dividido em papéis definidos (Product Owner, Scrum Master e desenvolvedores), realizamos dailys para alinhamento quase diário do andamento das tarefas e organizamos o desenvolvimento em sprints com entregas incrementais a cada ciclo.",
      individual: false,
      role: "Atuei no desenvolvimento do backend em Java/Spring Boot, modelagem do banco de dados e integração com o frontend React. Em um ambiente de mudanças constantes de requisito, pratiquei resolução de conflitos internos ao time para manter o alinhamento técnico, e adaptabilidade para replanejar entregas sem comprometer a qualidade.",
      softsk: [
        {
          name: "Resiliência & Superação",
          description: "Passei por uma troca de equipe não planejada logo no início do projeto. Absorvi a mudança, me integrei a um novo time e sustentei entregas consistentes até o fim do semestre, mantendo o ritmo apesar da reorganização.",
        },
        {
          name: "Adaptabilidade",
          description: "Capacidade de me adaptar tanto a mudanças de contexto e de equipe quanto a requisitos voláteis ao longo do projeto, mantendo o foco na entrega e replanejando a rota rapidamente sempre que necessário.",
        },
        {
          name: "Trabalho em Equipe & Relações Interpessoais",
          description: "Experiência atuando em times grandes (de 8 a 9 integrantes), aprendendo a alinhar expectativas, coordenar esforços entre perfis diversos e sustentar um ambiente colaborativo e saudável.",
        },
        {
          name: "Proatividade & Iniciativa",
          description: "Ao perceber que tarefas paradas estavam atrasando o cronograma, assumi por conta própria entregas que estavam sem responsável disponível no momento, destravando o andamento do projeto e ajudando o time a manter o prazo.",
        },
      ],
      solution: "Plataforma focada em inteligência de dados que mapeia logs de status e esforço para gerar insights de produtividade, custos reais vs. previstos e relatórios analíticos em CSV.",
      challenges: "Arquitetura inicialmente monolítica com migração planejada para microsserviços, integração entre back-end em APIs REST e front-end em SPA, e definição de regras flexíveis de custo/faturamento mantendo simplicidade de uso.",
      results: "Projeto com as 3 sprints concluídas, entregando cadastro e alocação de profissionais, apontamento e aprovação de horas com histórico auditável e relatórios de consumo e custos por projeto.",
      hardsk: [
        { name: "Java", description: "Aprendido para o desenvolvimento do backend, criação de APIs, utilizando microsserviços e a comunicação entre eles." },
        { name: "Docker", description: "Dockerização por containers dos microsserviços criados." },
        { name: "RabbitMQ", description: "Mensageria assíncrona para a comunicação entre os microsserviços de forma desacoplada." },
        { name: "MySQL", description: "Banco de dados relacional para a persistência dos apontamentos, projetos e usuários." },
        { name: "Keycloak", description: "Utilizado para o gerenciamento do login e criação de usuários." },
        { name: "DaisyUI", description: "Biblioteca para agilizar a estilização no frontend, com componentes prontos." },
      ],
      technologies: ["Java", "Spring Boot", "TypeScript", "React", "Docker", "Jira"],
      repoLink: "https://github.com/fatec-api/java-the-hutt",
      images: [
        "assets/img/api3dsm1.jpeg",
        "assets/img/api3dsm2.gif",
        "assets/img/api3dsm3.jpg",
        "assets/img/api3dsm4.jpeg"
      ],
    },
    {
      name: "Plataforma Integrada de Gestão",
      semester: "2º Semestre · 2025",
      client: "Newe Log",
      description: "Plataforma web desenvolvida em parceria com a empresa Newe Log para centralizar e padronizar os processos administrativos, comerciais e operacionais da empresa.",
      context: "Desenvolvido pelo time Kernel-Panic para o projeto API do 2º semestre de DSM (FATEC SJC), em parceria com a Newe Log.",
      problem: "A empresa utilizava diversas ferramentas separadas (Microsoft Lists, Google Forms, Microsoft Forms) para gerenciar checklists e cadastros, gerando descentralização, retrabalho, erros e relatórios imprecisos.",
      competenciastec: "Desenvolvimento fullstack com Node.js, TypeScript e React, modelagem de sistema de permissões por função, integração ORM (TypeORM) com MySQL e metodologia ágil SCRUM com sprints.",
      individual: false,
      role: "Atuei como desenvolvedor fullstack, construindo funcionalidades no frontend React e backend Node.js/TypeScript. Pratiquei escuta ativa no levantamento de requisitos com o parceiro Newe Log, colaborando na modelagem do sistema de permissões e na priorização do backlog junto ao time.",
      softsk: [
        { name: "Gestão de Tempo & Priorização", description: "Primeiro contato com SCRUM em contexto real, organizando as entregas para gerar valor a cada sprint." },
        { name: "Negociação & Comunicação", description: "Negociação de escopo com o parceiro Newe Log e comunicação verbal e escrita contínua dentro do time." },
        { name: "Escuta Ativa", description: "Levantamento de requisitos junto ao cliente e colaboração na modelagem do sistema de permissões." },
      ],
      solution: "Sistema único que integra cadastro e gestão de clientes (CRM com funil de vendas), unificação de checklists operacionais, automação de eventos administrativos, controle de permissões por usuário, cálculo automático de cotações de frete e geração de relatórios e dashboards em tempo real.",
      challenges: "Levantamento e padronização de processos dispersos em múltiplas ferramentas, modelagem de um sistema de permissões customizável por função, integração entre dados comerciais e operacionais em um único ambiente e desenvolvimento ágil em equipe usando SCRUM.",
      results: "Projeto concluído com as 3 sprints planejadas entregues (cadastro e gestão de clientes, funil de vendas, relatórios, unificação de checklists, controle de permissões, sistema de eventos com notificações e responsividade mobile), validado pelo parceiro Newe Log.",
      hardsk: [
        { name: "Node.js", description: "Backend da plataforma, expondo as APIs de negócio consumidas pelo frontend." },
        { name: "TypeScript", description: "Tipagem estática em todo o stack (frontend e backend), reduzindo erros em tempo de execução." },
        { name: "React", description: "Construção da SPA do frontend, com as telas de CRM, checklists e dashboards." },
        { name: "TypeORM", description: "Mapeamento objeto-relacional para a integração com o banco MySQL." },
      ],
      technologies: ["HTML", "CSS", "Node.js", "TypeScript", "React", "TypeORM", "MySQL"],
      repoLink: "https://github.com/Kernel-Panic-FatecSjc/KernelPanic-2DSM-API",
      images: [
        "assets/img/api2dsm1.jpg",
        "assets/img/api2dsm.gif",
        "assets/img/api2dsm3.jpg",
        "assets/img/api2dsm4.jpg",],
    },
    {
      name: "KayTrack — Análise de Comércio Exterior",
      semester: "1º Semestre · 2025",
      client: "FATEC SJC",
      description: "Plataforma web para consulta e análise de dados públicos de importação e exportação dos municípios de São Paulo.",
      context: "Desenvolvido em equipe para o projeto API do 1º semestre de DSM (FATEC SJC), primeiro projeto integrador do curso.",
      problem: "Dados públicos de comércio exterior dos municípios paulistas estão dispersos e pouco acessíveis, dificultando consultas e análises rápidas por gestores, pesquisadores e empresas.",
      competenciastec: "Modelagem relacional de banco de dados, desenvolvimento backend com Flask, deploy em nuvem (AWS EC2/RDS), análise exploratória de dados e prototipação de interface no Figma.",
      individual: false,
      role: "Atuei como Product Owner e desenvolvedor backend. Como PO, exercitei tomada de decisão sobre escopo e priorização das entregas, apresentação de ideias ao time e gestão de expectativas com os envolvidos. No desenvolvimento, fui responsável pelo backend Flask, modelagem do banco MySQL e deploy na AWS.",
      softsk: [
        { name: "Liderança & Tomada de Decisão", description: "Como Product Owner, defini escopo e prioridades das entregas, decidindo mesmo com informações incompletas." },
        { name: "Organização", description: "Mantive o time alinhado em torno das entregas no primeiro projeto em equipe da FATEC." },
        { name: "Colaboração & Empatia", description: "Adaptei a comunicação ao perfil de cada membro para sustentar um ambiente colaborativo." },
      ],
      solution: "Aplicação web que centraliza, organiza e exibe esses dados de forma visual e intuitiva, permitindo consultar e analisar importações e exportações por município.",
      challenges: "Modelagem do banco de dados a partir de bases públicas heterogêneas, integração entre backend em Flask e frontend, e implantação da aplicação em ambiente de nuvem (AWS).",
      results: "Aplicação publicada e funcional em produção na AWS, com protótipo de interface validado no Figma e análise exploratória dos dados conduzida em Google Colab.",
      hardsk: [
        { name: "Python", description: "Linguagem base do backend e da análise exploratória dos dados." },
        { name: "Flask", description: "Framework do backend, servindo as consultas de comércio exterior." },
        { name: "MySQL", description: "Modelagem relacional a partir de bases públicas heterogêneas." },
        { name: "AWS", description: "Deploy da aplicação em nuvem (EC2/RDS), publicando o sistema em produção." },
        { name: "Figma", description: "Prototipação e validação da interface antes do desenvolvimento." },
      ],
      technologies: ["HTML", "Python", "Flask", "MySQL", "AWS"],
      repoLink: "https://github.com/Templasan/DSM---Projeto-de-API-1-Semestre",
      images: [
        "assets/img/api1dsm1.jpeg",
        "assets/img/api1dsm2.gif",
        "assets/img/api1dsm3.png",
      ],
    },
    {
      name: "Atlantis — Sistema de Gestão de Parques e Hotéis",
      semester: "Projeto Acadêmico",
      client: "FATEC SJC",
      description: "Sistema SPA para gestão de parques aquáticos, clubes e hotéis, evoluído de uma aplicação CLI para uma arquitetura desacoplada cliente-servidor com React e Express.",
      context: "Projeto acadêmico individual de Técnicas de Programação, evoluindo uma aplicação CLI para uma arquitetura cliente-servidor.",
      problem: "A versão original era uma aplicação CLI, limitando a usabilidade e a apresentação visual da gestão de clientes, dependentes e acomodações de um resort.",
      competenciastec: "Arquitetura cliente-servidor desacoplada com React e Express, aplicação de Design Patterns (Prototype e Builder/Director) em TypeScript, e orquestração de processos concorrentes.",
      individual: true,
      softsk: "",
      solution: "Reestruturação para uma SPA moderna com toda a regra de negócio no backend (Express) e o frontend (React) como camada de exibição reativa, aplicando os padrões de projeto Prototype e Builder/Director.",
      challenges: "Migração de CLI para arquitetura cliente-servidor desacoplada, aplicação de Design Patterns (Prototype e Builder) em Orientação a Objetos, e organização da execução concorrente de frontend e backend.",
      results: "Sistema funcional com frontend e backend integrados, executáveis de forma concorrente, com padrões de projeto que garantem integridade cadastral e consistência na criação das acomodações.",
      hardsk: [
        { name: "React", description: "Frontend SPA como camada de exibição reativa, consumindo o backend." },
        { name: "Express", description: "Backend desacoplado concentrando toda a regra de negócio." },
        { name: "TypeScript", description: "Implementação dos Design Patterns (Prototype e Builder/Director) com tipagem forte." },
        { name: "Vite", description: "Tooling e bundling do frontend React." },
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express", "Vite", "CSS"],
      repoLink: "https://github.com/Templasan/AV4-Tec-II",
      images: ["assets/img/Atlantis.png"],
    },
    {
      name: "AutoManager — API de Gerenciamento Automotivo",
      semester: "Projeto Acadêmico",
      client: "FATEC SJC",
      description: "Sistema REST para gerenciamento de empresas automotivas, incluindo cadastro de usuários, veículos, mercadorias, serviços e vendas, com autenticação JWT e navegação HATEOAS.",
      context: "Projeto acadêmico individual de Desenvolvimento Web III, focado em uma API REST segura e amplamente testada.",
      problem: "Empresas automotivas precisam gerenciar de forma integrada usuários com diferentes perfis (clientes, funcionários, fornecedores), veículos, estoque, serviços e vendas, com níveis de permissão distintos.",
      competenciastec: "API REST com Spring Boot, autenticação e autorização via Spring Security + JWT, navegação HATEOAS, persistência com Spring Data JPA e cobertura de testes de integração com JUnit 5.",
      individual: true,
      softsk: "",
      solution: "API REST em Spring Boot com autenticação via JWT, autorização por 4 perfis (ADMIN, GERENTE, VENDEDOR, CLIENTE) com permissões específicas por rota e acesso restrito por proprietário do recurso, com navegação HATEOAS.",
      challenges: "Implementação de autorização por perfil com regras de acesso por proprietário do recurso e cobertura ampla com testes de integração.",
      results: "API funcional com 307 de 312 testes de integração passando (98,7% de cobertura), abrangendo CRUD completo, autenticação JWT, autorização por perfil, regras de negócio e navegação HATEOAS.",
      hardsk: [
        { name: "Spring Boot", description: "API REST para o gerenciamento automotivo (usuários, veículos, estoque, serviços e vendas)." },
        { name: "Spring Security + JWT", description: "Autenticação e autorização por 4 perfis, com permissões por rota e por proprietário do recurso." },
        { name: "Spring Data JPA", description: "Persistência e mapeamento das entidades de negócio." },
        { name: "Spring HATEOAS", description: "Navegação hipermídia entre os recursos da API." },
        { name: "JUnit 5", description: "Cobertura ampla com testes de integração (98,7% de cobertura)." },
      ],
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "Spring HATEOAS", "MySQL", "H2", "Lombok", "JUnit 5"],
      repoLink: "https://github.com/Templasan/AV4-DevWeb-III",
      images: ["assets/img/Automanager1.png"],
    },
  ],

  // ---------- Documentos e Trabalhos Acadêmicos ----------
  // Use para TCC, artigos, relatórios de iniciação científica, etc.
  academicWorks: [
    {
      type: "Iniciação Científica",
      title: "Análise de Sequências Genômicas com Modelos de Linguagem (Hugging Face)",
      summary: "Pesquisa voltada à aplicação de modelos de linguagem pré-treinados da plataforma Hugging Face (como DNABERT e Nucleotide Transformer) na análise de sequências genômicas, tratando o DNA como uma linguagem para tarefas de classificação, identificação de regiões funcionais e detecção de padrões em genomas.",
      results: "Pesquisa ainda em desenvolvimento.",
      link: "",
    },
  ],

  // ---------- Certificações / Certificados ----------
  certificates: [
    {
      name: ".NET: persistindo dados com Entity Framework Core",
      institution: "Alura",
      year: "2026",
      image: "assets/certs/João Victor Dos Reis Santos - Curso .NET_ persistindo dados com Entity Framework Core - Alura.pdf",
    },
    {
      name: "Lógica de programação: praticando com desafios",
      institution: "Alura",
      year: "2026",
      image: "assets/certs/João Victor Dos Reis Santos - Curso Lógica de programação_ praticando com desafios - Alura.pdf",
    },
    {
      name: "HTTP: entendendo a web por baixo dos panos",
      institution: "Alura",
      year: "2026",
      image: "assets/certs/João Victor Dos Reis Santos - Curso HTTP_ entendendo a web por baixo dos panos - Alura.pdf",
    },
    {
      name: "n8n para devs: Automatizando testes e integrando IA ao fluxo de trabalho",
      institution: "Alura",
      year: "2026",
      image: "assets/certs/João Victor Dos Reis Santos - Curso n8n para devs_ Automatizando testes e integrando IA ao fluxo de trabalho - Alura.pdf",
    },
    {
      name: "Automação de Fluxos: integrando n8n e IA",
      institution: "Alura",
      year: "2026",
      image: "assets/certs/João Victor Dos Reis Santos - Curso Automação de Fluxos_ integrando n8n e IA - Alura.pdf",
    },
    {
      name: "Automação de processos com n8n: modelagem de fluxos e integração de sistemas",
      institution: "Alura",
      year: "2026",
      image: "assets/certs/João Victor Dos Reis Santos - Curso Automação de processos com n8n_ modelagem de fluxos e integração de sistemas - Alura.pdf",
    },
    {
      name: "Automação com n8n: criando fluxos e integrando serviços",
      institution: "Alura",
      year: "2026",
      image: "assets/certs/João Victor Dos Reis Santos - Curso Automação com n8n_ criando fluxos e integrando serviços - Alura.pdf",
    },
    {
      name: "IA: explorando o potencial da inteligência artificial generativa",
      institution: "Alura",
      year: "2026",
      image: "assets/certs/João Victor Dos Reis Santos - Curso IA_ explorando o potencial da inteligência artificial generativa - Alura.pdf",
    },
    {
      name: "n8n para devs: Construindo workflows inteligentes",
      institution: "Alura",
      year: "2026",
      image: "assets/certs/João Victor Dos Reis Santos - Curso n8n para devs_ Construindo workflows inteligentes - Alura.pdf",
    },
    {
      name: "Flash Skills: automação de processos com n8n e IA",
      institution: "Alura",
      year: "2026",
      image: "assets/certs/João Victor Dos Reis Santos - Curso Flash Skills_ automação de processos com n8n e IA - Alura.pdf",
    },
    {
      name: "Copilot Studio: fundamentos e automação",
      institution: "Alura",
      year: "2026",
      image: "assets/certs/João Victor Dos Reis Santos - Curso Copilot Studio_ fundamentos e automação - Alura.pdf",
    },
    {
      name: "ASP.NET: autenticação e autorização em APIs e aplicações web",
      institution: "Alura",
      year: "2026",
      image: "assets/certs/João Victor Dos Reis Santos - Curso ASP.NET_ autenticação e autorização em APIs e aplicações web - Alura.pdf",
    },
    {
      name: "Angular: trabalhando com Tokens JWT na autenticação e cadastro",
      institution: "Alura",
      year: "2025",
      image: "assets/certs/João Victor Dos Reis Santos - Curso Angular_ trabalhando com Tokens JWT na autenticação e cadastro - Alura.pdf",
    },
    {
      name: "Angular: componentização, formulários e interação com APIs",
      institution: "Alura",
      year: "2025",
      image: "assets/certs/João Victor Dos Reis Santos - Curso Angular_ componentização, formulários e interação com APIs - Alura.pdf",
    },
    {
      name: "Angular: evoluindo com formulários e roteamento",
      institution: "Alura",
      year: "2025",
      image: "assets/certs/João Victor Dos Reis Santos - Curso Angular_ evoluindo com formulários e roteamento - Alura.pdf",
    },
    {
      name: "Git e GitHub: dominando controle de versão de código",
      institution: "Alura",
      year: "2025",
      image: "assets/certs/João Victor Dos Reis Santos - Curso Git e GitHub_ dominando controle de versão de código - Alura.pdf",
    },
    {
      name: ".NET 6 e Identity: implementando controle de usuário",
      institution: "Alura",
      year: "2025",
      image: "assets/certs/João Victor Dos Reis Santos - Curso .NET 6 e Identity_ implementando controle de usuário - Alura.pdf",
    },
    {
      name: ".NET 6: criando uma web API",
      institution: "Alura",
      year: "2025",
      image: "assets/certs/João Victor Dos Reis Santos - Curso .NET 6_ criando uma web API - Alura.pdf",
    },
    {
      name: "API Rest com .NET 5: operações essenciais com verbos HTTP",
      institution: "Alura",
      year: "2025",
      image: "assets/certs/João Victor Dos Reis Santos - Curso API Rest com .NET 5_ operações essenciais com verbos HTTP - Alura.pdf",
    },
    {
      name: "C#: dominando Orientação a Objetos",
      institution: "Alura",
      year: "2025",
      image: "assets/certs/João Victor Dos Reis Santos - Curso C#_ dominando Orientação a Objetos - Alura.pdf",
    },
    {
      name: "C#: aplicando a Orientação a Objetos",
      institution: "Alura",
      year: "2025",
      image: "assets/certs/João Victor Dos Reis Santos - Curso C#_ aplicando a Orientação a Objetos - Alura.pdf",
    },
    {
      name: "C#: criando sua primeira aplicação",
      institution: "Alura",
      year: "2025",
      image: "assets/certs/João Victor Dos Reis Santos - Curso C#_ criando sua primeira aplicação - Alura.pdf",
    },
    {
      name: "Git e GitHub: compartilhando e colaborando em projetos",
      institution: "Alura",
      year: "2025",
      image: "assets/certs/João Victor Dos Reis Santos - Curso Git e GitHub_ compartilhando e colaborando em projetos - Alura.pdf",
    },
    {
      name: "Lógica de programação: mergulhe em programação com JavaScript",
      institution: "Alura",
      year: "2025",
      image: "assets/certs/João Victor Dos Reis Santos - Curso Lógica de programação_ mergulhe em programação com JavaScript - Alura.pdf",
    },
    {
      name: "Lógica de programação: explore funções e listas",
      institution: "Alura",
      year: "2025",
      image: "assets/certs/João Victor Dos Reis Santos - Curso Lógica de programação_ explore funções e listas - Alura.pdf",
    },
    {
      name: "Começando em Programação: carreira e primeiros passos",
      institution: "Alura",
      year: "2025",
      image: "assets/certs/João Victor Dos Reis Santos - Curso Começando em Programação_ carreira e primeiros passos - Alura.pdf",
    },
  ],

  // ---------- Participação em Eventos e Atividades Extracurriculares ----------
  events: [
    {
      name: "Hackathon Science Business TMB 2026",
      role: "2º lugar",
      description: "Desenvolvimento de modelos de análise de risco de crédito utilizando aprendizado de máquina.",
    },
    {
      name: "Feira de Soluções FATEC SJC — 2ª edição",
      role: "Apresentador · 2º Semestre 2025",
      description: "Apresentação da Plataforma Integrada de Gestão, desenvolvida em parceria com a Newe Log para centralizar processos administrativos, comerciais e operacionais da empresa.",
    },
    {
      name: "Feira de Soluções FATEC SJC — 1ª edição",
      role: "Apresentador · 1º Semestre 2025",
      description: "Apresentação do projeto KayTrack — plataforma de análise de dados de comércio exterior dos municípios paulistas, desenvolvida em parceria com a FATEC SJC como projeto integrador do 1º semestre.",
    },
  ],

  // ---------- Contato ----------
  contact: [
    { label: "LinkedIn", value: "linkedin.com/in/joaodreissantos/", url: "https://www.linkedin.com/in/joaodreissantos/", icon: "linkedin" },
    { label: "GitHub", value: "github.com/Templasan", url: "https://github.com/Templasan", icon: "github" },
    { label: "E-mail", value: "joaovictordosreissantos439@gmail.com", url: "mailto:joaovictordosreissantos439@gmail.com", icon: "mail" },
  ],

};
