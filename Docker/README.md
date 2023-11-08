# Docker: Um Guia Rápido

## Introdução

O Docker é uma plataforma open-source que facilita a criação, implantação e execução de aplicativos em contêineres. Contêineres são unidades leves e portáteis que encapsulam tudo o que é necessário para que um software seja executado, incluindo o código, as bibliotecas e as dependências.

## Pilares do Docker

### Namespaces

Os namespaces no Docker são responsáveis por isolar processos. Cada contêiner em execução possui seu próprio conjunto de namespaces, proporcionando uma camada de isolamento que impede que processos em um contêiner interfiram nos processos de outros contêineres.

### Cgroups (Control Groups)

Os Cgroups controlam os recursos computacionais disponíveis para um contêiner. Eles gerenciam a alocação de recursos como CPU, memória, I/O e rede, garantindo que cada contêiner tenha sua fatia justa de recursos, sem impactar os outros contêineres no mesmo sistema.

## Overlay File System

O Overlay File System é uma tecnologia fundamental no Docker. Ele permite a sobreposição de sistemas de arquivos, o que é essencial para a criação eficiente de imagens e a execução de contêineres.

## Imagens

No Docker, as imagens são a base dos contêineres. Elas são construídas a partir de um conjunto de instruções contidas em um arquivo chamado Dockerfile. Existem diferentes tipos de imagens, e uma delas é a `scratch`, que é uma imagem vazia usada como base para construir imagens mínimas.

### Exemplo Prático - Construindo uma imagem "Hello World"

    # Crie um arquivo chamado Dockerfile
    touch Dockerfile
    
    # Abra o Dockerfile em um editor de texto e adicione o seguinte conteúdo:
    # FROM scratch
    # COPY hello-world /
    # CMD ["/hello-world"]
    
    # Crie a imagem usando o Dockerfile
    docker build -t hello-world-image .
    
    # Execute o contêiner a partir da imagem criada
    docker run hello-world-image

 

## Tipos de Networks

O Docker suporta diferentes tipos de redes para conectar contêineres entre si e com o mundo externo. Alguns dos tipos de networks incluem:

### Bridge

A rede bridge é a rede padrão utilizada pelo Docker. Ela permite que os contêineres se comuniquem entre si usando pontes de rede internas.

### Exemplo Prático - Criando uma Rede Bridge e Executando Contêineres

    # Crie uma rede bridge
    docker network create my-bridge-network
    
    # Execute dois contêineres na mesma rede bridge
    docker run --network=my-bridge-network -d --name=container1 nginx
    docker run --network=my-bridge-network -d --name=container2 nginx

### Host

Na rede host, o contêiner compartilha o namespace de rede com o host, o que significa que eles compartilham a mesma interface de rede e porta.

### Exemplo Prático - Executando um Contêiner na Rede Host

`# Execute um contêiner na rede host
docker run --network=host -d --name=host-container nginx` 

### Overlay

A rede overlay é utilizada para conectar contêineres em diferentes hosts, permitindo a comunicação entre eles em ambientes distribuídos.

### Exemplo Prático - Configurando uma Rede Overlay

    # Crie uma rede overlay
    docker network create -d overlay my-overlay-network
    
    # Execute contêineres na nova rede overlay
    docker service create --network=my-overlay-network --name=overlay-container1 nginx
    docker service create --network=my-overlay-network --name=overlay-container2 nginx

### Macvlan

A rede macvlan permite atribuir endereços MAC individuais para cada contêiner, possibilitando que eles se comportem como máquinas físicas na rede.

### None

A rede none desabilita completamente a configuração de rede para um contêiner, deixando-o isolado e sem acesso à rede.

## Docker Compose

Docker Compose é uma ferramenta que permite definir e executar aplicativos Docker multi-container em um único arquivo, simplificando o processo de orquestração.

### Exemplo Prático - Docker Compose para uma Aplicação Web Simples

    # Crie um arquivo chamado docker-compose.yml
    version: '3'
    
    services:
      web:
        image: nginx
        ports:
          - "80:80"
      db:
        image: mysql
        environment:
          MYSQL_ROOT_PASSWORD: example
          MYSQL_DATABASE: mydatabase

    # Execute a aplicação usando o docker-compose
    docker-compose up -d 

Esse exemplo utiliza o Docker Compose para definir dois serviços, um para um servidor web Nginx e outro para um banco de dados MySQL. O Docker Compose simplifica a orquestração desses serviços em um único comando.

## Conclusão
O Docker é uma ferramenta para desenvolvemos, empacotamos e distribuímos software. Com seus conceitos fundamentais, como namespaces, Cgroups e Overlay File System, e suas funcionalidades práticas, como a construção de imagens e o uso de redes, o Docker oferece uma solução eficiente para a criação de ambientes isolados e portáteis. Além disso, o Docker Compose simplifica a orquestração de aplicativos complexos. Ao dominar esses conceitos e ferramentas, você estará pronto para explorar o vasto mundo dos contêineres.