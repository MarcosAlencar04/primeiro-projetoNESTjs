# Projeto Básico NestJS com Prisma - API de Criação de Usuários

Este projeto é um primeiro contato com as tecnologias NestJS e Prisma. A aplicação possui apenas um endpoint **POST** para criar usuários, recebendo um corpo JSON com os campos `name` e `occupation`. Vale ressaltar que o projeto é experimental e não segue padrões específicos de desenvolvimento, servindo apenas para fins de aprendizado.

## Tecnologias Utilizadas

- **NestJS**
- **Prisma**
- **TypeScript**

## Instalação

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/MarcosAlencar04/primeiro-projetoNESTjs.git
   cd primeiro-projetoNESTjs
   ```

2. **Instale as Dependências**

   ```bash
   npm install
   ```

3. **Configure o Banco de Dados**

   Crie um arquivo `.env` na raiz do projeto com a variável de conexão. Exemplo (usando SQLite):

   ```env
   DATABASE_URL="file:./dev.db"
   ```

4. **Execute as Migrações e Gere o Cliente Prisma**

   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

## Uso

1. **Inicie o Servidor**

   ```bash
   npm run start:dev
   ```

2. **Realize uma Requisição POST**

   Envie uma requisição para `http://localhost:3000` com o corpo JSON contendo os campos `name` e `occupation`. Exemplo:

   ```json
   {
     "name": "João",
     "occupation": "Desenvolvedor"
   }
   ```

A aplicação processa a requisição e cria um novo usuário no banco de dados.

## Considerações

Este projeto é apenas para aprendizado e exploração inicial das tecnologias NestJS e Prisma, sem o compromisso com padrões avançados de desenvolvimento.
