
# Loja Fácil

## 1. Descrição do projeto

O Loja Fácil é um sistema simplificado de comércio eletrônico desenvolvido como atividade acadêmica da disciplina de DevOps.

O sistema tem como finalidade permitir que usuários visualizem produtos e realizem operações básicas de compra.

## 2. Objetivos

- Desenvolver uma aplicação simples de comércio eletrônico.
- Aplicar conceitos de desenvolvimento de software.
- Utilizar Git e GitHub para controle de versão.
- Automatizar testes e integração contínua.
- Organizar o desenvolvimento seguindo boas práticas de DevOps.

## 3. Funcionalidades iniciais

- Cadastro de produtos.
- Listagem de produtos.
- Consulta de detalhes dos produtos.
- Adição de produtos ao carrinho.
- Cálculo do valor total da compra.

## 4. Tecnologias utilizadas

- JavaScript
- Node.js
- Git
- GitHub
- Jest
- GitHub Actions

## 5. Estrutura do projeto

```text
Loja-Facil/
├── src/
├── tests/
├── docs/
├── README.md
├── .gitignore
└── package.json
```

## 6. Como executar o projeto

### Pré-requisitos

- Node.js instalado.
- npm instalado.

### Instalação

```bash
npm install
```

### Executar a aplicação

```bash
npm start
```

### Executar os testes

```bash
npm test
```

## 7. Estratégia de desenvolvimento

Será utilizada a estratégia Gitflow, com a branch principal `main`, uma branch de desenvolvimento `develop` e branches específicas para novas funcionalidades.

As alterações serão realizadas em branches separadas e integradas por meio de Pull Requests.

## 8. Controle de versão

Os commits seguirão o padrão Conventional Commits, utilizando prefixos como:

- feat: nova funcionalidade.
- fix: correção de erro.
- docs: documentação.
- test: testes.
- chore: tarefas de manutenção.
