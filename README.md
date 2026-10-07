# ONG Esperança

Projeto acadêmico de desenvolvimento front-end para uma organização não governamental (ONG).

A aplicação apresenta os projetos sociais da ONG Esperança, permite a navegação entre as áreas do site e possibilita o cadastro de voluntários.

## Funcionalidades

- Página inicial com apresentação das ações da ONG.
- Navegação entre início, projetos e cadastro.
- Exibição de projetos sociais em cards.
- Modal com informações adicionais.
- Mensagens de status para as ações realizadas.
- Formulário de cadastro de voluntários.
- Validação de CPF, telefone e CEP.
- Armazenamento dos dados utilizando `localStorage`.
- Menu com melhorias de acessibilidade.
- Modo noturno e modo claro.
- Navegação por teclado.

## Tecnologias utilizadas

### HTML5

Utilizado na estruturação das páginas, formulários, navegação e elementos semânticos.

### CSS3

Utilizado para estilização, layout, responsividade, cards, menu, modal, foco de teclado e modo noturno.

### JavaScript

Responsável pela lógica da aplicação, navegação, validações, formulários e interações com o usuário.

### ES6 Modules

Utilizado para organizar o código JavaScript em módulos separados.

### LocalStorage

Utilizado para armazenar localmente os dados cadastrados pelo usuário no navegador.

### Node.js e npm

Utilizados para executar o processo de build e gerenciar as ferramentas de otimização.

### Git e GitHub

Utilizados para controle de versão, branches, commits, Pull Requests, Issues, Milestones e releases.

### GitHub Actions

Utilizado para automatizar a build e o deploy da aplicação.

### GitHub Pages

Utilizado para publicação da aplicação em ambiente de produção.

## Estrutura do projeto

```text
ONG/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── css/
│   └── style.css
├── html/
│   ├── cadastro.html
│   ├── index.html
│   └── projetos.html
├── imagens/
│   ├── Doacoes.png
│   ├── Voluntarios.png
│   └── Voluntarios (2).png
├── js/
│   ├── cadastro.js
│   ├── interface.js
│   ├── projetos.js
│   └── script.js
├── dist/
├── build.mjs
├── package.json
├── package-lock.json
├── .gitignore
└── README.md