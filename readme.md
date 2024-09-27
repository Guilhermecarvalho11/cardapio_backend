# Clone o repositório:

git clone https://github.com/Guilhermecarvalho11/cardapio_backend.git

# Navegue até o diretório do projeto:

cd backend

# Instale as dependências:

npm install

# Instale o Sequelize e o driver do PostgreSQL:

npm install sequelize sequelize-cli pg pg-hstore

# Crie um banco de dados no PostgreSQL:

CREATE DATABASE cardapio_db;

# Configure as variáveis de ambiente:

Renomeie o arquivo .env.example para .env.
DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASS=
JWT_SECRET=

# Execute as migrações para criar as tabelas no banco de dados:

npx sequelize-cli db:migrate

# Para iniciar o servidor de desenvolvimento, execute:

npm start

A API estará disponível em http://localhost:3000.

# Comandos Úteis

Rodar migrações: npx sequelize-cli db:migrate
Reverter migração: npx sequelize-cli db:migrate:undo

Contribuição

# Fork este repositório.

Crie uma branch (git checkout -b feature-nova-funcionalidade).
Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade').
Push a branch (git push origin feature-nova-funcionalidade).

# Autor

Guilherme Carvalho
