# CRYPTO-YAM
  This is a backend project with node, express and mongodb, JWT and external API.

- - - -
- [Requirements](#Requirements)
  - [Installation](#Installation)
  - [Configure app](#Configure-app)
  - [Running the project for a test environment](#Running-the-project-for-a-test-environment)
  - [Running the project for a development environment](#Running-the-project-for-a-development-environment)
  - [Documentation](#Documentation)
  - [Enpoint list](#Enpoint-list)
    - [AUTH enpoint list](#AUTH-enpoint-list)
      - [SIGNIN](#SIGNIN)
      - [LOGIN](#LOGIN)
    - [USER enpoint list](#USER-enpoint-list)
      - [CREATE USER](#CREATE-USER)
      - [GET USERS](#GET-USERS)
    - [COIN enpoint list](#COIN-enpoint-list)
      - [GET COIN LIST](#GET-COIN-LIST)
      - [ADD A COIN](#ADD-A-COIN)
      - [GET MY TOP COINS](#GET-MY-TOP-COINS)

- - - -
## Requirements

  For development, you will only need Node.js and a node global package (devDependencies).

  You need have a MONGODB_STRING_CONNECTION to development too.

  The project port default is 8080

- - - -
## Installation

    $ git clone https://github.com/yavemu/cryptoyam
    $ cd cryptoyam
    $ npm i

- - - -
## Configure app

  Rename `.env.example.txt` as `.env` then edit it with your settings.

- - - -
## Running the project for a test environment

    $ npm run test

- - - -
## Running the project for a development environment

    $ npm run start:dev

- - - -
## Documentation

  After run the project you can open de documentation running on your browser `http://localhost:8080/docs/`

- - - -
## Enpoints list
We suposed that you have running the project in local environment and the server url as `http://localhost:8080/`

- - - -
### AUTH enpoint list
- - - -
#### SIGNIN
  - POST: `localhost:8080/api/v1/auth/signin`
  - Body data structure:
  ```yaml
    {
      name: "your name",
      lastname: "your lastname",
      username: "your username",
      password: "your password",
      currency: "your currency",
    }
  ```
#### LOGIN
  - POST: `localhost:8080/api/v1/auth/login`
  - Body data structure:
  ```yaml
    {
      username: "your username",
      password: "your password",
    }
  ```

- - - -
### USER enpoint list
- - - -
#### CREATE USER
  - POST: `localhost:8080/api/v1/user`
  - Require Authorization using "Bearer token" type
  - Body data structure:
  ```yaml
    {
      name: "name",
      lastname: "lastname",
      username: "username",
      password: "password",
      currency: "currency",
    }
  ```
#### GET USERS
  - GET: `localhost:8080/api/v1/user`
  - Require Authorization using "Bearer token" type

- - - -
### COIN enpoint list
- - - -
#### GET COIN LIST
  - GET: `localhost:8080/api/v1/coin`
  - Require Authorization using "Bearer token" type
#### ADD A COIN
  - GET: `localhost:8080/api/v1/coin/:coinId/add`
  - Require Authorization using "Bearer token" type
  - In a url you need replace :coinId for a real value, example:
  ```yaml
    localhost:8080/api/v1/coin/ethereum/add
    localhost:8080/api/v1/coin/bitcoin/add
  ```
#### GET MY TOP COINS
  - GET: `localhost:8080/api/v1/coin`
  - Require Authorization using "Bearer token" type
  - Optional params data structure:
  ```yaml
    {
      limit: "limit number",
      sort: "asc or desc"
    }
  ```
  - example
  ```yaml
    localhost:8080/api/v1/coin
    localhost:8080/api/v1/coin?sort=asc
    localhost:8080/api/v1/coin?limit=10
    localhost:8080/api/v1/coin?limit=10&sort=asc
  ```
