# Documentação da Pipeline CI/CD — Loja Fácil

## 1. Objetivo

A pipeline foi criada para automatizar a verificação do projeto Loja Fácil, garantindo que o código seja testado antes de ser disponibilizado como artefato.

## 2. Ferramentas utilizadas

- Git e GitHub
- GitHub Actions
- Node.js
- NPM
- Jest

## 3. Etapas da pipeline

A automação é executada quando há envio de alterações para as branches `master` ou `develop`, ou quando uma Pull Request é aberta para essas branches.

As etapas são:

1. **Checkout:** baixa o código do repositório.
2. **Configuração:** prepara o ambiente com Node.js 24.
3. **Instalação:** instala as dependências usando `npm ci`.
4. **Testes:** executa os testes automatizados com `npm test`.
5. **Artefato:** gera um arquivo ZIP identificado pelo número da execução.
6. **Armazenamento:** disponibiliza o artefato no GitHub Actions.

## 4. Testes e cobertura

Foram implementados testes unitários e de integração utilizando Jest.

Na execução local, foram obtidos os seguintes resultados:

- 4 testes aprovados.
- 2 suítes de testes aprovadas.
- Cobertura de instruções: 44,44%.
- Cobertura de linhas: 44,44%.

## 5. Política Fail Fast

Caso algum teste falhe