
# Desafio Nginx e Node.js

Este repositório contém a solução para o desafio proposto no curso, onde aplicamos nossos conhecimentos sobre a utilização do Nginx como proxy reverso em conjunto com uma aplicação Node.js e um banco de dados MySQL.

## Funcionalidades Implementadas

Ao acessar o Nginx, a aplicação Node.js é acionada para realizar as seguintes operações:

1. Adição de um registro na tabela "people" do banco de dados MySQL, cadastrando um nome.

O retorno da aplicação Node.js para o Nginx é formatado da seguinte maneira:

    Full Cycle Rocks!
    Lista de nomes cadastrada no banco de dados.


## Como Rodar

Para executar a aplicação, certifique-se de ter o Docker e o Docker Compose instalados. Em seguida, basta rodar o seguinte comando:  

`docker-compose up -d` 

A aplicação estará disponível na porta 8080.

## Tecnologias Utilizadas
  
- Nginx

- Node.js / JavaScript

- MySQL

- Docker

- Docker Compose

## Estrutura do Projeto

  

-  `nginx/`: Configurações do Nginx.

-  `node-app/`: Código-fonte da aplicação Node.js.

-  `docker-compose.yml`: Arquivo de configuração do Docker Compose.