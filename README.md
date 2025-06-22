# Backend - Teddy Financas

API desenvolvida em **NestJS** com **Prisma ORM** e **PostgreSQL**, para gerenciar Clientes, incluindo funcionalidades de cadastro, listagem paginada, atualização e deleção.

---

## 🚀 Tecnologias

- [NestJS](https://nestjs.com/) - Framework backend
- [Prisma](https://www.prisma.io/) - ORM moderno
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional

---

## Instalação Local

### Pré-requisitos

- Node.js v18+
- PostgreSQL

### Rodando o projeto

```bash

# Instale as dependências
$ yarn

# edite o DATABASE_URL com sua conexão Postgres

# Crie as tabelas no banco
npx prisma migrate dev --name init

# Prisma Generate
npx prisma generate

# Prisma Studio: para visualizar dados no navegador
npx prisma studio 

# Rode o servidor
npm run start:dev

```
# Endpoints principais

|Método|Rota|Descrição|
|------|----|---------|
|GET|/peoples/paginated|Lista pessoas (paginado)|
|POST|/peoples|Cria nova pessoa|
|GET|/peoples/:id|Busca uma pessoa específica|
|PUT|/peoples/:id|Atualiza dados de uma pessoa|
|DELETE|/people/:id|Remove uma pessoa|