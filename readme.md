# 📋 Gerenciador de Tarefas (Kanban React)

Uma aplicação web simples e interativa de gerenciamento de tarefas inspirada no modelo Kanban, desenvolvida em **React**. O projeto permite criar, editar, mover tarefas entre diferentes status (Pendente, Em Andamento e Concluída) e excluir itens de forma dinâmica.

---

## 🚀 Funcionalidades

* **Criação de Tarefas:** Adicione novas tarefas diretamente em qualquer uma das colunas de status (`Pendente`, `Em Andamento`, `Concluída`).
* **Edição Inline:** Clique sobre o título de qualquer tarefa para editá-la diretamente na tela. Pressione `Enter` para salvar.
* **Exclusão Rápida:** Ao editar uma tarefa, basta apagar todo o texto do título e pressionar `Enter` para removê-la da lista.
* **Movimentação entre Colunas:** Altere o status da tarefa através do menu seletor (`<select>`) para movê-la instantaneamente entre as etapas do fluxo de trabalho.
* **Layout Responsivo e Alinhado:** Grid estruturado em três colunas com quebra automática de palavras longas (`word-break`) para evitar distorções visuais.

---

## 🛠️ Tecnologias Utilizadas

* **[React](https://reactjs.org/)** (v18.2.0) — Biblioteca principal para construção da interface.
* **React Hooks (`useState`, `useRef`)** — Gerenciamento de estado das tarefas e geração de IDs únicos sem re-renderizações desnecessárias.
* **PropTypes** — Validação de tipos das propriedades passadas entre componentes.
* **CSS3 (Grid & Flexbox)** — Estilização modularizada por componente.

---

## 📂 Estrutura de Pastas

```text
react-aula-para-iniciantes/
├── public/
│   └── index.html          # Arquivo HTML base da aplicação
├── src/
│   ├── components/
│   │   ├── header/         # Componente de barra de navegação (NavBar)
│   │   └── TaskList/       # Componente de coluna de tarefas e estilos
│   │       └── taskitem/   # Componente individual de cada card de tarefa
│   ├── img/                # Ícones e recursos gráficos (SVG)
│   ├── App.jsx             # Componente raiz e lógica central de estado
│   ├── index.jsx           # Ponto de entrada do React DOM
│   └── styles.css          # Estilos globais e configuração do Grid principal
├── .eslintrc.json          # Configurações de linter
├── .gitignore              # Arquivos e pastas ignorados pelo Git (ex: node_modules)
└── package.json            # Dependências e scripts do projeto
```

---

## 💻 Como Executar o Projeto Localmente

Siga os passos abaixo para rodar a aplicação na sua máquina:

### Pré-requisitos
* **[Node.js](https://nodejs.org/)** instalado (recomendado v18 ou superior).
* **npm** (gerenciador de pacotes que acompanha o Node.js).

### Passo a passo

1. **Clone este repositório** (ou baixe os arquivos para uma pasta local):
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd react-aula-para-iniciantes
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```

5. Abra o navegador e acesse `http://localhost:3000` (geralmente abre automaticamente).

---

## 📦 Gerando a Versão de Produção (Build)

Caso queira gerar os arquivos otimizados para hospedar a aplicação (na Vercel, Netlify, GitHub Pages, etc.), execute:

```bash
npm run build
```

Os arquivos finais prontos para deploy serão gerados na pasta `/build`.

---

## 📝 Licença

Este projeto foi desenvolvido para fins de estudo e prática de fundamentos do React. Sinta-se à vontade para clonar, modificar e evoluir!
