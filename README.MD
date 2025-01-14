# Pokémon API

Uma API simples para gerenciar treinadores e seus Pokémons, construída com Node.js e Express.

## Funcionalidades

- Criar, listar e buscar treinadores.
- Criar, listar e buscar Pokémons, vinculados a treinadores.
- Estrutura de dados que permite relacionar treinadores e Pokémons.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (com Mongoose para modelagem de dados)

## Endpoints

### Treinadores

- **Criar um treinador**
  - `POST /trainers`
  - **Corpo da requisição**:
    ```json
    {
      "name": "Nome do Treinador",
      "age": "Idade do Treinador"
    }
    ```

- **Listar todos os treinadores**
  - `GET /trainers`

- **Buscar um treinador pelo ID**
  - `GET /trainers/:id`

### Pokémons

- **Criar um Pokémon**
  - `POST /pokemons`
  - **Corpo da requisição**:
    ```json
    {
      "name": "Nome do Pokémon",
      "type": "Tipo do Pokémon",
      "level": "Nível do Pokémon",
      "trainer": "ID do Treinador"
    }
    ```
  - **Nota**: O ID do treinador deve ser válido e cadastrado.

- **Listar todos os Pokémons**
  - `GET /pokemons`

- **Buscar um Pokémon pelo ID**
  - `GET /pokemons/:id`#   A P I _ p o k e m o n  
 #   A P I _ p o k e m o n  
 