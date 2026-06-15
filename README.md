# Portfólio Acadêmico — HTML, CSS e JavaScript puro

## Como editar o conteúdo

Todo o conteúdo do site (nome, foto, formação, projetos, certificados, eventos, contato etc.)
fica em **um único arquivo**: [`js/data.js`](js/data.js).

Para atualizar o portfólio, edite apenas esse arquivo — não é necessário mexer no HTML, CSS
ou no `js/main.js` (que apenas lê `data.js` e monta a página).

### Trocar a foto
1. Coloque sua imagem em `assets/img/` (ex.: `assets/img/profile.jpg`).
2. Atualize `profile.photo` em `js/data.js` com o caminho do arquivo.
   - Se não houver imagem, um círculo com a inicial do seu nome é exibido automaticamente.

### Adicionar/editar projetos
Edite o array `projects` em `js/data.js`. Cada projeto é um objeto com:
`name`, `description`, `problem`, `solution`, `technologies`, `challenges`, `results`,
`repoLink` e `images` (lista de caminhos de imagens/GIFs em `assets/img/`).

### Certificados, trabalhos acadêmicos e eventos
Funcionam da mesma forma: arrays de objetos em `js/data.js` (`certificates`, `academicWorks`,
`events`). Basta copiar um bloco existente, colar e ajustar os campos.

### Pastas de assets
- `assets/img/` — foto de perfil e imagens/GIFs de projetos
- `assets/certs/` — imagens dos certificados
- `assets/docs/` — PDFs de TCC, artigos e relatórios (linke pelo campo `link`)

## Como visualizar

Abra `index.html` diretamente no navegador, ou sirva a pasta com qualquer servidor estático
(ex.: extensão "Live Server" do VS Code) para evitar restrições de `file://`.

## Como publicar

Hospede gratuitamente em **GitHub Pages**, **Vercel** ou **Netlify** — basta apontar para a
raiz deste projeto, sem build necessário (é HTML/CSS/JS puro).
