## Instalação e Execução com Docker

Siga os passos abaixo para instalar e executar esta aplicação Laravel utilizando Docker:

### Pré-requisitos

-   [Docker](https://www.docker.com/get-started) instalado na sua máquina
-   [Docker Compose](https://docs.docker.com/compose/install/) instalado

### Passos para rodar o projeto

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2. **Copie o arquivo de exemplo de ambiente:**

    ```bash
    cp .env.example .env
    ```

3. **Suba os containers Docker:**

    ```bash
    docker-compose up -d
    ```

4. **Instale as dependências do Composer dentro do container:**

    ```bash
    docker-compose exec app composer install
    ```

5. **Gere a chave da aplicação:**

    ```bash
    docker-compose exec app php artisan key:generate
    ```

6. **Execute as migrações do banco de dados (opcional):**

    ```bash
    docker-compose exec app php artisan migrate
    ```

7. **Acesse a aplicação:**

    Abra o navegador e acesse [http://localhost](http://localhost)

### Comandos úteis

-   Parar os containers: `docker-compose down`
-   Ver logs: `docker-compose logs -f`

Pronto! Sua aplicação Laravel está rodando com Docker.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
