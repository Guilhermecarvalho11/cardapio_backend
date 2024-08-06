# Nome do Projeto

Breve descrição do projeto e seu propósito.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Autores](#autores)
- [Agradecimentos](#agradecimentos)

## Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v12.0.0 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [MySQL] (ou outro banco de dados compatível com Sequelize)

### Passos

1.  Clone o repositório:

    ```bash
    git clone https://github.com/Guilhermecarvalho11/cardapio_backend.git

    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd backend

    ```

3.  Instale as dependências:

    ```bash
    npm install

    ```

4.  Instale o Sequelize e o driver do MySQL:

    ```bash
    npm install sequelize sequelize-cli mysql2:

    ```

5.  Crie o banco de dados no MySQL, se ainda não estiver criado:
    ```bash
        npx sequelize-cli db:create
    ```

6.Execute as migrações para criar as tabelas no banco de dados:

```bash
      npx sequelize-cli db:migrate

```

## Uso

### Ambiente de Desenvolvimento

Para iniciar o servidor de desenvolvimento, execute:

```bash
npm start
```
